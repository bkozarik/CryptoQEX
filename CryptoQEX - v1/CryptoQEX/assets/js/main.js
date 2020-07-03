        // ----------------------------------
        // ----------------------------------
        
        var date_new = "May 10,2022 00:00"; // End date

        // ----------------------------------
        // ----------------------------------






"use strict";
const anchors = document.querySelectorAll('.ahor')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
jQuery(window).scroll(function(){
    var $sections = $('section');
$sections.each(function(i,el){
   var top  = $(el).offset().top-100;
   var bottom = top +$(el).height();
   var scroll = $(window).scrollTop();
   var id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('a.active-link').removeClass('active-link');
       $('a[href="#'+id+'"]').addClass('active-link');
   }
})
});
jQuery(window).scroll(function(){
    var $sections1 = $('#about');
    $sections1.each(function(i,el){
   var top1  = $(el).offset().top-100;
   var bottom1 = top1 +$(el).height();
   var scroll1 = $(window).scrollTop();
   if( scroll1 > top1){
       $('header').addClass('fixed');
   }
   else {
    $('header').removeClass('fixed')
   }
})
});
      $('.faq__item').click(function() {
        if ($(this).parent().hasClass('faqOpen'))
        {
        $(this).parent().removeClass('faqOpen');
        
        }
        else
        {
        $('.faq__item').parent().removeClass('faqOpen');
        $(this).parent().addClass('faqOpen');
        }
    
  });
$(document).ready(function () {
    function get_timer() {

        var date_t = new Date(date_new);
        var date = new Date();    
        var timer = date_t - date;

        if(date_t > date) {
    
            var day = parseInt(timer/(60*60*1000*24));
    
            if(day < 10) {
                day = '0' + day;
            }
    
            day = day.toString();
    
            var hour = parseInt(timer/(60*60*1000))%24;
    
            if(hour < 10) {
                hour = '0' + hour;
            }
    
            hour = hour.toString();
                
    
            var min = parseInt(timer/(1000*60))%60;
    
            if(min < 10) {
                min = '0' + min;
            }
    
            min = min.toString();
                
    
            var sec = parseInt(timer/1000)%60;
            if(sec < 10) {
                sec = '0' + sec;
            }

            sec = sec.toString();
            

            if(day[1] == 9 && 
                hour[0] == 2 && 
                hour[1] == 3 && 
                min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#day0"),day[0]);
            }
            else {
                $("#day0").html(day[0]);
            }

            if(hour[0] == 2 && 
                hour[1] == 3 && 
                min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#day1"),day[1]);
            }
            else {
                $("#day1").html(day[1]);
            }

            if(hour[1] == 3 && 
                min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#hour0"),hour[0]);
            }
            else {
                $("#hour0").html(hour[0]);
            }

            if(min[0] == 5 && 
                min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#hour1"),hour[1]);
            }
            else {
                $("#hour1").html(hour[1]);
            }
                
            if(min[1] == 9 && 
                sec[0] == 5 && 
                sec[1] == 9) {
                animation($("#min0"),min[0]);
            }
            else {
                $("#min0").html(min[0]);
            }

            if(sec[0] == 5 && sec[1] == 9) {
                animation($("#min1"),min[1]);
            }
            else {
                $("#min1").html(min[1]);
            }    

            if(sec[1] == 9) {
                animation($("#sec0"),sec[0]);
            }
            else {
                $("#sec0").html(sec[0]);
            }
            animation($("#sec1"),sec[1]);	

            setTimeout(get_timer,1000);
        }
        else {
            $(".timer__item > div > div > p").html("0");
        } 
    }
    function animation(vibor,param) {
        vibor.html(param)
            .css({'opacity':'0'})
            .animate({'opacity':'1'});
    }
    get_timer();
    });

    $('.open').click(function(){
      $('.menu__mob').fadeIn();
      $('body').css({'overflow': 'hidden'})
    });
    $('.close').click(function(){
        $('.menu__mob').fadeOut();
        $('body').css({'overflow': 'visible'})
    });
    $('.menu__mob > ul > li > a').click(function(){
        $('.menu__mob').fadeOut();
        $('body').css({'overflow': 'visible'})
    });
    $('.settings__colors').hide();
    $('.settings__open').on('click', () => {
        $('.settings__colors').fadeIn(); 
    });
    $('.color__close').on('click', () => {
        $('.settings__colors').fadeOut(); 
    });


