let seasonalRecommendationTimer;
let hasPopupShown = false;

// 10초 타이머
function startSeasonalRecommendationTimer() {
    if (!hasPopupShown) { // 팝업이 표시되지 않았다면 타이머를 시작
        seasonalRecommendationTimer = setTimeout(showSeasonalRecommendationPopup, 10000);
    }
}

// 담기 버튼 클릭 시 타이머 초기화
function resetSeasonalRecommendationTimer() {
    clearTimeout(seasonalRecommendationTimer); // 기존 타이머 초기화
    startSeasonalRecommendationTimer(); // 새로운 타이머 시작
}

// 계절별 추천 메뉴 팝업을 보여주는 함수
function showSeasonalRecommendationPopup() {
    if (!hasPopupShown) {
        const season = getSeason(); // 현재 계절을 가져옴
        const menus = seasonalMenus[season]; // 해당 계절의 메뉴를 가져옴
        const menuContainer = document.querySelector('#seasonal-recommendation-popup .recommended-menu');

        // 기존 메뉴 삭제
        menuContainer.innerHTML = '';

        // 새로운 메뉴 추가
        menus.forEach(menu => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <img src="${menu.img}" alt="${menu.name}">
                <div class="menu-info">
                    <h3>${menu.name}</h3>
                    <p>₩${menu.price}</p>
                    <button onclick="addToCart('${menu.name}', ${menu.price})">담기</button>
                </div>
            `;
            menuContainer.appendChild(menuItem);
        });

        // 팝업을 화면에 표시
        const popup = document.getElementById('seasonal-recommendation-popup');
        popup.style.display = 'block';

        hasPopupShown = true; // 팝업이 한 번 표시되었음을 기록
    }
}

function closeSeasonalRecommendationPopup() {
    const popup = document.getElementById('seasonal-recommendation-popup');
    popup.style.display = 'none';
}

// 페이지 로드 시 타이머 시작
window.addEventListener('load', startSeasonalRecommendationTimer);

function getSeason() {
    const month = new Date().getMonth() + 1; // 월은 0부터 시작하므로 +1
    if (month >= 3 && month <= 5) {
        return 'spring';
    } else if (month >= 6 && month <= 8) {
        return 'summer';
    } else if (month >= 9 && month <= 11) {
        return 'fall';
    } else {
        return 'winter';
    }
}

//계절별 메뉴 추천
const seasonalMenus = {
    spring: [
        { name: '라임모히또', price: 3800, img: 'images/31.png' },
        { name: "차가운 딸기라떼", price: 3700, img: "images/34.png" },
        {  name: "뜨거운 토피넛라떼", price: 3800, img: "images/47.png" },
    ],
    summer: [
        { name: "차가운 아메리카노", price: 2000, img: "images/2.png" },
        { name: "자몽에이드", price: 3500 ,img: "images/29.png" },
        { name: "왕메가초코", price: 4400 ,img: "images/33.png"},
    ],
    fall: [
        { name: "뜨거운 카푸치노", price: 2900, img: "images/21.png" },
        { name: "차가운 흑당버블 밀크티라떼", price: 3800, img: "images/43.png" },
        { name: "차가운 큐브라떼", price: 4200, img: "images/15.png" },
    ],
    winter: [
        { name: '핫초코', price: 3500, img: "images/44.png" },
        { name: '고구마 라떼', price: 3500, img: "images/48.png" },
        { name: "뜨거운 카라멜마끼아또", price: 3700, img: "images/23.png" },
    ]
};

//요기는 달달한 메뉴 추천 
function showSweetRecommendationPopup() {
    const sweetMenus = [
        { name: "왕메가초코", price: 4400, img: "images/33.png" },
        { name: "할메가커피", price: 1900, img: "images/3.png" },
        { name: "차가운 꿀아메리카노", price: 2700, img: "images/5.png" },
        { name: "차가운 오레오초코라떼", price: 3900, img: "images/35.png" }
    ];
    
    const menuContainer = document.querySelector('#sweet-recommendation-popup .recommended-menu');
    menuContainer.innerHTML = ''; // 기존 메뉴 삭제

    sweetMenus.forEach(menu => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${menu.img}" alt="${menu.name}">
            <div class="menu-info">
                <h3>${menu.name}</h3>
                <p>₩${menu.price}</p>
                <button onclick="addToCart('${menu.name}', ${menu.price})">담기</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });

    const popup = document.getElementById('sweet-recommendation-popup');
    popup.style.display = 'block';
}

function closeSweetRecommendationPopup() {
    const popup = document.getElementById('sweet-recommendation-popup');
    popup.style.display = 'none';
}
