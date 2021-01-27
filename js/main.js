//INIT WOW LIBRARY FOR EFFECTS
new WOW().init();

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('nav').css('box-shadow','2px 2px 20px orangered');
    } else {
        $('nav').css('box-shadow','0px 0px 0px orangered');
    }
});