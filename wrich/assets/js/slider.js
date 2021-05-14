// console.clear();

// 이 코드는 창이 열릴때 첫번째 슬라이더의 트랜지션을 적용하기 위한 코드입니다.
$('.main-slider').on('init', function(event, slick) {
    $('.main-slider').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
    setTimeout( function() {
        $('.main-slider').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
    }, 1);
});