const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 6000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});