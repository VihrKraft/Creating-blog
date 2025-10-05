document.addEventListener('DOMContentLoaded', function () {
    let headerSearchButton = document.querySelector('.header__search');
    let headerSearchField = document.querySelector('.header__text-field');
    headerSearchButton.addEventListener('click', function () {
        headerSearchField.classList.toggle('active');
    })
})