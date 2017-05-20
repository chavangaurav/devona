jQuery(document).ready(function(){
    var sliderSet = function() {
    if($(document).width()<1000)
        {
        var wdith = $(document).width();
        $('.slide img').animate({
            'width' : wdith
        },1);
        $('.slide').animate({
            'margin-left': 0
        },2000);
        }
        else if($(document).width()>1000)
        {
            $('.slide img').animate({
            'width' : 1000
            },10);
        }
    }
    sliderSet();
    $(window).resize(function(){
        sliderSet();
    });
    var sliderCount = 1;
    var slideShow = function() {
        sliderCount++;
        var imgWidth = $('.slide img').width();
        $('.slide').animate({
            'margin-left': '-='+imgWidth
        },400,function(){
            if(sliderCount==5)
            {
            sliderCount = 1;
            $('.slide').animate({
            'margin-left': '0px'
            },400);
            }
        });
    }

    var slidePrev = function() {
        if(sliderCount>1)
        {
        var imgWidth = $('.slide img').width();
        sliderCount--;
        var imgWidth = $('.slide img').width();
        $('.slide').animate({
            'margin-left': '+='+imgWidth
        },400);
        }
    }

    $('#slider_next').click(function(){
       slideShow();
    });
    $('#slider_previous').click(function(){
       slidePrev();
    });

    var interval;

    interval = setInterval(function(){
    slideShow();
    },6000);

    $('.slider').mouseenter(function(){
        clearInterval(interval);
    });
});

$(document).ready(function(){
$('.menu ul li').hover(function(){
        $(this).find('ul').slideDown(200);
    },function() {
        $(this).find('ul').slideUp(200);
    });
});

$(document).ready(function(){
$('.listing').hover(function(){
        $(this).find('.buy_now').slideDown(200);
    },function() {
        $(this).find('.buy_now').slideUp(200);
    });
});

$(document).ready(function(){
$('.listing').hover(function(){
        $(this).find('.buy_now').slideDown(200);
    },function() {
        $(this).find('.buy_now').slideUp(200);
    });
});

$(document).ready(function(){

var trend_slide = 1;
var destination;

    $('.trending').hover(function(){
        $(this).find('.trend_right').toggle('slide');
        $(this).find('.trend_left').toggle('slide');
    },function() {
        $(this).find('.trend_right').toggle('slide');
        $(this).find('.trend_left').toggle('slide');
    });

    var calc = function() {
       var listing = $('.trend_main_container > .listing').length;
        var trend_main_width = $('.trend_main').width();
        var listing_displayed = Math.round(trend_main_width/236);
        destination = listing -  listing_displayed;

    }

    $('.trend_left').click(function(){
        calc();
        if(trend_slide!=1)
        {
            trend_slide--;
        $('.trend_main_container').animate({
            'margin-left': '+=236px'
        },400);
        }
    });

    $('.trend_right').click(function(){
        calc();
        if(trend_slide<=destination)
        {
        trend_slide++;
        $('.trend_main_container').animate({
            'margin-left': '-=236px'
        },400);
        }
    });
});

