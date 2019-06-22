/*pcfull.js*/ 


(function($){

//===================================width pack
var winW = $(window).width();
var mob = 480;
var tab = 768;
var pc = 1367;
var win = $(window);
var device; 
// console.log(winW);


// ===================================reload

var div = function(winW){
    if(winW <= mob){device = "mob"}
    else if(mob < winW && tab >= winW){device = "tab"}
    else if(tab < winW && pc >= winW){device = "pc"}
    else {device = "pcfull"}
  };

var before = div(winW);






//====================================pcfull.js start


if($(window).width() >1366) {  


$(window).on('resize', function(){
  var nw = $(window).width();
  var nowD = div(nw);
  if(nw !== nowD){
  location.reload();
  }; }); 

//====================================gnb
var btn = $('.gnb_btn');


//=============================gnb_btn animation
btn.on('click' , function(e){
     e.preventDefault();
     btn.stop().toggleClass('active_btn');
});    

var headLink = $('#headBox')
var headBg = function(){
          var st = win.scrollTop();
          if(st > 0){headLink.css({backgroundPosition : '0 0'});
          }else{headLink.css({backgroundPosition : '0 -70px'});}
        };
        headBg();
          
     
        win.on('scroll' ,function(){
        headBg();
});

var headLogo = $('.head_logo')
var logoFade = function(){
          var st = win.scrollTop();
          if(st > 0){headLogo.fadeIn(700);
          }else{headLogo.fadeOut(300);}
        };
        logoFade();
          
     
        win.on('scroll' ,function(){
        logoFade();
});
        


//============================gnb fadeIn
btn.on('click' , function(e){
    e.preventDefault();
    $('.gnb_menu').stop().fadeToggle(500);
});
//============================gnb
 $('.move_target').mouseover(function() {
 
        $(this).css({ color : '#ffffff',
                      backgroundColor : '#111111'});
    }).mouseout(function(){
        $(this).css({ color : '#aaaaaa',
                      backgroundColor : 'rgba(255,255,255,0)'});
    });






//=====================================gnb target scroll          

$('.move_target').on('click', function (e) {
    e.preventDefault();
    var thisTarget = $(this).attr('href');
    $('html,body').animate({scrollTop:$(thisTarget).offset().top},400);
});

//==========================================indi target scroll & indi event
$('.indi_li').on('click', function (e) {
    e.preventDefault();
    var indiTarget = $(this).attr('href');
    $('html,body').animate({scrollTop:$(indiTarget).offset().top},400);
});
//=========================================indi animate 

//==========================================indi scrollTop

var indiAc01 = function(){
          var divPosition1 = $('#section_01').position().top
              divPosition2 = $('#section_02').position().top 
              divPosition3 = $('#section_03').position().top 
              divPosition4 = $('#section_04').position().top 
              divPosition5 = $('#section_05').position().top;  
             //console.log(divPosition2);
          var win = $(window);
          var st = win.scrollTop();
          var indiCss = {width : '20px',backgroundColor : '#388888',borderRadius: '25%' }

          if(divPosition1 == st ){ $('.indi_01').css(indiCss)

          }else if(divPosition2  == st){ $('.indi_02').css(indiCss)

          }else if(divPosition3 == st){ $('.indi_03').css({width : '20px',backgroundColor : '#ffffff',borderRadius: '25%' })

          }else if(divPosition4 == st){ $('.indi_04').css(indiCss)

          }else if(divPosition5 == st){ $('.indi_05').css(indiCss)

          }else{$('.indi_li').css({width: '10px',height: '10px',borderRadius: '100%',backgroundColor: '#dddddd'})}
        };
        indiAc01();
          
     
        win.on('scroll' ,function(){
        indiAc01();
}); 


//=============================scroll event

  window.onload = function () {
                 

            var elm = "section";
            $(elm).each(function (index) {
               
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().top;
                            }catch(e){}
                        }
                    }
                     
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 300, complete: function () {
                        }
                    });
                });
            });
        }
//==========================================Topscroll
var topScroll = $('.top_btn_wrap')
var scrollUp = function(){
          var st = win.scrollTop();
          if(st >= 300){topScroll.fadeIn(700);
          }else{topScroll.fadeOut(300);}
        };
        scrollUp();
          
     
        win.on('scroll' ,function(){
        scrollUp();
});

$('.top_btn_wrap a').on('click', function (e) {
    e.preventDefault();
    var topTarget = $(this).attr('href');
    $('html,body').animate({scrollTop:$(topTarget).offset().top},400);
});        
//========================================animate
var win = $(window);
$(document).ready(function(){ 
                 $('.line_shape').fadeIn(300).animate({ height: '15%' },600);
                 $('#headBox').fadeIn(300);
                                                    
    

                             });
