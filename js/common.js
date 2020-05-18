document.addEventListener("DOMContentLoaded", function(){
    window.scrollTo({top: 0, left: 0 });
    initSlider();
    initPopupImages();
});

function initPopupImages() {
    let cards = document.querySelectorAll('.third-screen__card');
    cards.forEach(function (item) {
        item.addEventListener('click', showPopup);
    });
}

function showPopup() {
    let imageLink = this.getElementsByTagName('img')[0].src;

    // создание и стилизация попапа
    let popup = document.createElement('div');
    popup.classList.add('popup');

    // клик по фону за изображением для закрытия попапа
    popup.addEventListener('click', function (event) {
        // alert('close it!');
        closePopup();
    });

    // создание изображения
    let popupImg = document.createElement('img');
    popupImg.classList.add('popup__image');
    popupImg.src = imageLink;

    // запрет кликов по изображению
    popupImg.addEventListener('click', function(event){
        event.stopPropagation();
    });

    // создание кнопки close
    let popupBtnClose = document.createElement('div');
    popupBtnClose.classList.add('popup__close');
    popupBtnClose.innerHTML = '<svg width="886" height="886" viewBox="0 0 886 886" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                    '<rect x="823.423" y="0.351196" width="88" height="1164" transform="rotate(45 823.423 0.351196)" fill="#132C48" fill-opacity="0.9"/>\n' +
                                    '<rect x="0.351074" y="62.5765" width="88" height="1164" transform="rotate(-45 0.351074 62.5765)" fill="#132C48" fill-opacity="0.9"/>\n' +
                               '</svg>\n';

    popupBtnClose.addEventListener('click', closePopup);

    // сбор и добавление попапа в дом
    popup.appendChild(popupImg);
    popup.appendChild(popupBtnClose);
    let section = document.querySelector('.third-screen');
    section.appendChild(popup);
    
    // закрытие попапа по кнопке Escape
    let escapeBtnListener = function(event) {
        if(event.code == 'Escape'){
            closePopup();
        }
    };

    document.body.addEventListener('keydown', escapeBtnListener, false);

    function closePopup() {
        let popup = document.querySelector('.popup');
        popup.remove();
        document.body.removeEventListener('keydown', escapeBtnListener, false);
    }
}

function initSlider() {
    let slideActiveClass = 'fourth-screen__pagination-item_active';
    let slidesCount = document.getElementById('slidesCount');
    slidesCount.textContent = document.querySelectorAll('.fourth-screen__content').length;

    document.querySelectorAll('.fourth-screen__pagination-item')[0].classList.add(slideActiveClass);

    let buttonPrev = document.getElementById('slidePrev');
    buttonPrev.addEventListener('click', prevSlide, true);

    let buttonNext = document.getElementById('slideNext');
    buttonNext.addEventListener('click', changeSlide, true);

    let slideTime = 15000;
    setTimeout(changeSlide, slideTime);

    function changeSlide(isManual = false) {
        console.log(isManual);
        let sliderPagination = document.querySelectorAll('.fourth-screen__pagination-item');
        let isSlideToggled = false;
        let nextPaginationItem = null;

        sliderPagination.forEach(function (item, index, collection) {
            if ( item.classList.contains(slideActiveClass) && !isSlideToggled ) {

                item.classList.toggle(slideActiveClass);

                if ( index >= collection.length - 1) {
                    nextPaginationItem = collection[0];
                } else {
                    nextPaginationItem = collection[index + 1];
                }

                nextPaginationItem.classList.toggle(slideActiveClass);

                if ( index >= collection.length - 1) {
                    changeSlideContent(0);
                } else {
                    changeSlideContent(index + 1);
                }


                isSlideToggled = true;
            } else {
                // nothing
            }
        });

        if (isManual){
            if(window.timer) {
                clearTimeout(window.timer);
            }
            window.timer = setTimeout(changeSlide, slideTime);
        } else {
            window.timer = setTimeout(changeSlide, slideTime);
        }
    }

    function changeSlideContent(slideNumber) {
        let slideContent = document.querySelectorAll('.fourth-screen__content')[slideNumber];
        let slideImage = slideContent.style.backgroundImage;
        let slideTitle = slideContent.querySelector('.fourth-screen__content-title').textContent;
        let slideText = slideContent.querySelector('.fourth-screen__content-text').textContent;

        let slideContainer = document.getElementById('slideContainer');
        slideContainer.style.backgroundImage = slideImage;

        let slideTitleNew = document.getElementById('slideTitle');
        slideTitleNew.textContent = slideTitle;

        let slideTextNew = document.getElementById('slideText');
        slideTextNew.textContent = slideText;

        let currentSlideNew = document.getElementById('currentSlide');
        currentSlideNew.textContent = slideNumber + 1;
    }
    
    function prevSlide() {
        let slideActiveClass = 'fourth-screen__pagination-item_active';
        let sliderPagination = document.querySelectorAll('.fourth-screen__pagination-item');
        let isSlideToggled = false;
        let nextPaginationItem = null;
        sliderPagination.forEach(function (item, index, collection) {
            if ( item.classList.contains(slideActiveClass) && !isSlideToggled ) {

                item.classList.toggle(slideActiveClass);

                if ( index <= 0) {
                    nextPaginationItem = collection[collection.length - 1];
                } else {
                    nextPaginationItem = collection[index - 1];
                }

                nextPaginationItem.classList.toggle(slideActiveClass);

                if ( index <= 0) {
                    changeSlideContent(collection.length - 1);
                } else {
                    changeSlideContent(index - 1);
                }

                isSlideToggled = true;
            } else {
                // nothing
            }

            console.log(window.timer);

            if(window.timer) {
                clearTimeout(window.timer);
                console.log(window.timer);
            }
            console.log('таймер аново создан ');
            window.timer = setTimeout(changeSlide, slideTime);
        });


    }
}
