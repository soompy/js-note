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
function directionsPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
    $('html, body').addClass('hidden');
}

function closedPopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("show");
    $('html, body').removeClass('hidden');
}


// 슬라이더
$('.visual').on('init', function(event, slick) {
    $('.visual-item').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
    setTimeout( function() {
        $('.visual-item').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
    }, 1);
});



// 헤더
function showNav() {
    var nav = document.getElementById('navigationMenu');
    nav.classList.add('active');
    $('html, body').addClass('hidden');
}

function closed() {
    var nav = document.getElementById('navigationMenu');
    nav.classList.remove('active');
    $('html, body').removeClass('hidden');
}

$(function(){
    var rollHeader = 100;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= rollHeader ) {
            $('#m-header').addClass('action');
        }
        else {
            $('#m-header').removeClass('action');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});


$(function(){
    $('.menu').remove('active');
    $('.menu').on("click", function() {
        $(this).addClass('active')
    })
});




// footer family
$(function(){
    $('.family').click( function() {
        $(this).toggleClass('active');
    } );
});

// recruit 입사지원 버튼
$(window).on('scroll',function() {
        if (checkVisible($('#footer'))) {
            $("#fixedApply").removeClass('show');
            // $(window).off('scroll');
        } else {
            $("#fixedApply").addClass('show');
        }
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    if (elm.length > 0) {
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }
}
