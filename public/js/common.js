

document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    scrollMenuShower();

});



function scrollMenuShower() {

    var menuElement = document.getElementById('headerMenu');
    var menuBtn = document.getElementById('headerMenuBtn');
    window.addEventListener("scroll", function () {
        if (menuBtn.classList.contains('menu-opened')){
            console.log('не должно скроллиться');//если меню открыто - навигация не должна меняться на menuFix
        }
        else{
            console.log('должно');

            (window.pageYOffset > 200) ?
                (

                    // document.body.style.opacity = '0.2',
                    menuElement.classList.add('scrolled')
                ):
                (
                    // document.body.style.opacity = '1',
                    menuElement.classList.remove('scrolled')
                );
        }

        var menuLinks = document.querySelectorAll('#headerMenu .menu__link');

        menuLinks.forEach(function(item, i , arr){
            item.addEventListener("click", function(event){
                menuBtn.click();
            });
        });


        // menuLink.addEventListener('click', {
        //     handleEvent: function (event) {
        //         alert('Событие вызвал handleEvent!');
        //     }
        // });

    });
}








(function($) {




    function toggleMenu(){

        if ($('#headerMenu').hasClass('scrolled')){
            //do nothing
        }
        else{
            var menu = $('#headerMenu');
            var menuBtn = $('#headerMenuBtn');
            var menuPopup = $('#headerMenuPopup');
            var body = $('body');
            menuBtn.on('click', function () {
                // console.log("CLICKED!!!");
                menu.toggleClass('menu-active');
                menuBtn.toggleClass('menu-opened');
                menuPopup.toggleClass('display');
                // body.toggleClass('body__menu-opened');
            });
        }



    }


    function dropdownFilter() {
        /*Dropdown Menu*/
        $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu').slideToggle(300);
        });
        $('.dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').slideUp(300);
        });
        $('.dropdown .dropdown-menu li').click(function () {
            $(this).parents('.dropdown').find('span').text($(this).text());
            $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
        });
        /*End Dropdown Menu*/


        $('.dropdown-menu li').click(function () {
            var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
                msg = '<span class="msg">Hidden input value: ';
            $('.msg').html(msg + input + '</span>');
        });
    }

    function formatZero(number){
        Number(number) < 10 ? result = '0' + number : result = number;
        return result;
    }

    //
    function initAboutSlider() {
        $('#aboutSlider').on(`init reInit`, function(event, slick) {
            $('#aboutSlideCurrent').text( formatZero(1) );
            $('#aboutSlideCount').text( formatZero(slick.slideCount) );
        });

        $('#aboutSlider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
            $('#aboutSlideCurrent').text( formatZero(currentSlide + 1) );
            $('#aboutSlideCount').text( formatZero(slick.slideCount) );
        });


        $('#aboutSlider').slick({
            slidesToShow: 1,
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 2000,
            // // vertical: false,
            arrows: true,
            appendArrows: $('#sectionAbout .section__arrows-container'),
            prevArrow: '<button class="section__arrow-prev"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M0 3L5 5.88675V0.113249L0 3ZM70 2.5L4.5 2.5V3.5L70 3.5V2.5Z" fill="#CACFD5"/>' +
            '</svg></button>',
            nextArrow: '<button class="section__arrow-next"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M70 3.00001L65 0.113254L65 5.88676L70 3.00001ZM-4.37114e-08 3.5L65.5 3.50001L65.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="#27394E"/>' +
            '</svg></button>',
            asNavFor: '#aboutSlider_titles',
        });

        $('#aboutSlider_titles').slick({
            slidesToShow: 1,
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            asNavFor: '#aboutSlider',
        });

    }



    function initQuizSlider() {
        var quizSlider = $('#quizSlider');
        quizSlider.slick({
            slidesToShow: 1,
            infinite: false,
            // draggable: false,
            // swipe: false,
            // autoplay: true,
            autoplaySpeed: 2000,
            // // vertical: false,
            arrows: true,
            speed: 150,
            fade: true,
            cssEase: 'linear',
            // appendArrows: $('#sectionCertificates2 .section__arrows-container'),
            // prevArrow: '<button class="section__arrow-prev"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            //     '<path class="colorized" d="M0 3L5 5.88675V0.113249L0 3ZM70 2.5L4.5 2.5V3.5L70 3.5V2.5Z" fill="#CACFD5"/>' +
            //     '</svg></button>',
            // nextArrow: '<button class="section__arrow-next"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            //     '<path class="colorized" d="M70 3.00001L65 0.113254L65 5.88676L70 3.00001ZM-4.37114e-08 3.5L65.5 3.50001L65.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="#27394E"/>' +
            //     '</svg></button>',
            prevArrow: $('.quiz__button-prev'),
            nextArrow: $('.quiz__button-next'),
            // variableWidth: true,
        });


        // переходы внутри квиза (кастомные кнопки-линки)
        $('.toStart').on('click', function(){
            quizSlider.slick('slickGoTo', 0);
        });

        $('.toSlide2').on('click', function(){
            // alert('to slide 7');
            quizSlider.slick('slickGoTo', 2);
        });
        $('.toSlide7').on('click', function(){
            // alert('to slide 7');
            quizSlider.slick('slickGoTo', 6);
        });
        $('.toFinal').on('click', function(){
            // к финальной форме
            quizSlider.slick('slickGoTo', 5);
        });

        // quizSlider.slick('slickGoTo', 5);

        var arrowNextDistricts = $('#quizSlider .quiz__slide.districts .quiz__button-next');
        arrowNextDistricts.click(function (e) {
            // alert('test');


        });



        // change инпута:
        // выбрать все инпуты
        // если хоть один есть — убрать disable с кнопки, убрать сообщение
        // если ни одного нет — показать сообщение, поставить disable на кнопку

        // click по кнопке:
        // если кнопка disabled — показать сообщение
        // если хоть один есть — убрать disable (?)
        // confirmCheckboxesSlide1();
        // confirmButtonSlide1();

        confirmCheckboxesSlide('districts', 'district', 'quiz__button-next');
        confirmButtonSlide('districts');
        confirmCheckboxesSlide('rooms', 'rooms', 'quiz__button-next');
        confirmButtonSlide('rooms');
        confirmCheckboxesSlide('price', 'price', 'quiz__button-next');
        confirmButtonSlide('price');

        confirmCheckboxesSlide('payment', 'payment', 'quiz__button-next');
        confirmButtonSlide('payment');

        confirmCheckboxesSlide('sell-type', 'sellType', 'quiz__button-next');
        confirmButtonSlide('sell-type');

        confirmCheckboxesSlide('submit', 'agreement', 'quiz__button-link');


    }



    function confirmCheckboxesSlide(slideClass, inputNames, buttonClass){
        var checkboxes = $('.quiz__slide.' + slideClass + ' .quiz__options-wrapper input[name=' + inputNames + ']').on('change', function (event) {
            var message = $(this).parents('.quiz__controls-container').find('.quiz__message-confirm');
            var button = $(this).parents('.quiz__controls-container').find('.' + buttonClass)[0];
            // console.log(message);
            // console.log(button);

            var inputs = $(this).parents('.quiz__options-wrapper').find('input[name=' + inputNames + ']');
            // console.log(inputs.length);
            var isAnyChecked = false;
            for ( i = 0; i <= inputs.length; i++){
                if ( $(inputs[i]).is(':checked') ){
                    isAnyChecked = true;
                    // console.log($(inputs[i]));
                    // console.log('---- ');
                    $(button).prop('disabled', false);
                    console.log(button);
                    message.hide();
                    break;
                }
                else{
                    $(button).prop('disabled', true);
                }
            }
        });
    }

    function confirmButtonSlide(slideClass) {
        var buttonContent = $('.quiz__slide.' + slideClass + ' .quiz__button-container .quiz__button-next .quiz__button-content').on('click', function (event) {
            var button = $(this).parent('button');
            var message = button.parent('.quiz__button-container').siblings('.quiz__message-confirm');
            if (button.is(':disabled')){
                // alert('кнопка выключена');
                message.show();
            }
            else {
            }
        });
    }




    function initTeamSlider() {
        $('#teamSlider').slick({
            slidesToShow: 4,
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 2000,
            // // vertical: false,
            arrows: true,
            appendArrows: $('#sectionTeam .section__arrows-container'),
            prevArrow: '<button class="section__arrow-prev"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M0 3L5 5.88675V0.113249L0 3ZM70 2.5L4.5 2.5V3.5L70 3.5V2.5Z" fill="#CACFD5"/>' +
            '</svg></button>',
            nextArrow: '<button class="section__arrow-next"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M70 3.00001L65 0.113254L65 5.88676L70 3.00001ZM-4.37114e-08 3.5L65.5 3.50001L65.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="#27394E"/>' +
            '</svg></button>',
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ],

        });
    }

    function initPartnersSlider() {
        $('#partnersSlider').slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            // // vertical: false,
            arrows: true,
            appendArrows: $('#sectionPartners .section__arrows-container'),
            prevArrow: '<button class="section__arrow-prev"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M0 3L5 5.88675V0.113249L0 3ZM70 2.5L4.5 2.5V3.5L70 3.5V2.5Z" fill="#CACFD5"/>' +
            '</svg></button>',
            nextArrow: '<button class="section__arrow-next"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M70 3.00001L65 0.113254L65 5.88676L70 3.00001ZM-4.37114e-08 3.5L65.5 3.50001L65.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="#27394E"/>' +
            '</svg></button>',
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ],

        });
    }

    function initCertificateSlider() {
        $('#certificatesSlider').slick({
            slidesToShow: 3,
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 2000,
            // // vertical: false,
            arrows: true,
            appendArrows: $('#sectionCertificates .section__arrows-container'),
            prevArrow: '<button class="section__arrow-prev"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M0 3L5 5.88675V0.113249L0 3ZM70 2.5L4.5 2.5V3.5L70 3.5V2.5Z" fill="#CACFD5"/>' +
            '</svg></button>',
            nextArrow: '<button class="section__arrow-next"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M70 3.00001L65 0.113254L65 5.88676L70 3.00001ZM-4.37114e-08 3.5L65.5 3.50001L65.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="#27394E"/>' +
            '</svg></button>',
            // variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                    }
                },

            ],

        });
    }

    function initModalSlider() {
        $('#modalSlider').on(`init reInit`, function(event, slick) {
            $('#modalSlideCurrent').text( formatZero(1) );
            $('#modalSlideCount').text( formatZero(slick.slideCount) );
        });

        $('#modalSlider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
            $('#modalSlideCurrent').text( formatZero(currentSlide + 1) );
            $('#modalSlideCount').text( formatZero(slick.slideCount) );
        });

        $('#modalSlider').slick({
            slidesToShow: 1,
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 2000,
            // // vertical: false,
            arrows: true,
            appendArrows: $('#popup .section__arrows-container'),
            prevArrow: '<button class="section__arrow-prev"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M0 3L5 5.88675V0.113249L0 3ZM70 2.5L4.5 2.5V3.5L70 3.5V2.5Z" fill="#CACFD5"/>' +
            '</svg></button>',
            nextArrow: '<button class="section__arrow-next"><svg width="70" height="6" viewBox="0 0 70 6" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="colorized" d="M70 3.00001L65 0.113254L65 5.88676L70 3.00001ZM-4.37114e-08 3.5L65.5 3.50001L65.5 2.50001L4.37114e-08 2.5L-4.37114e-08 3.5Z" fill="#27394E"/>' +
            '</svg></button>',
            // variableWidth: true,

        });
    }

    function disableModalSlider(){
        $('#modalSlider').slick('unslick');
    }


    $(document).ready(function() {
        //do
        $('#headerBackgroundSlider').slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            // vertical: true,
            arrows: false,
            speed: 1500,
            fade: true,
            cssEase: 'linear',
            dots: true,
            dotsClass: 'header__dots',
        });


        toggleMenu();

        dropdownFilter();
        initAboutSlider();
        initQuizSlider();
        initTeamSlider();
        initPartnersSlider();
        initCertificateSlider();




        // $.fancybox.defaults.afterShow = initModalSlider();

        $('a.object__link').fancybox({
            // Options will go here
            hideScrollbar: true,
            autoFocus: false,
            touch: false,

            // touch: {
            //     vertical: false, // Allow to drag content vertically
            //     momentum: false // Continue movement after releasing mouse/touch when panning
            // },
            beforeShow: function(){
                console.log('before show event');
                initModalSlider();
            },
            afterClose: function(){
                console.log('after show event');
                disableModalSlider();
            }

        });



        // select all punkts of options list

        $('#districtsAll').on("click", function(){
            if ( $(this).is(':checked') ){
                // alert("it will be checked");
                $('input[name="district"]').prop('checked', true);
            }
            else if($(this).is(":not(:checked)")){
                // alert("Checkbox will unchecked.");
                $('input[name="district"]').prop('checked', false);
            }
        });
    });




    initFormQuiz();

    function initFormQuiz(){
        alert('form init');
        $('form#formQuiz').submit(function (event) {
            alert('form submot');

            event.preventDefault();
            let form = $(this);

            let values = {};
            let fieldsArray = $(this).serializeArray();
            for (let input of fieldsArray) {
                values[input['name']] = input['value'];
            }

            console.log(values);
            $.ajax({
                type: 'POST',
                url: window.wp_data.ajax_url,
                data: {
                    action: form.attr('action'),
                    item: values
                },
                success: function (response) {
                    console.log('success');
                    alert('success', response);
                },
                error: function (e) {
                    console.log('error');
                    alert('error', e);
                },
                done: function (d) {
                    console.log('done');
                    alert('done', d);
                }

            });
        });
    }

}(jQuery));