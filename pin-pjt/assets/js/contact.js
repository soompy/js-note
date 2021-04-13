// hover 하면 해당 drop-down에 show클래스가 추가

//  여기에 마우스를 올리면
var dropDown = document.querySelector('.drop-down-box');
// 여기에 show 클래스가 추가된다
var dropDownContent = document.querySelector('.drop-down');
var contentParent = dropDownContent.parentElement;
var currentBox = 0;

contentParent.addEventListener('mouseover', function () {
    this.dropDownContent.classList.add('show');    
})

