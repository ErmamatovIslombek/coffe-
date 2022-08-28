function $(selector) {
    return document.querySelector(selector)
}

$('.header__burger').onclick = function() {
    $('.header__burger').classList.add('header_navbar--active');
    $('.header__navbar').classList.add('header__navbar--active');
}

$('.header__close').onclick = function() {
    $('.header__burger').classList.remove('header_navbar--active');
    $('.header__navbar').classList.remove('header__navbar--active');
}
