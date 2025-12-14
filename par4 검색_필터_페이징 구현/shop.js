// ============================================
// 상품 데이터
// ============================================

const products = [
    {
        id: 1,
        name: "프리미엄 무선 이어폰",
        category: "전자제품",
        price: 29900,
        originalPrice: 39900,
        discount: 25,
        tags: ["무선", "블루투스", "음질"],
        image: "https://via.placeholder.com/300x300?text=무선이어폰"
    },
    {
        id: 2,
        name: "스마트 워치 프로",
        category: "전자제품",
        price: 89900,
        originalPrice: 129900,
        discount: 30,
        tags: ["스마트워치", "건강", "운동"],
        image: "https://via.placeholder.com/300x300?text=스마트워치"
    },
    {
        id: 3,
        name: "면 셔츠 - 화이트",
        category: "의류",
        price: 24900,
        originalPrice: 29300,
        discount: 15,
        tags: ["셔츠", "정장", "비즈니스"],
        image: "https://via.placeholder.com/300x300?text=셔츠"
    },
    {
        id: 4,
        name: "청바지 스키니 진",
        category: "의류",
        price: 34900,
        originalPrice: 43600,
        discount: 20,
        tags: ["청바지", "데님", "캐주얼"],
        image: "https://via.placeholder.com/300x300?text=청바지"
    },
    {
        id: 5,
        name: "유기농 아몬드 500g",
        category: "식품",
        price: 27900,
        originalPrice: 42900,
        discount: 35,
        tags: ["건강식품", "견과류", "유기농"],
        image: "https://via.placeholder.com/300x300?text=아몬드"
    },
    {
        id: 6,
        name: "커피 원두 1kg",
        category: "식품",
        price: 22900,
        originalPrice: 25400,
        discount: 10,
        tags: ["커피", "원두", "아침식사"],
        image: "https://via.placeholder.com/300x300?text=커피"
    },
    {
        id: 7,
        name: "웹 개발 바이블",
        category: "도서",
        price: 18900,
        originalPrice: 31500,
        discount: 40,
        tags: ["프로그래밍", "웹개발", "IT"],
        image: "https://via.placeholder.com/300x300?text=도서"
    },
    {
        id: 8,
        name: "러닝화 에어맥스",
        category: "스포츠",
        price: 31900,
        originalPrice: 38900,
        discount: 18,
        tags: ["운동화", "러닝", "운동"],
        image: "https://via.placeholder.com/300x300?text=운동화"
    },
    {
        id: 9,
        name: "노트북 스탠드",
        category: "전자제품",
        price: 19900,
        originalPrice: 24900,
        discount: 20,
        tags: ["액세서리", "노트북", "인체공학"],
        image: "https://via.placeholder.com/300x300?text=노트북스탠드"
    },
    {
        id: 10,
        name: "후드 집업",
        category: "의류",
        price: 44900,
        originalPrice: 59900,
        discount: 25,
        tags: ["후드", "캐주얼", "데일리"],
        image: "https://via.placeholder.com/300x300?text=후드집업"
    },
    {
        id: 11,
        name: "그린티 홍차 티백",
        category: "식품",
        price: 12900,
        originalPrice: 18000,
        discount: 28,
        tags: ["차", "홍차", "건강"],
        image: "https://via.placeholder.com/300x300?text=홍차"
    },
    {
        id: 12,
        name: "요가 매트",
        category: "스포츠",
        price: 16900,
        originalPrice: 26900,
        discount: 37,
        tags: ["요가", "운동", "홈트레이닝"],
        image: "https://via.placeholder.com/300x300?text=요가매트"
    },
    {
        id: 13,
        name: "블루투스 스피커",
        category: "전자제품",
        price: 59900,
        originalPrice: 79900,
        discount: 25,
        tags: ["스피커", "블루투스", "음악"],
        image: "https://via.placeholder.com/300x300?text=스피커"
    },
    {
        id: 14,
        name: "정장 수트",
        category: "의류",
        price: 149900,
        originalPrice: 199900,
        discount: 25,
        tags: ["정장", "수트", "비즈니스"],
        image: "https://via.placeholder.com/300x300?text=수트"
    },
    {
        id: 15,
        name: "유기농 꿀 500g",
        category: "식품",
        price: 19900,
        originalPrice: 28900,
        discount: 31,
        tags: ["꿀", "유기농", "자연식품"],
        image: "https://via.placeholder.com/300x300?text=꿀"
    },
    {
        id: 16,
        name: "AI 머신러닝 가이드",
        category: "도서",
        price: 22900,
        originalPrice: 34900,
        discount: 34,
        tags: ["AI", "머신러닝", "IT"],
        image: "https://via.placeholder.com/300x300?text=AI도서"
    },
    {
        id: 17,
        name: "등산 배낭",
        category: "스포츠",
        price: 49900,
        originalPrice: 69900,
        discount: 28,
        tags: ["등산", "배낭", "아웃도어"],
        image: "https://via.placeholder.com/300x300?text=배낭"
    },
    {
        id: 18,
        name: "무선 마우스",
        category: "전자제품",
        price: 17900,
        originalPrice: 25900,
        discount: 31,
        tags: ["마우스", "무선", "컴퓨터"],
        image: "https://via.placeholder.com/300x300?text=마우스"
    },
    {
        id: 19,
        name: "니트 스웨터",
        category: "의류",
        price: 34900,
        originalPrice: 49900,
        discount: 30,
        tags: ["니트", "스웨터", "겨울"],
        image: "https://via.placeholder.com/300x300?text=니트"
    },
    {
        id: 20,
        name: "스낵 세트 박스",
        category: "식품",
        price: 15900,
        originalPrice: 23900,
        discount: 33,
        tags: ["과자", "스낵", "선물"],
        image: "https://via.placeholder.com/300x300?text=스낵"
    },
    {
        id: 21,
        name: "자바스크립트 완벽 가이드",
        category: "도서",
        price: 26900,
        originalPrice: 39900,
        discount: 32,
        tags: ["프로그래밍", "자바스크립트", "IT"],
        image: "https://via.placeholder.com/300x300?text=JS도서"
    },
    {
        id: 22,
        name: "덤벨 세트",
        category: "스포츠",
        price: 79900,
        originalPrice: 119900,
        discount: 33,
        tags: ["헬스", "덤벨", "근력운동"],
        image: "https://via.placeholder.com/300x300?text=덤벨"
    },
    {
        id: 23,
        name: "태블릿 거치대",
        category: "전자제품",
        price: 21900,
        originalPrice: 32900,
        discount: 33,
        tags: ["태블릿", "액세서리", "거치대"],
        image: "https://via.placeholder.com/300x300?text=거치대"
    },
    {
        id: 24,
        name: "트레이닝복 세트",
        category: "의류",
        price: 69900,
        originalPrice: 99900,
        discount: 30,
        tags: ["트레이닝복", "운동", "스포츠웨어"],
        image: "https://via.placeholder.com/300x300?text=트레이닝복"
    }
];

