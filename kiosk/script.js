let menuItems = [];  // 메뉴 아이템 배열을 비워둠

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
let currentSlideIndex = 0;

const categories = {
    coffee: ["에스프레소", "라떼"],
    beverages: ["에이드", "논-커피 라떼"]
};

// 서버에서 메뉴 데이터를 불러오는 함수
async function fetchMenuItems() {
    try {
        const response = await fetch('/api/menu_items');
        const data = await response.json();
        menuItems = data.menu_items;  // 서버에서 가져온 메뉴 데이터 저장
        displayMenuItems();  // 메뉴 항목 표시
    } catch (error) {
        console.error("메뉴 데이터를 불러오는 중 오류 발생:", error);
    }
}

function goToHome() {
    resetOrder(); // 초기 화면으로 돌아가기 위해 주문을 리셋합니다.

    document.getElementById('menu-selection-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('order-screen').style.display = 'none';
    document.getElementById('seasonal-menu-page').style.display = 'none';
    document.getElementById('options-selection-screen').style.display = 'none';
    document.getElementById('confirmation-modal').style.display = 'none';
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('receipt-modal').style.display = 'none';
    document.getElementById('completion-modal').style.display = 'none';
    
    
 document.getElementById('initial-screen').style.display = 'flex';

}

function closeConfirmationModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

function goToMenuSelection() {
    document.getElementById('initial-screen').style.display = 'none';
    document.getElementById('menu-selection-screen').style.display = 'block';
}

// 초기화시 서버에서 메뉴 데이터를 불러오기
window.addEventListener('load', () => {
    fetchMenuItems();  // 페이지 로드 시 메뉴 데이터를 불러옴
    updateCarouselPosition();
    window.addEventListener('resize', updateCarouselPosition); // 창 크기 변경 시 위치 조정
});

function displayMenuItems() {
    const carouselContainer = document.getElementById('carousel-container');
    const carouselItems = document.querySelector('.carousel-items');
    const menuContainer = document.getElementById('menu');
    const orderTitle = document.getElementById('order-title');

    // 기존 메뉴 초기화
    carouselItems.innerHTML = '';
    menuContainer.innerHTML = '';

    const filteredItems = menuItems.filter(item => item.category === selectedCategory && item.subcategory === selectedSubCategory);

    if (isFriendlyMode) {
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('carousel-item');
            let displayName = item.name;
            if (displayName.startsWith("ICE")) {
                displayName = displayName.replace("ICE", "차가운");
            } else if (displayName.startsWith("HOT")) {
                displayName = displayName.replace("HOT", "뜨거운");
            }

            menuItem.innerHTML = `
                <img src="${item.img}" alt="${displayName}">
                <h3>${displayName}</h3>
                <p>${Math.round(item.price)} 원</p>
                <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
            `;
            carouselItems.appendChild(menuItem);
        });
        carouselContainer.style.display = 'block';
        menuContainer.style.display = 'none';
        orderTitle.style.textAlign = 'left';
        orderTitle.style.marginLeft = '20px';
        updateCarouselPosition();
    } else {
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${Math.round(item.price)} 원</p>
                <button onclick="addToCart('${item.name}', ${item.price})">담기</button>
            `;
            menuContainer.appendChild(menuItem);
        });
        carouselContainer.style.display = 'none';
        menuContainer.style.display = 'flex';
        orderTitle.style.textAlign = 'center';
        orderTitle.style.marginLeft = '0';
    }
}

function updateCarouselPosition() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const containerWidth = document.querySelector('.carousel-wrapper').offsetWidth;
    const itemWidth = containerWidth / 3; // 화면에 3개의 아이템이 보이도록 설정
    const position = -currentSlideIndex * itemWidth;

    // 슬라이드 위치 업데이트
    document.querySelector('.carousel-items').style.transform = `translateX(${position}px)`;

    carouselItems.forEach((item, index) => {
        if (index === currentSlideIndex) {
            item.classList.add('active'); // 중앙에 있는 메뉴를 크게 표시
            item.style.zIndex = 10; // 중앙의 메뉴를 앞에 보이도록 설정
        } else {
            item.classList.remove('active'); // 나머지 메뉴는 기본 크기 유지
            item.style.zIndex = 1; // 다른 메뉴는 뒤로 가도록 설정
        }
    });
}

// 이벤트 핸들러 설정
document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    if (currentSlideIndex < totalItems - 1) {
        currentSlideIndex++;
        updateCarouselPosition();
    }
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateCarouselPosition();
    }
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
        startVoiceRecognition();  // 음성 인식 시작

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

        if (typeof recognition !== 'undefined' && recognition) {
            recognition.stop(); // 음성 인식 중지
        }
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

function addToCart(name, price) {
    let menuItem;

    if (isFriendlyMode) {
        const transformedName = name.startsWith("차가운") ? name.replace("차가운", "ICE") :
                                name.startsWith("뜨거운") ? name.replace("뜨거운", "HOT") : name;

        menuItem = menuItems.find(item => item.name === transformedName);
    } else {
        menuItem = menuItems.find(item => item.name === name);
    }

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
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            updateCart();
        }
    } else {
        if (quantity > 1) {
            quantity--;
            document.getElementById('quantity').innerText = quantity;
            updateTotalPriceWithOptions();
        }
    }
}

function increaseQuantity(index) {
    if (index !== undefined) {
        cart[index].quantity++;
        updateCart();
    } else {
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
            <p>총 금액: <span id="total-price">${Math.round(totalPrice)}</span> 원</p>
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

    setTimeout(() => {
        document.getElementById('completion-modal').style.display = 'none';
        document.getElementById('order-screen').style.display = 'none';
        document.getElementById('initial-screen').style.display = 'block';
    }, 5000); // 5초 후에 초기 화면으로 이동
}

function noReceipt() {
    document.getElementById('completion-modal').style.display = 'block';
    document.getElementById('receipt-modal').style.display = 'none';

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

function findMenuItemByName(name) {
    return menuItems.find(item => item.name.includes(name));
}

function showOptionsForItem(itemName) {
    const menuItem = findMenuItemByName(itemName);
    if (menuItem) {
        showOptionsScreen(menuItem);
    } else {
        console.error('메뉴 항목을 찾을 수 없습니다:', itemName);
    }
}

function restartVoiceRecognitionIfNecessary() {
    if (isFriendlyMode) {
        startVoiceRecognition();  // 간편 주문 모드에서만 음성 인식 다시 시작
    }
}

function startVoiceRecognition() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                sendAudioToServer(audioBlob);
            });

            setTimeout(() => {
                mediaRecorder.stop();
            }, 5000);  // 5초 동안 녹음
        });
}

function sendAudioToServer(audioBlob) {
    const formData = new FormData();
    formData.append('audio', audioBlob);

    fetch('/process_audio', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Recognized Action:', data.response);
        handleServerResponse(data.response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleServerResponse(responseAction) {
    if (responseAction === 'show_takeout_option' || responseAction === 'show_in_store_option') {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('order-screen').style.display = 'block';
        showMenu('coffee', '에스프레소');
    } else if (responseAction.startsWith('select_menu_item|')) {
        const menuItemName = responseAction.split('|')[1];
        const menuItem = findMenuItemByName(menuItemName);
        showOptionsScreen(menuItem);
    } else if (responseAction === 'unrecognized_command') {
        showRecommendationPopup();  // 음성을 인식하지 못한 경우 추천 메뉴 팝업 표시
    } else if (responseAction === 'show_sweet_recommendation') {
        showSweetRecommendationPopup();}  // 달달한 메뉴 팝업 표시
    else { alert('명령을 인식하지 못했습니다. 다시 시도해주세요.');
    }
}

function showRecommendationPopup() {
    const popup = document.getElementById('recommendation-popup');
    popup.style.display = 'block';
}

function closeRecommendationPopup() {
    const popup = document.getElementById('recommendation-popup');
    popup.style.display = 'none';
}

function findMenuItemByName(name) {
    return menuItems.find(item => item.name.includes(name));
}

function showOptionsForItem(itemName) {
    const menuItem = findMenuItemByName(itemName);
    if (menuItem) {
        showOptionsScreen(menuItem);
    } else {
        console.error('메뉴 항목을 찾을 수 없습니다:', itemName);
    }
}

// 주문 완료 후 음성 인식을 다시 시작
function restartVoiceRecognitionIfNecessary() {
    if (isFriendlyMode) {
        startVoiceRecognition();  // 간편 주문 모드에서만 음성 인식 다시 시작
    }
}

function startVoiceRecognition() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                sendAudioToServer(audioBlob);
            });

            setTimeout(() => {
                mediaRecorder.stop();
            }, 5000);  // 5초 동안 녹음
        });
}

function sendAudioToServer(audioBlob) {
    const formData = new FormData();
    formData.append('audio', audioBlob);

    fetch('/process_audio', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Recognized Action:', data.response);
        handleServerResponse(data.response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleServerResponse(responseAction) {
    if (responseAction === 'show_takeout_option' || responseAction === 'show_in_store_option') {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('order-screen').style.display = 'block';
        showMenu('coffee', '에스프레소');
    } else if (responseAction.startsWith('select_menu_item|')) {
        const menuItemName = responseAction.split('|')[1];
        const menuItem = findMenuItemByName(menuItemName);
        showOptionsScreen(menuItem);
    } else if (responseAction === 'unrecognized_command') {
        showRecommendationPopup();  // 음성을 인식하지 못한 경우 추천 메뉴 팝업 표시
    } else if (responseAction === 'show_sweet_recommendation') {
        showSweetRecommendationPopup();}  // 달달한 메뉴 팝업 표시
    else { alert('명령을 인식하지 못했습니다. 다시 시도해주세요.');
    }
}

// 추천 메뉴 팝업을 보여주는 함수
function showRecommendationPopup() {
    const popup = document.getElementById('recommendation-popup');
    popup.style.display = 'block';
}

// 추천 메뉴 팝업을 닫는 함수
function closeRecommendationPopup() {
    const popup = document.getElementById('recommendation-popup');
    popup.style.display = 'none';
}
