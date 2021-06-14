// 아코디언
var accordionBtn = document.querySelectorAll('.accordionTitle');
var allTexts = document.querySelectorAll('.text');
var accIcon = document.querySelectorAll('.accIcon');

// event listener

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
   var targetText = el.currentTarget.nextElementSibling.classList;
   var targetAccIcon = el.currentTarget.children[1];
   var target = el.currentTarget;

   if (targetText.contains('show')) {
       targetText.remove('show');
       targetAccIcon.classList.remove('anime');
       target.classList.remove('accordionTitleActive');
   }
   else {
      accordionBtn.forEach(function (el) {
         el.classList.remove('accordionTitleActive');

         allTexts.forEach(function (el) {
            el.classList.remove('show');
         })

         accIcon.forEach(function (el) {
          el.classList.remove('anime');
         })

      })

         targetText.add('show');
         target.classList.add('accordionTitleActive');
         targetAccIcon.classList.add('anime');
   }
}

// pupup
function popup() {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
    // console.log('error-message', $('.error-message').hide());
}

function closed() {
    $('#user_email2_select_list').hide();
    var popup = document.getElementById("popup");
    popup.classList.remove("show");
}



// 슬라이더
$('.visual').on('init', function(event, slick) {
    $('.visual-item').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
    setTimeout( function() {
        $('.visual-item').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
    }, 1);
});



// 헤더
var lastScroll = 0;
var gridNum = 0;

$(function(){

    $(window).on('scroll touchmove mousewheel', function(event) {
        const mode = event.originalEvent.wheelDelta < 0 ? 'D' : 'U';
        switch(parseInt(gridNum)) {
            case 0:
                if (mode == 'D') {
                    $('.slick-next').click();
                    gridNum = 1;
                    // scrollAble();
                }
                break;
            case 1:
                if (mode == 'D') {
                    scrollAble();
                    gridNum = 2;
                    // $(this).scrollTop($('.slick-track').height());
                    // setTimeout(function () {
                        // $(this).stop().animate({ scrollTop: '1000'}, 2000);
                        // $('.slick-track').animate( { scrollTop : 0 }, 400 );

                    // }, 2000);
                    // $(this).scrollTop($('.slick-track').height());
                }
                break;
            default:
                break;
        }
        // event.preventDefault();
        event.stopPropagation();
        // return false;
    });

     var windowHeight = $(window).height();
     $(window).scroll(function(event){
          var scroll = $(this).scrollTop();
          console.log('scroll', scroll, $('.slick-track').height(), $('#header').height());
          if (scroll == 0) {
                  gridNum = 0;
                  $(this).scrollTop(0);
                  $('.slick-prev').click();
                  scrollDisable();
          }
          if (scroll > ($('.slick-track').height() - $('#header').height())) {
              if (scroll > windowHeight){
                  //이벤트를 적용시킬 스크롤 높이
                  $("#header").removeClass("whiteMenu");
              }
              else {
                  $("#header").addClass("whiteMenu");
              }
          } else {

              if (typeof lastSlide !== undefined) {
                  // console.log('lastSlide:::::', lastSlide);
                lastSlide == diff_menu ? $("#header").removeClass("whiteMenu") : $("#header").addClass("whiteMenu");
              }
          }
          lastScroll = scroll;
     });
});


