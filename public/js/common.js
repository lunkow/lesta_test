

document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded




    window.scrollTo({top: 0, left: 0 }); // начало с самого верха страницы
    // scrollTo(document.querySelectorAll('section')[2], 1000, 2250);

    let starts = findBlockPages();
    console.log(starts);

    // setTimeout(fade(null, 1000, 50, starts[2]), 5000);

    let windowHeight = window.innerHeight;

    let currentScreenIndex = 0;
    let currentScreenStart = starts[currentScreenIndex];


    // let scrollIntervaller = setInterval();
        window.addEventListener('scroll', function(e) {
            let currentScrollPosition = pageYOffset;
            console.log(pageYOffset + 'px');

            // let delayScroll = setTimeout(function () {
                if ( ((pageYOffset - currentScreenStart) > (windowHeight / 6)) &&
                    (pageYOffset - currentScreenStart > 0) ){
                    // alert('next, please!');
                    // this.preventDefault();
                    // alert(currentScreenIndex);

                    currentScreenIndex++;
                    currentScreenStart = starts[currentScreenIndex];

                    fade(null, 500, 50, currentScreenStart);


                    // window.scrollTo({top: currentScreenStart, left: 0 });



                } else if( ( pageYOffset - currentScreenStart) < (windowHeight / 6) ) {


                    // window.scrollTo({top: currentScreenStart, left: 0 });
                    // fade(null, 500, 50, currentScreenStart);
                }
            // }, 500);
        });

});


function findBlockPages(){
    let blockPages = document.querySelectorAll('section');
    let blockPagesStarts = [];
    blockPages.forEach(function (item) {
        blockPagesStarts.push(item.offsetTop);
    });
    // console.log(blockPages);
    return blockPagesStarts;
}













//
// Функция растворения элемента:
//   elem - объект DOM
//   t - время анимации
//   f - количество кадров в секунду
// currentTarget - лемент, к которому скроллим

function fade(elem, t, f, currentTarget){
    // кадров в секунду (по умолчанию 50)
    var fps = f || 50;
    // время работы анимации (по умолчанию 500мс)
    var time = t || 500;
    // сколько всего покажем кадров
    var steps = time / (1000 / fps);
    console.log(steps + ' шагов');
    // текущее значение opacity - изначально 0
    var op = window.pageYOffset;
    console.log(op + ' px - Текущее значение');

    // изменение прозрачности за 1 кадр
    var d0 = Math.abs(window.pageYOffset - currentTarget)  / steps;
    console.log(d0 + ' px - за один кадр');



    // устанавливаем интервал (1000 / fps)
    // например, 50fps -> 1000 / 50 = 20мс
    var timer = setInterval(function(){
        // уменьшаем текущее значение opacity
        op += d0;
        console.log(op + 'px - Текущее значение');
        // устанавливаем opacity элементу DOM

        // elem.style.opacity = op;
        window.scrollTo({top: op, left: 0});
        // уменьшаем количество оставшихся шагов анимации
        steps--;

        // если анимация окончена
        if(steps <= 0){
            // убираем интервал выполнения
            clearInterval(timer);
            // и убираем элемент из потока документа
            // elem.style.display = 'none';
            window.scrollTo({top: currentTarget, left: 0});
        }
    }, (1000 / fps));
}

