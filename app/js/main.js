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
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        500: {

            slidesPerView: 2
        },
        700: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }

    },
});
var swiper = new Swiper(".slider_text", {
    slidesPerView: 1,

    observer: true,
    observeParents: true,
    spaceBetween: 35,
    navigation: {
        nextEl: '.btn_next',
        prevEl: '.btn_prev',
    },
});