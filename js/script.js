import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/sliders';
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', async()=>{

    const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 50000);
    tabs('.tabheader__item', '.tabcontent','.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-09-09');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container:".offer__slide",
        slide: ".offer__slider",
        prevArrow: ".offer__slider-prev",
        nextArrow: ".offer__slider-next",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper:".offer__slider-wrapper",
        field: ".offer__slider-inner"

    });

});