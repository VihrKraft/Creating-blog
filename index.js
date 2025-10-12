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
})