import Swiper from 'swiper';

export default function () {
    let promoSwiper = new Swiper ('.promo-slider__swiper-container', {
        loop: true,

        pagination: {
            el: '.promo-slider__swiper-pagination',
        },

        navigation: {
            nextEl: '.promo-slider__swiper-button-next',
            prevEl: '.promo-slider__swiper-button-prev',
        },

    })
}