// ============================================
// 전역 변수
// ============================================

let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 12;

// ============================================
// DOM 요소 가져오기
// ============================================

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search-button');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const discountFilter = document.getElementById('discountFilter');
const resetFiltersButton = document.getElementById('resetFilters');
const productsSection = document.getElementById('productsSection');
const paginationSection = document.getElementById('paginationSection');
const resultsCount = document.getElementById('resultsCount');

// ============================================
// 이벤트 리스너 등록
// ============================================

searchInput.addEventListener('input', handleSearch);
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);
discountFilter.addEventListener('change', applyFilters);
resetFiltersButton.addEventListener('click', resetAllFilters);

// ============================================
// 검색 함수
// ============================================

function handleSearch() {
    applyFilters();
}

function searchProducts(query, productList) {
    if (!query.trim()) {
        return productList;
    }

    const lowerQuery = query.toLowerCase();
    return productList.filter(product => {
        // 상품명 검색
        const nameMatch = product.name.toLowerCase().includes(lowerQuery);
        
        // 태그 검색
        const tagMatch = product.tags.some(tag => 
            tag.toLowerCase().includes(lowerQuery)
        );
        
        return nameMatch || tagMatch;
    });
}

// ============================================
// 필터 함수
// ============================================

function applyFilters() {
    const searchQuery = searchInput.value.trim();
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    const discountRange = discountFilter.value;

    // 검색 적용
    let result = searchProducts(searchQuery, products);

    // 카테고리 필터
    if (category) {
        result = result.filter(product => product.category === category);
    }

    // 가격대 필터
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        result = result.filter(product => {
            if (max === 999999) {
                return product.price >= min;
            }
            return product.price >= min && product.price <= max;
        });
    }

    // 할인율 필터
    if (discountRange) {
        const [min, max] = discountRange.split('-').map(Number);
        result = result.filter(product => {
            if (max === 999) {
                return product.discount >= min;
            }
            return product.discount >= min && product.discount <= max;
        });
    }

    filteredProducts = result;
    currentPage = 1; // 필터 변경 시 첫 페이지로 이동
    renderProducts();
    renderPagination();
    updateResultsCount();
}

