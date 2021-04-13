  
        var list = document.querySelector('.slide_list ');
        var firstItemClone = list.firstElementChild.cloneNode(true);
        list.appendChild(firstItemClone);
         function move() {
                var curIndex = 0;
                setInterval(function () {
                    list.style.transition = '0.4s';
                    list.style.transform = "translate3d(-" + 196 * (curIndex + 1) + "px, 0px, 0px)";

                    curIndex++;

                    if (curIndex === 9) {
                        setTimeout(function () {
                            list.style.transition = '0s';
                            list.style.transform = "translate3d(0px, 0px, 0px)";
                        }, 2000)
                        curIndex = 0;
                    }
                }, 1400);
            }

        document.addEventListener("DOMContentLoaded", function () {
           move();
        });

  const slideBtnNext = document.querySelector('.slide_btn_next'); 
  const slideBtnPrev = document.querySelector('.slide_btn_prev'); 
  const slideList = document.querySelector('.slide_list');
  const slideContents = document.querySelectorAll('.slide_content');
  const slideLen = slideContents.length;
  const slideSpeed = 400;
  const slideWidth = 196;
  const startNum = 0;
  
  let curIndex = startNum;
  let curSlide = slideContents[curIndex]; 

  slideBtnPrev.addEventListener('click', function () {
      if (curIndex >= 0) {
          slideList.style.transition = slideSpeed + "ms";
          slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
      }
      if (curIndex === 0) {
          setTimeout(function () {
              slideList.style.transition = "0ms";
              slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
          }, slideSpeed);
          curIndex = slideLen;
      }      
      curSlide = slideContents[--curIndex];
      curSlide.classList.add('slide_active');     
  });

      slideBtnNext.addEventListener('click', function () {
        if (curIndex <= slideLen - 1) {
            slideList.style.transition = slideSpeed + "ms";
            slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
        }
        if (curIndex === slideLen - 1) {
            setTimeout(function () {
                slideList.style.transition = "0ms";
                slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
            }, slideSpeed);
            curIndex = -1;
        }        
        curSlide = slideContents[++curIndex];
        curSlide.classList.add('slide_active');
    });


        