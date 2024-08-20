const menuItems = [
    { name: "ICE 메가리카노", category: "coffee", subcategory: "에스프레소", price: 3000, img: "images/1.png" },
    { name: "ICE 아메리카노", category: "coffee", subcategory: "에스프레소", price: 2000, img: "images/2.png" },
    { name: "할메가커피", category: "coffee", subcategory: "에스프레소", price: 1900, img: "images/3.png" },
    { name: "왕할메가커피", category: "coffee", subcategory: "에스프레소", price: 2900, img: "images/4.png" },
    { name: "ICE 꿀아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "images/5.png" },
    { name: "ICE 바닐라아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "images/6.png" },
    { name: "ICE 헤이즐넛아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "images/7.png" },
    { name: "HOT 아메리카노", category: "coffee", subcategory: "에스프레소", price: 1500, img: "images/8.png" },
    { name: "HOT 꿀아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "images/8.png" },
    { name: "HOT 바닐라아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "images/8.png" },
    { name: "HOT 헤이즐넛아메리카노", category: "coffee", subcategory: "에스프레소", price: 2700, img: "images/8.png" },
    { name: "ICE 카페라떼", category: "coffee", subcategory: "라떼", price: 2900, img: "images/12.png" },
    { name: "ICE 바닐라라떼", category: "coffee", subcategory: "라떼", price: 3400, img: "images/13.png" },
    { name: "ICE 연유라떼", category: "coffee", subcategory: "라떼", price: 3900, img: "images/13.png" },
    { name: "ICE 큐브라떼", category: "coffee", subcategory: "라떼", price: 4200, img: "images/15.png" },
    { name: "ICE 카페모카", category: "coffee", subcategory: "라떼", price: 3900, img: "images/16.png" },
    { name: "ICE 카푸치노", category: "coffee", subcategory: "라떼", price: 2900, img: "images/17.png" },
    { name: "HOT 카페라떼", category: "coffee", subcategory: "라떼", price: 2900, img: "images/18.png" },
    { name: "HOT 바닐라라떼", category: "coffee", subcategory: "라떼", price: 3400, img: "images/18.png" },
    { name: "HOT 연유라떼", category: "coffee", subcategory: "라떼", price: 3900, img: "images/20.png" },
    { name: "HOT 카푸치노", category: "coffee", subcategory: "라떼", price: 2900, img: "images/21.png" },
    { name: "HOT 카페모카", category: "coffee", subcategory: "라떼", price: 3900, img: "images/22.png" },
    { name: "HOT 카라멜마끼아또", category: "coffee", subcategory: "라떼", price: 3700, img: "images/23.png" },
    { name: "오이오이 라임 오히또", category: "beverages", subcategory: "에이드", price: 3900, img: "images/24.png" },
    { name: "메가에이드", category: "beverages", subcategory: "에이드", price: 3900, img: "images/25.png" },
    { name: "유니콘매직에이드(블루)", category: "beverages", subcategory: "에이드", price: 3800, img: "images/26.png" },
    { name: "레몬에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "images/27.png" },
    { name: "블루레몬에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "images/28.png" },
    { name: "자몽에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "images/29.png" },
    { name: "청포도에이드", category: "beverages", subcategory: "에이드", price: 3500, img: "images/30.png" },
    { name: "라임모히또", category: "beverages", subcategory: "에이드", price: 3800, img: "images/31.png" },
    { name: "체리콕", category: "beverages", subcategory: "에이드", price: 3300, img: "images/32.png" },
    { name: "왕메가초코", category: "beverages", subcategory: "논-커피 라떼", price: 4400, img: "images/33.png" },
    { name: "ICE 딸기라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3700, img: "images/34.png" },
    { name: "ICE 오레오초코라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3900, img: "images/35.png" },
    { name: "ICE 곡물라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3300, img: "images/36.png" },
    { name: "ICE 녹차라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "images/37.png" },
    { name: "ICE 토피넛라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3800, img: "images/38.png" },
    { name: "ICE 고구마라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "images/39.png" },
    { name: "ICE 로얄밀크티라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3700, img: "images/40.png" },
    { name: "ICE 흑당라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3300, img: "images/41.png" },
    { name: "ICE 흑당밀크티라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "images/42.png" },
    { name: "ICE 흑당버블 밀크티라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3800, img: "images/43.png" },
    { name: "핫초코", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "images/44.png" },
    { name: "HOT 곡물라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3300, img: "images/45.png" },
    { name: "HOT 녹차라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "images/46.png" },
    { name: "HOT 토피넛라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3800, img: "images/47.png" },
    { name: "HOT 고구마라떼", category: "beverages", subcategory: "논-커피 라떼", price: 3500, img: "images/48.png" }
];

let selectedCategory = '';
let selectedSubCategory = '';
let cart = [];
let totalPrice = 0;
let currentPage = 1;
const itemsPerPage = 12;
const itemsPerPageFriendly = 4; 
const itemsPerPageDefault = 12;
let selectedMenuItem = null;
let selectedOptions = [];
let quantity = 1;
let currentIndex = 0;
let isFriendlyMode = false;

const categories = {
    coffee: ["에스프레소", "라떼"],
    beverages: ["에이드", "논-커피 라떼"]
};

function goToHome() {
    window.location.href = 'index.html'; // 첫 화면으로 이동
 }

function closeConfirmationModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

function goToMenuSelection() {
    document.getElementById('initial-screen').style.display = 'none';
    document.getElementById('menu-selection-screen').style.display = 'block';
}

function displayCarouselItems() {
    const carouselItems = document.querySelector('.carousel-items');
    carouselItems.innerHTML = '';
    const filteredItems = menuItems.filter(item => item.category === selectedCategory && item.subcategory === selectedSubCategory);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('carousel-item');
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} 원</p>
            <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
        `;
        carouselItems.appendChild(menuItem);
    });

    // 캐러셀 컨테이너를 보이게 설정
    document.getElementById('carousel-container').style.display = 'block';
}

function displayMenuItems() {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselItems = document.querySelector('.carousel-items');
    const menuContainer = document.getElementById('menu');

    // 기존 메뉴 초기화
    carouselItems.innerHTML = '';
    menuContainer.innerHTML = '';

    const filteredItems = menuItems.filter(item => item.category === selectedCategory && item.subcategory === selectedSubCategory);

    if (filteredItems.length === 0) {
        console.error("해당 서브카테고리에 해당하는 메뉴가 없습니다.");
        return;
    }

    if (isFriendlyMode) {
        // 간편 주문 모드일 때 캐러셀 슬라이더에 아이템 추가
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('carousel-item');
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} 원</p>
                <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
            `;
            carouselItems.appendChild(menuItem);
        });
        carouselContainer.style.display = 'block';
        menuContainer.style.display = 'none';
    } else {
        // 기본 주문 모드일 때 리스트 형태로 아이템 추가
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} 원</p>
                <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
            `;
            menuContainer.appendChild(menuItem);
        });
        carouselContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
    }
}

function updateCarouselPosition() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const containerWidth = document.querySelector('.carousel-wrapper').offsetWidth;
    const itemWidth = containerWidth / 5; // 화면에 5개의 아이템이 보이도록 설정
    const position = -currentIndex * itemWidth + (containerWidth / 2 - itemWidth / 2);

    document.querySelector('.carousel-wrapper').style.transform = `translateX(${position}px)`;

    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active'); // 중앙에 있는 메뉴를 크게 표시
            item.style.zIndex = 10; // 중앙의 메뉴를 앞에 보이도록 설정
        } else {
            item.classList.remove('active'); // 나머지 메뉴는 기본 크기 유지
            item.style.zIndex = 1; // 다른 메뉴는 뒤로 가도록 설정
        }
    });
}

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarouselPosition();
    }
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    }
});

window.addEventListener('load', () => {
    updateCarouselPosition();
    window.addEventListener('resize', updateCarouselPosition); // 창 크기 변경 시 위치 조정
});

function selectMenu(menuType) {
    const orderScreen = document.getElementById('order-screen');
    const startScreen = document.getElementById('start-screen');
    const voiceButton = document.getElementById('start-voice-button');
    
    if (menuType === 'friendly') {
        isFriendlyMode = true;  // 간편 주문 모드 활성화
        orderScreen.classList.add('friendly');
        startScreen.classList.add('friendly');
        voiceButton.style.display = 'block'; // 음성 인식 버튼 표시

    } else if (menuType === 'basic') {
        isFriendlyMode = false;  // 기본 주문 모드 활성화
        orderScreen.classList.remove('friendly');
        startScreen.classList.remove('friendly');
        voiceButton.style.display = 'none'; // 음성 인식 버튼 숨기기

        // 기본 주문 모드에서 버튼 크기 기본 설정으로 복원
        const buttons = startScreen.querySelectorAll('.order-button');
        buttons.forEach(button => {
            button.style.width = ''; // 기본 스타일로 초기화
            button.style.padding = '';
            button.style.fontSize = '';
            button.style.margin = '';
        });
    }
    document.getElementById('menu-selection-screen').style.display = 'none';
    startScreen.style.display = 'block';
}

function startOrder(orderType) {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('order-screen').style.display = 'block';

    // 기본 선택된 카테고리와 서브카테고리 설정
    showMenu('coffee', '에스프레소'); // 기본으로 커피와 에스프레소 선택
}

function showMenu(category, subcategory) {
    selectedCategory = category;
    selectedSubCategory = subcategory;

    // 카테고리 버튼 활성화
    const categoryButtons = document.querySelectorAll('.menu-button');
    categoryButtons.forEach(button => {
        if (button.textContent === (category === 'coffee' ? '커피' : '음료')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // 서브카테고리 버튼 업데이트
    const subcategoryButtons = document.getElementById('subcategory-buttons');
    subcategoryButtons.innerHTML = ''; // 기존 서브 카테고리 버튼 초기화
    categories[category].forEach(subcat => {
        const button = document.createElement('button');
        button.classList.add('subcategory-button');
        button.textContent = subcat;
        if (subcat === subcategory) {
            button.classList.add('active'); // 선택된 서브 카테고리 버튼 활성화
        }
        button.addEventListener('click', () => {
            selectedSubCategory = subcat;
            // 모든 서브카테고리 버튼 비활성화 후, 클릭된 버튼 활성화
            Array.from(subcategoryButtons.children).forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // 서브카테고리 변경에 따라 메뉴 표시
            displayMenuItems();
        });
        subcategoryButtons.appendChild(button);
    });

    subcategoryButtons.style.display = 'flex'; // 서브 카테고리 버튼 표시

    // 메뉴 아이템 표시
    displayMenuItems();
}

function displayCategoryButtons() {
    const categoryButtons = document.querySelectorAll('#category-buttons .menu-button');
    categoryButtons.forEach(button => {
        if (button.innerText === (selectedCategory === 'coffee' ? '커피' : '음료')) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function displaySubCategoryButtons() {
    const subcategoryButtons = document.getElementById('subcategory-buttons');
    subcategoryButtons.innerHTML = '';
    categories[selectedCategory].forEach(subcategory => {
        const button = document.createElement('button');
        button.classList.add('subcategory-button');
        if (subcategory === selectedSubCategory) {
            button.classList.add('active');
        }
        button.innerText = subcategory;
        button.onclick = () => showMenu(selectedCategory, subcategory);
        subcategoryButtons.appendChild(button);
    });
    subcategoryButtons.style.display = 'block';
}

function displayMenuItems() {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselItems = document.querySelector('.carousel-items');
    const menuContainer = document.getElementById('menu');
    const orderTitle = document.getElementById('order-title');  // '주문 메뉴' 텍스트 선택

    // 기존 메뉴 초기화
    carouselItems.innerHTML = '';
    menuContainer.innerHTML = '';

    const filteredItems = menuItems.filter(item => item.category === selectedCategory && item.subcategory === selectedSubCategory);

    if (isFriendlyMode) {
        // 간편 주문 모드일 때 캐러셀 슬라이더에 아이템 추가
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('carousel-item');
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} 원</p>
                <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
            `;
            carouselItems.appendChild(menuItem);
        });
        carouselContainer.style.display = 'block';
        menuContainer.style.display = 'none';
        
        // 간편 주문 모드 스타일 적용
        orderTitle.style.textAlign = 'left';
        orderTitle.style.marginLeft = '20px';

    } else {
        // 기본 주문 모드일 때 리스트 형태로 아이템 추가
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price} 원</p>
                <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
            `;
            menuContainer.appendChild(menuItem);
        });
        carouselContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
        
        // 기본 주문 모드 스타일 복원
        orderTitle.style.textAlign = 'center';
        orderTitle.style.marginLeft = '0';
    }

    // 페이지 번호 갱신
    const pageNumberElement = document.getElementById('page-number');
    const paginationElement = document.getElementById('pagination');
    if (pageNumberElement && paginationElement) {
        pageNumberElement.innerText = `${currentPage} / ${Math.ceil(filteredItems.length / (isFriendlyMode ? itemsPerPageFriendly : itemsPerPageDefault))}`;
        paginationElement.style.display = filteredItems.length > (isFriendlyMode ? itemsPerPageFriendly : itemsPerPageDefault) ? 'block' : 'none';
    }
}

function nextPage() {
    const isFriendly = document.getElementById('order-screen').classList.contains('friendly');
    const itemsPerPage = isFriendly ? itemsPerPageFriendly : itemsPerPageDefault;
    const filteredItems = menuItems.filter(item => item.category === selectedCategory && item.subcategory === selectedSubCategory);
    if (currentPage * itemsPerPage < filteredItems.length) {
        currentPage++;
        displayMenuItems();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayMenuItems();
    }
}

function addToCart(name, price) {
    const menuItem = menuItems.find(item => item.name === name);
    if (menuItem) {
        showOptionsScreen(menuItem);
    } else {
        console.error('메뉴 아이템을 찾을 수 없습니다:', name);
    }
}

function updateTotalPriceWithOptions() {
    const basePrice = selectedMenuItem.price;
    const optionsPrice = selectedOptions.reduce((total, option) => total + option.price, 0);
    const totalPriceWithOptions = (basePrice + optionsPrice) * quantity;
    document.getElementById('total-price-with-options').innerText = totalPriceWithOptions;
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <button class="delete-button" onclick="removeFromCart(${index})">x</button>
            <h3>${item.name}</h3>
            <p class="cart-price">${item.price} 원</p>
            <div class="quantity-control">
                <button class="decrease-button" onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button class="increase-button" onclick="increaseQuantity(${index})">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('checkout-button').style.display = cart.length > 0 ? 'block' : 'none';
}


function decreaseQuantity(index) {
    if (index !== undefined) {
        // 장바구니 아이템 수량 감소
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            updateCart();
        }
    } else {
        // 옵션 선택 화면에서의 수량 감소
        if (quantity > 1) {
            quantity--;
            document.getElementById('quantity').innerText = quantity;
            updateTotalPriceWithOptions();
        }
    }
}

function increaseQuantity(index) {
    if (index !== undefined) {
        // 장바구니 아이템 수량 증가
        cart[index].quantity++;
        updateCart();
    } else {
        // 옵션 선택 화면에서의 수량 증가
        quantity++;
        document.getElementById('quantity').innerText = quantity;
        updateTotalPriceWithOptions();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    updateCart();
}

function resetOptionButtons() {
    const checkBoxes = document.querySelectorAll('#options-selection-screen input[type="checkbox"]');
    checkBoxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function selectOption(option, price, event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        selectedOptions.push({ name: option, price }); 
    } else {
        const optionIndex = selectedOptions.findIndex(selectedOption => selectedOption.name === option);
        if (optionIndex > -1) {
            selectedOptions.splice(optionIndex, 1);
        }
    }
    updateTotalPriceWithOptions();
}

function showOptionsScreen(menuItem) {
    selectedMenuItem = menuItem;
    selectedOptions = [];
    quantity = 1;
    document.getElementById('quantity').innerText = quantity;

    resetOptionButtons();
    const optionsScreen = document.getElementById('options-selection-screen');
    const blurBackground = document.getElementById('blur-background');
    optionsScreen.style.display = 'block';
    blurBackground.style.display = 'block';
    updateTotalPriceWithOptions();
}

function addToCartWithOptions() {
    const totalPriceWithOptions = selectedOptions.reduce((total, option) => total + option.price, selectedMenuItem.price) * quantity;
    const cartItemWithOptions = {
        ...selectedMenuItem,
        price: totalPriceWithOptions,
        options: selectedOptions,
        quantity: quantity
    };

    const existingCartItem = cart.find(item => item.name === cartItemWithOptions.name && JSON.stringify(item.options) === JSON.stringify(cartItemWithOptions.options));
    if (existingCartItem) {
        existingCartItem.quantity += quantity;
    } else {
        cart.push(cartItemWithOptions);
    }

    updateTotalPrice();

    updateCart();

    document.getElementById('options-selection-screen').style.display = 'none';
    document.getElementById('blur-background').style.display = 'none';
}

function closeOptionsScreen() {
    const optionsScreen = document.getElementById('options-selection-screen');
    const blurBackground = document.getElementById('blur-background');
    optionsScreen.style.display = 'none';
    blurBackground.style.display = 'none';
    resetOptionButtons();
}

function updateTotalPrice() {
    totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('total-price').innerText = totalPrice;
}

function confirmOrder() {
    const confirmationDetails = document.getElementById('confirmation-details');
    const menuItems = cart.map(item => `
        <p>${item.name} x ${item.quantity} - ${item.price * item.quantity} 원</p>
        ${item.options.length > 0 ? `<ul>${item.options.map(option => `<li>${option.name} +${option.price} 원</li>`).join('')}</ul>` : ''}
    `).join('');
    
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    document.getElementById('total-price').innerText = totalPrice;

    confirmationDetails.innerHTML = `
        <div id="order-summary">
            <h3>주문 내역</h3>
            <div class="menu-items">
                ${menuItems}
            </div>
        </div>
        <div class="total-price-box">
            <p>총 금액: <span id="total-price">${totalPrice}</span> 원</p>
        </div>
    `;
    document.getElementById('confirmation-modal').style.display = 'block';
}

function closeConfirmationModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

function proceedToPayment() {
    document.getElementById('confirmation-modal').style.display = 'none';
    document.getElementById('payment-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function payByCard() {
    paymentMethod = '신용카드';
    alert('신용카드 결제가 완료되었습니다.');
    showReceiptOption();
}

function payByCash() {
    paymentMethod = '현금';
    alert('현금 결제가 완료되었습니다.');
    showReceiptOption();
}

function payByMobile() {
    paymentMethod = '모바일 결제';
    alert('모바일 결제가 완료되었습니다.');
    showReceiptOption(); 
}

function closeReceiptModal() {
    document.getElementById('receipt-modal').style.display = 'none';
}

function showReceiptOption() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('receipt-modal').style.display = 'block';
}

function printReceipt() {
    generateReceipt(); 
    document.getElementById('receipt').style.display = 'block'; 
    document.getElementById('completion-modal').style.display = 'block';
    document.getElementById('receipt-modal').style.display = 'none';

    // 일정 시간 후에 초기 화면으로 돌아가기
    setTimeout(() => {
        document.getElementById('completion-modal').style.display = 'none';
        document.getElementById('order-screen').style.display = 'none';
        document.getElementById('initial-screen').style.display = 'block';
    }, 5000); // 5초 후에 초기 화면으로 이동
}

function noReceipt() {
    document.getElementById('completion-modal').style.display = 'block';
    document.getElementById('receipt-modal').style.display = 'none';

    // 일정 시간 후에 초기 화면으로 돌아가기
    setTimeout(() => {
        document.getElementById('completion-modal').style.display = 'none';
        document.getElementById('order-screen').style.display = 'none';
        document.getElementById('initial-screen').style.display = 'block';
    }, 5000); // 5초 후에 초기 화면으로 이동
}

function generateReceipt() {
    const orderNumberEl = document.getElementById('order-number');
    const receiptDetails = document.getElementById('receipt-details');
    const orderNumber = Math.floor(Math.random() * 100000);
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    orderNumberEl.innerText = orderNumber;

    const receiptItems = cart.map(item => {
        let price = parseFloat(item.basePrice);
        if (isNaN(price)) {
            const menuItem = menuItems.find(menuItem => menuItem.name === item.name);
            if (menuItem) {
                price = menuItem.price; 
            } else {
                price = 0; 
            }
        }
        const totalPrice = price * item.quantity;
        return `
            <p>${item.name} x ${item.quantity} - ${totalPrice} 원</p>
            ${item.options.length > 0 ? `<ul class="receipt-options">${item.options.map(option => `<li>${option.name} +${option.price} 원</li>`).join('')}</ul>` : ''}
        `;
    }).join('');

    receiptDetails.innerHTML = `
        <p>메가커피 성신여대점</p>
        <p>주문 번호: ${orderNumber}</p>
        <p>결제 날짜: ${date}</p>
        <p>결제 시각: ${time}</p>
        <h3>주문 내역</h3>
        ${receiptItems}
        <p>총 금액: ${totalPrice} 원</p>
        <p>결제 방식: ${paymentMethod}</p>
    `;

    document.getElementById('receipt-modal').style.display = 'block';
}

function showCompletionModal(showReceipt) {
    const completionModal = document.getElementById('completion-modal');
    document.getElementById('order-number').innerText = orderNumber;
    if (showReceipt) {
        document.getElementById('receipt').style.display = 'block';
    }
    completionModal.style.display = 'block';
}

function completeOrder() {
    document.getElementById('completion-modal').style.display = 'none';
    document.getElementById('order-screen').style.display = 'none';
    document.getElementById('initial-screen').style.display = 'flex';
}

function resetCart() {
    cart = [];
    updateCart();
    closeModal();
    closeReceiptModal();
    document.getElementById('receipt').style.display = 'none';
}

function resetOrder() {
    selectedCategory = '';
    selectedSubCategory = '';
    cart = [];
    totalPrice = 0;
    currentPage = 1;
    selectedMenuItem = null;
    selectedOptions = [];
    quantity = 1;
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('total-price').innerText = '0';
    document.getElementById('checkout-button').style.display = 'none';
    document.getElementById('initial-screen').style.display = 'block';
    document.getElementById('order-screen').style.display = 'none';
    document.getElementById('menu-selection-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'none';
    if (recognition) {
        recognition.stop();
    }
}