// ============================================
// 필터 초기화 함수
// ============================================

function resetAllFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    priceFilter.value = '';
    discountFilter.value = '';
    
    filteredProducts = [...products];
    currentPage = 1;
    renderProducts();
    renderPagination();
    updateResultsCount();
}

// ============================================
// 상품 렌더링 함수
// ============================================

function renderProducts() {
    // 페이지네이션 계산
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    // 상품 섹션 비우기
    productsSection.innerHTML = '';

    // 상품 카드 생성
    if (productsToShow.length === 0) {
        productsSection.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #7f8c8d;">
                <p style="font-size: 1.25rem; margin-bottom: 10px;">검색 결과가 없습니다</p>
                <p>다른 검색어나 필터를 시도해보세요.</p>
            </div>
        `;
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsSection.appendChild(productCard);
    });
}

// ============================================
// 상품 카드 생성 함수
// ============================================

function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const discountBadge = product.discount > 0 
        ? `<span class="discount-badge">${product.discount}%</span>` 
        : '';

    const tagsHtml = product.tags.map(tag => 
        `<span class="product-tag">${tag}</span>`
    ).join('');

    card.innerHTML = `
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${discountBadge}
            <div class="product-tags">${tagsHtml}</div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h2 class="product-name">${product.name}</h2>
            <div class="price-section">
                <span class="current-price">₩${product.price.toLocaleString()}</span>
                ${product.originalPrice > product.price 
                    ? `<span class="original-price">₩${product.originalPrice.toLocaleString()}</span>` 
                    : ''}
            </div>
            <button class="cart-button" aria-label="장바구니에 추가">
                <span class="cart-icon">🛒</span>
                장바구니
            </button>
        </div>
    `;

    // 장바구니 버튼 이벤트 리스너
    const cartButton = card.querySelector('.cart-button');
    cartButton.addEventListener('click', () => {
        alert(`${product.name}이(가) 장바구니에 추가되었습니다.`);
    });

    return card;
}

// ============================================
// 페이징 렌더링 함수
// ============================================

function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    paginationSection.innerHTML = '';

    if (totalPages <= 1) {
        return; // 페이지가 1개 이하면 페이징 숨기기
    }

    // 이전 버튼
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-button prev-next';
    prevButton.textContent = '이전';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationSection.appendChild(prevButton);

    // 페이지 번호 버튼
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        const firstButton = createPageButton(1);
        paginationSection.appendChild(firstButton);
        
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 8px';
            paginationSection.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = createPageButton(i);
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        paginationSection.appendChild(pageButton);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0 8px';
            paginationSection.appendChild(ellipsis);
        }
        
        const lastButton = createPageButton(totalPages);
        paginationSection.appendChild(lastButton);
    }

    // 다음 버튼
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-button prev-next';
    nextButton.textContent = '다음';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationSection.appendChild(nextButton);
}

// ============================================
// 페이지 버튼 생성 함수
// ============================================

function createPageButton(pageNum) {
    const button = document.createElement('button');
    button.className = 'pagination-button';
    button.textContent = pageNum;
    button.addEventListener('click', () => {
        currentPage = pageNum;
        renderProducts();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return button;
}

// ============================================
// 결과 개수 업데이트 함수
// ============================================

function updateResultsCount() {
    const count = filteredProducts.length;
    resultsCount.innerHTML = `전체 <strong>${count}</strong>개 상품`;
}

// ============================================
// 초기 렌더링
// ============================================

renderProducts();
renderPagination();
updateResultsCount();
