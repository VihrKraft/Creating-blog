document.addEventListener('DOMContentLoaded', function () {
    let headerSearchButton = document.querySelector('.header__search');
    let headerSearchField = document.querySelector('.header__text-field');

    headerSearchButton.addEventListener('click', function () {
        headerSearchField.classList.toggle('active');
    })

    let header = document.querySelector('.header');
    let windowWidth = document.documentElement.clientWidth;
    let headerHeight = header.clientHeight;

    if (windowWidth>1024) {
        window.onscroll=changeHeader;
        let lastScroll = 0;
        function changeHeader () {
            let top = document.documentElement.scrollTop;
            if (lastScroll>top) {
                header.style.top = '0';
            } else {
                if (window.pageYOffset>200) {
                    header.style.top = `-${headerHeight}px`;
                }
            }
            lastScroll = top;
        }
    }

    let headerBurgerButton = document.querySelector('.header__burger')
    let headerLogo = document.querySelector('.header__top').querySelector('.header__logo')
    let headerMenuMobile = document.querySelector('.header__bottom_mobile')
    let headerMobile = document.querySelector(".header__mobile")
    let headerCloseButton = document.querySelector('.header__close-btn')
    let body = document.querySelector('body')

    headerBurgerButton.addEventListener('click', function () {
        headerLogo.classList.add('active');
        headerMenuMobile.parentElement.classList.add('active');
        body.classList.add('active');
        headerContainer.classList.add('active')
    })


    function closingBurgerMenu() {
        headerLogo.classList.remove('active');
        headerMenuMobile.parentElement.classList.remove('active');
        body.classList.remove('active');
        headerContainer.classList.remove('active')
    }


    headerCloseButton.addEventListener('click', closingBurgerMenu);

    headerContainer = document.querySelector('.header_container')

    headerContainer.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(headerMobile);

        if ( !withinBoundaries && e.target.closest('.header__mobile') == null ) {
            closingBurgerMenu()
        }
    })
})