// .form - field - raise를 누르면.field - select - cont가 나타나고 여기에 마우스를 떼면
// .field - select - cont가 사라짐

var familySite = document.querySelector('.form-field-raise');
var selectFamily = document.querySelector('.field-select-cont');

selectFamily.style.display = "none";
familySite.addEventListener('click', function () {
    selectFamily.style.display = "block";
})