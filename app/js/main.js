var swiper = new Swiper(".cont-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: ".swiper_pag",
        clickable: true,
    },
    navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
    },
});
var swiper = new Swiper(".slider_text", {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
    },
});