//=============================section02
$('.site_ac').on('mouseover',function(e){
    e.preventDefault();
    $(this).animate({width:'60px',height:'60px'},300)
});

$('.site_ac').on('mouseleave',function(e){
    e.preventDefault();
    $(this).animate({width:'50px',height:'50px'},200)
});        


var skillAc = function(){
          var st = win.scrollTop();
          if(st >= 500){$('.skill_percent').addClass('skill_ac')
          }
        };
        skillAc();
          
     
        win.on('scroll' ,function(){
        skillAc();
});

//===============================================section4
$('.card').on('mouseover',function(e){
    e.preventDefault();
    $(this).css({boxShadow: '1px 1px 5px #777777'})
    $(this).children('.port_img').stop().animate({height:'86%'},400)
    $(this).children('.port_text').stop().animate({color: '#ffffff',backgroundColor:'rgba(0,0,0,0.7)'},300)
});

$('.card').on('mouseleave',function(e){
    e.preventDefault();
   $(this).css({boxShadow: '1px 1px 4px #dddddd'})
    $(this).children('.port_img').stop().animate({height:'70%'},300)
    $(this).children('.port_text').stop().animate({color: '#000000',backgroundColor:'#ffffff'},200)
});     
//============================mob WOW animate
new WOW().init();


//=============================================header
$('.logo').addClass('wow fadeIn').attr('data-wow-duration','4s');

$('.head_text01').addClass('wow fadeInUp').attr('data-wow-duration','2s');
$('.head_text01').attr('data-wow-delay','0.9s');
$('.head_text02').addClass('wow fadeInUp').attr('data-wow-duration','2.5s');
$('.head_text02').attr('data-wow-delay','1.2s'); 




//=============================================info
$('.info_bar').addClass('wow fadeInUp').attr('data-wow-duration','1s');
$('.info_bar').attr('data-wow-delay','0.1s');
$('.info_logo').addClass('wow fadeInDown').attr('data-wow-duration','1.5s');
$('.info_logo').attr('data-wow-delay','0.1s');
$('.my_img').addClass('wow fadeIn').attr('data-wow-duration','2s');
$('.my_img').attr('data-wow-delay','0.3s');
$('.info_name01').addClass('wow fadeInLeft').attr('data-wow-duration','2s');
$('.info_name01').attr('data-wow-delay','0.3s');
$('.info_name02').addClass('wow fadeInRight').attr('data-wow-duration','2s');
$('.info_name02').attr('data-wow-delay','0.3s');
$('.info_tag').addClass('wow fadeInUp').attr('data-wow-duration','1s');
$('.info_tag').attr('data-wow-delay','0.3s');


$('.about_ac01').addClass('wow fadeInLeft').attr('data-wow-duration','1.8s');
$('.about_ac01').attr('data-wow-delay','0.1s');
$('.about_ac02').addClass('wow fadeInLeft').attr('data-wow-duration','1.9s');
$('.about_ac02').attr('data-wow-delay','0.2s');
$('.about_ac03').addClass('wow fadeInLeft').attr('data-wow-duration','2s');
$('.about_ac03').attr('data-wow-delay','0.3s');
$('.about_ac04').addClass('wow fadeInLeft').attr('data-wow-duration','2.2s');
$('.about_ac04').attr('data-wow-delay','0.4s');
$('.about_ac05').addClass('wow fadeInLeft').attr('data-wow-duration','2.3s');
$('.about_ac05').attr('data-wow-delay','0.4s');

$('.name_move01').addClass('wow fadeInLeft').attr('data-wow-duration','1s');
$('.name_move01').attr('data-wow-delay','0.4s');
$('.name_move02').addClass('wow fadeInLeft').attr('data-wow-duration','1.2s');
$('.name_move02').attr('data-wow-delay','0.5s');
$('.name_move03').addClass('wow fadeInLeft').attr('data-wow-duration','1.3s');
$('.name_move03').attr('data-wow-delay','0.6s');
$('.name_move04').addClass('wow fadeInLeft').attr('data-wow-duration','1.5s');
$('.name_move04').attr('data-wow-delay','0.7s');
$('.name_move05').addClass('wow fadeInLeft').attr('data-wow-duration','1.6s');
$('.name_move05').attr('data-wow-delay','0.8s');
$('.name_move06').addClass('wow fadeInLeft').attr('data-wow-duration','1.7s');
$('.name_move06').attr('data-wow-delay','0.8s');
$('.name_move07').addClass('wow fadeInLeft').attr('data-wow-duration','1.8s');
$('.name_move07').attr('data-wow-delay','0.8s');
$('.name_move08').addClass('wow fadeInLeft').attr('data-wow-duration','1.8s');
$('.name_move08').attr('data-wow-delay','0.8s');

