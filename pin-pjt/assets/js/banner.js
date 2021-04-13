var list = document.querySelector('.slide_list ');
var firstItemClone = list.firstElementChild.cloneNode(true);
list.appendChild(firstItemClone);


document.querySelectorAll('.slick-arrow').forEach(function(item) {
    var curIndex = 0;
    list.style.transform = "translate3d(-" + 800 * (curIndex + 1) + "px, 0px, 0px)";
    
    item.addEventListener('click', function (e) {
        e.preventDefault();        
        if (e.target.classList.contains('slide_btn_prev')) {    
            if (index === 0) {
                index = customers.length;
            }
            index--;
        }

        if (e.target.classList.contains('slide_btn_next')) {            
            if (index === (customers.length - 1)) {
                index = -1;
            }
            index++;            
        }
    })
})