/**
 * 게시판 JavaScript 모듈
 * 검색, 필터링, 페이지네이션 등의 기능을 담당
 * 
 * 리팩토링 원칙:
 * 1. 중복 코드 제거
 * 2. 함수 단위 책임 분리
 * 3. 전역 변수 최소화
 * 4. 렌더링 로직과 데이터 로직 분리
 */

(function() {
    'use strict';

    // ============================================
    // 유틸리티 모듈 (Utility Module)
    // ============================================
    const Utils = {
        /**
         * DOM 요소 선택 (중복 제거)
         */
        $: function(selector) {
            return document.querySelector(selector);
        },
        
        $all: function(selector) {
            return document.querySelectorAll(selector);
        },
        
        $id: function(id) {
            return document.getElementById(id);
        },

        /**
         * 이벤트 바인딩 유틸리티 (중복 제거)
         */
        on: function(element, event, handler) {
            if (element) {
                element.addEventListener(event, handler);
            }
        },

        /**
         * Enter 키 체크
         */
        isEnterKey: function(event) {
            return event.key === 'Enter';
        }
    };

    // ============================================
    // 데이터 모듈 (Data Module)
    // ============================================
    const DataManager = {
        /**
         * 게시글 데이터 저장소
         * 변경 이유: HTML에 하드코딩된 데이터를 JavaScript로 분리하여
         * 데이터와 렌더링 로직을 분리하고, 향후 API 연동 시 쉽게 교체 가능하도록 함
         */
        posts: [
            { id: 1, title: '첫 번째 게시글 제목입니다', author: '홍길동', date: '2024-01-15', views: 123 },
            { id: 2, title: '두 번째 게시글 제목입니다', author: '김철수', date: '2024-01-14', views: 456 },
            { id: 3, title: '세 번째 게시글 제목입니다', author: '이영희', date: '2024-01-13', views: 789 },
            { id: 4, title: '네 번째 게시글 제목입니다', author: '박민수', date: '2024-01-12', views: 234 },
            { id: 5, title: '다섯 번째 게시글 제목입니다', author: '최지영', date: '2024-01-11', views: 567 }
        ],

        /**
         * 게시글 목록 조회
         * 변경 이유: 데이터 접근을 함수로 캡슐화하여 향후 필터링, 정렬 등의
         * 로직을 추가할 때 유연하게 대응 가능하도록 함
         */
        getPosts: function() {
            return this.posts;
        },

        /**
         * 검색어 처리
         */
        processSearch: function(keyword) {
            const trimmedKeyword = keyword.trim();
            // 검색 로직 구현 (데이터 처리만 담당)
            return {
                keyword: trimmedKeyword,
                isValid: trimmedKeyword.length > 0
            };
        },

        /**
         * 정렬 처리
         */
        processSort: function(sortValue) {
            // 정렬 로직 구현 (데이터 처리만 담당)
            return {
                sortType: sortValue,
                sortOrder: sortValue === 'latest' ? 'desc' : 'asc'
            };
        },

        /**
         * 페이지네이션 처리
         */
        processPagination: function(pageInfo) {
            // 페이지네이션 로직 구현 (데이터 처리만 담당)
            return {
                currentPage: pageInfo.page || 1,
                action: pageInfo.action || 'move'
            };
        }
    };

    // ============================================
    // 렌더링 모듈 (Rendering Module)
    // ============================================
    const Renderer = {
        /**
         * 게시글 목록 렌더링
         * 변경 이유: HTML에 하드코딩된 게시글을 동적으로 생성하도록 변경
         * - 중복 코드 제거: 각 게시글 아이템 생성 로직을 함수로 추출
         * - 책임 분리: 단일 게시글 렌더링과 전체 목록 렌더링을 분리
         * - 유지보수성 향상: 게시글 구조 변경 시 한 곳만 수정하면 됨
         */
        renderPostList: function(posts) {
            const postListContainer = Utils.$('.post-list');
            if (!postListContainer) return;

            // 변경 이유: 기존 하드코딩된 게시글을 제거하고 새로 렌더링
            // innerHTML 대신 빈 상태로 시작하여 안전하게 렌더링
            postListContainer.innerHTML = '';

            // 변경 이유: forEach를 사용하여 각 게시글을 개별적으로 렌더링
            // 향후 필터링이나 정렬된 데이터를 쉽게 렌더링할 수 있음
            posts.forEach(function(post) {
                const postElement = this.createPostElement(post);
                postListContainer.appendChild(postElement);
            }.bind(this));
        },

        /**
         * 단일 게시글 요소 생성
         * 변경 이유: 게시글 HTML 구조 생성 로직을 별도 함수로 분리
         * - 중복 코드 제거: HTML 템플릿을 함수로 재사용
         * - 가독성 향상: 복잡한 HTML 생성 로직을 독립적으로 관리
         */
        createPostElement: function(post) {
            // 변경 이유: createElement와 textContent 사용으로 XSS 공격 방지
            // innerHTML 사용 시 보안 취약점이 있으므로 안전한 방법 사용
            const article = document.createElement('article');
            article.className = 'post-item';
            article.setAttribute('role', 'listitem');

            // 게시글 번호
            const number = document.createElement('span');
            number.className = 'post-number';
            number.setAttribute('aria-label', '게시글 번호');
            number.textContent = post.id;

            // 게시글 제목
            const titleContainer = document.createElement('h3');
            titleContainer.className = 'post-title';
            const titleLink = document.createElement('a');
            titleLink.href = 'detail.html';
            titleLink.className = 'post-link';
            titleLink.textContent = post.title;
            titleContainer.appendChild(titleLink);

            // 작성자
            const author = document.createElement('span');
            author.className = 'post-author';
            author.setAttribute('aria-label', '작성자');
            author.textContent = post.author;

            // 작성일
            // 변경 이유: time 태그에 datetime 속성을 ISO 형식으로 설정
            // 접근성 향상 및 날짜 파싱 용이성을 위해 표준 형식 사용
            const date = document.createElement('time');
            date.className = 'post-date';
            date.setAttribute('datetime', post.date);
            date.setAttribute('aria-label', '작성일');
            // 변경 이유: 표시용 날짜 형식 변환 (YYYY-MM-DD -> YYYY.MM.DD)
            // 사용자에게 보기 좋은 형식으로 변환하되, datetime은 표준 형식 유지
            date.textContent = post.date.replace(/-/g, '.');

            // 조회수
            const views = document.createElement('span');
            views.className = 'post-views';
            views.setAttribute('aria-label', '조회수');
            views.textContent = post.views;

            // 변경 이유: 요소들을 순서대로 추가하여 HTML 구조 유지
            // 기존 HTML의 구조와 동일하게 유지하여 CSS 스타일이 정상 작동하도록 함
            article.appendChild(number);
            article.appendChild(titleContainer);
            article.appendChild(author);
            article.appendChild(date);
            article.appendChild(views);

            return article;
        },

        /**
         * 검색 결과 렌더링
         */
        renderSearchResults: function(searchData) {
            // 검색 결과 UI 업데이트 로직
            console.log('검색 결과 렌더링:', searchData);
        },

        /**
         * 정렬 결과 렌더링
         */
        renderSortedList: function(sortData) {
            // 정렬된 리스트 UI 업데이트 로직
            console.log('정렬 결과 렌더링:', sortData);
        },

        /**
         * 페이지네이션 렌더링
         */
        renderPagination: function(paginationData) {
            // 페이지네이션 UI 업데이트 로직
            console.log('페이지네이션 렌더링:', paginationData);
        }
    };

    // ============================================
    // 검색 모듈 (Search Module)
    // ============================================
    const SearchModule = {
        /**
         * 검색 모듈 초기화
         */
        init: function() {
            const searchInput = Utils.$id('search-keyword');
            const searchBtn = Utils.$('.search-btn');

            if (!searchInput || !searchBtn) return;

            this.bindEvents(searchInput, searchBtn);
        },

        /**
         * 이벤트 바인딩 (책임 분리)
         */
        bindEvents: function(searchInput, searchBtn) {
            // 검색 버튼 클릭 이벤트
            Utils.on(searchBtn, 'click', this.handleSearchClick.bind(this, searchInput));

            // Enter 키 이벤트
            Utils.on(searchInput, 'keypress', this.handleKeyPress.bind(this, searchInput));
        },

        /**
         * 검색 버튼 클릭 핸들러
         */
        handleSearchClick: function(searchInput) {
            this.executeSearch(searchInput);
        },

        /**
         * 키보드 입력 핸들러
         */
        handleKeyPress: function(searchInput, event) {
            if (Utils.isEnterKey(event)) {
                event.preventDefault();
                this.executeSearch(searchInput);
            }
        },

        /**
         * 검색 실행 (데이터 로직과 렌더링 로직 분리)
         */
        executeSearch: function(searchInput) {
            const keyword = searchInput.value;
            const searchData = DataManager.processSearch(keyword);
            
            if (searchData.isValid) {
                Renderer.renderSearchResults(searchData);
            }
        }
    };

    // ============================================
    // 필터 모듈 (Filter Module)
    // ============================================
    const FilterModule = {
        /**
         * 필터 모듈 초기화
         */
        init: function() {
            const sortFilter = Utils.$id('sort-filter');
            if (!sortFilter) return;

            this.bindEvents(sortFilter);
        },

        /**
         * 이벤트 바인딩 (책임 분리)
         */
        bindEvents: function(sortFilter) {
            Utils.on(sortFilter, 'change', this.handleSortChange.bind(this, sortFilter));
        },

        /**
         * 정렬 변경 핸들러
         */
        handleSortChange: function(sortFilter, event) {
            const sortValue = event.target.value;
            const sortData = DataManager.processSort(sortValue);
            Renderer.renderSortedList(sortData);
        }
    };

    // ============================================
    // 페이지네이션 모듈 (Pagination Module)
    // ============================================
    const PaginationModule = {
        /**
         * 페이지네이션 모듈 초기화
         */
        init: function() {
            const paginationLinks = Utils.$all('.pagination-number, .pagination-prev, .pagination-next');
            if (paginationLinks.length === 0) return;

            this.bindEvents(paginationLinks);
        },

        /**
         * 이벤트 바인딩 (책임 분리)
         */
        bindEvents: function(paginationLinks) {
            paginationLinks.forEach(function(link) {
                Utils.on(link, 'click', this.handlePaginationClick.bind(this, link));
            }.bind(this));
        },

        /**
         * 페이지네이션 클릭 핸들러
         */
        handlePaginationClick: function(link, event) {
            event.preventDefault();
            
            const pageInfo = this.extractPageInfo(link);
            const paginationData = DataManager.processPagination(pageInfo);
            Renderer.renderPagination(paginationData);
        },

        /**
         * 페이지 정보 추출
         */
        extractPageInfo: function(link) {
            const isPrev = link.classList.contains('pagination-prev');
            const isNext = link.classList.contains('pagination-next');
            const pageNumber = parseInt(link.textContent.trim(), 10);

            return {
                page: isNaN(pageNumber) ? null : pageNumber,
                action: isPrev ? 'prev' : isNext ? 'next' : 'move'
            };
        }
    };

    // ============================================
    // 게시글 목록 모듈 (Post List Module)
    // ============================================
    const PostListModule = {
        /**
         * 게시글 목록 모듈 초기화
         * 변경 이유: 게시글 목록 렌더링을 독립적인 모듈로 분리
         * - 책임 분리: 게시글 목록 관련 로직을 한 곳에 모음
         * - 확장성: 향후 게시글 추가/삭제/수정 기능 추가 시 이 모듈만 수정
         */
        init: function() {
            // 변경 이유: 초기 로드 시 게시글 목록을 렌더링
            // HTML에 하드코딩된 데이터 대신 JavaScript에서 동적으로 생성
            const posts = DataManager.getPosts();
            Renderer.renderPostList(posts);
        }
    };

    // ============================================
    // 애플리케이션 초기화
    // ============================================
    function init() {
        // 변경 이유: 게시글 목록을 먼저 렌더링한 후 다른 모듈 초기화
        // 게시글 목록이 있어야 검색, 필터링, 페이지네이션이 의미가 있음
        PostListModule.init();
        SearchModule.init();
        FilterModule.init();
        PaginationModule.init();
    }

    // DOM 로드 완료 후 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
