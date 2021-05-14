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
$(function(){
     var lastScroll = 0;
     var windowHeight = $(window).height();
     $(window).scroll(function(event){
          var scroll = $(this).scrollTop();
          if (scroll > windowHeight){
          //이벤트를 적용시킬 스크롤 높이
               $("#header").removeClass("whiteMenu");
          }
          else {
               $("#header").addClass("whiteMenu");
          }
          lastScroll = scroll;
     });
});


