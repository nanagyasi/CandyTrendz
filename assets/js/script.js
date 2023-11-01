var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});