$('.skill_an01').addClass('wow fadeInRight').attr('data-wow-duration','1s');
$('.skill_an01').attr('data-wow-delay','0.4s');
$('.skill_an02').addClass('wow fadeInRight').attr('data-wow-duration','1.2s');
$('.skill_an02').attr('data-wow-delay','0.5s');
$('.skill_an03').addClass('wow fadeInRight').attr('data-wow-duration','1.3s');
$('.skill_an03').attr('data-wow-delay','0.6s');
$('.skill_an04').addClass('wow fadeInRight').attr('data-wow-duration','1.5s');
$('.skill_an04').attr('data-wow-delay','0.7s');
$('.skill_an05').addClass('wow fadeInRight').attr('data-wow-duration','1.6s');
$('.skill_an05').attr('data-wow-delay','0.8s');
$('.skill_an06').addClass('wow fadeInRight').attr('data-wow-duration','1.7s');
$('.skill_an06').attr('data-wow-delay','0.8s');
$('.skill_an07').addClass('wow fadeInRight').attr('data-wow-duration','1.8s');
$('.skill_an07').attr('data-wow-delay','0.8s');

$('.site01').addClass('wow fadeInRight').attr('data-wow-duration','1s');
$('.site01').attr('data-wow-delay','0.5s');
$('.site02').addClass('wow fadeInRight').attr('data-wow-duration','1.2s');
$('.site02').attr('data-wow-delay','0.6s');
$('.site03').addClass('wow fadeInRight').attr('data-wow-duration','1.3s');
$('.site03').attr('data-wow-delay','0.7s');
$('.site04').addClass('wow fadeInRight').attr('data-wow-duration','1.5s');
$('.site04').attr('data-wow-delay','0.8s');



//=============================================banner
$('.banner_img01').addClass('wow flipInY').attr('data-wow-duration','2s');
$('.banner_img02').attr('data-wow-delay','0.1s');
$('.banner_img02').addClass('wow flipInY').attr('data-wow-duration','2.2s');
$('.banner_img02').attr('data-wow-delay','0.2s');
$('.banner_img03').addClass('wow flipInY').attr('data-wow-duration','2.3s');
$('.banner_img03').attr('data-wow-delay','0.3s');
$('.p_move01').addClass('wow fadeInUp').attr('data-wow-duration','1.5s');
$('.p_move01').attr('data-wow-delay','0.3s');
$('.p_move02').addClass('wow fadeInUp').attr('data-wow-duration','1.5s');
$('.p_move02').attr('data-wow-delay','0.5s');
$('.p_move03').addClass('wow fadeInUp').attr('data-wow-duration','2s');
$('.p_move03').attr('data-wow-delay','0.7s');

//=============================================contents

$('.port_header').addClass('wow fadeInRight').attr('data-wow-duration','4s');
$('.con_01').addClass('wow fadeInUp').attr('data-wow-duration','1.5s');
$('.con_01').attr('data-wow-delay','0.5s');
$('.con_02').addClass('wow fadeInUp').attr('data-wow-duration','1.5s');
$('.con_02').attr('data-wow-delay','0.5s');
$('.con_03').addClass('wow fadeInUp').attr('data-wow-duration','1.5s');
$('.con_03').attr('data-wow-delay','0.5s');
$('.con_04').addClass('wow fadeInUp').attr('data-wow-duration','2.3s');
$('.con_04').attr('data-wow-delay','0.6s');
$('.con_05').addClass('wow fadeInUp').attr('data-wow-duration','2.3s');
$('.con_05').attr('data-wow-delay','0.6s');
$('.con_06').addClass('wow fadeInUp').attr('data-wow-duration','2.3s');
$('.con_06').attr('data-wow-delay','0.6s');

$('.more_wrap').addClass('wow fadeInUp').attr('data-wow-duration','2s');
$('.more_arow').addClass('wow fadeIn').attr('data-wow-duration','2s');
$('.more_arow').attr('data-wow-iteration','20');
//=============================================footer
$('.end_text').addClass('wow fadeInUp').attr('wow-data-offset','3568');
$('.end_text').attr('data-wow-delay','0.3s');
$('.footBox').addClass('wow fadeInUp').attr('wow-data-offset','3568');

};//===============================================pcfull.js end




})(jQuery);        