'use strict';

import polyfills from './libraries/polyfills';
import promoSlider from '../../components/promo-slider/promo-slider';
import hero from '../../components/hero/hero';
import navItem from '../../components/main-nav/nav-item/nav-item';
import popup from '../../components/popup/popup';
import galery from '../../components/galery/galery';


$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
    promoSlider();
    hero();
    navItem();
    popup();
    galery();
});
