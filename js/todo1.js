'use strict';

let itemList = [];
let inputButton = document.querySelector('.input__button');
inputButton.addEventListener('click', addItem);

function addItem() {
    let item = document.querySelector('.item').value;
    if(item != null) {
        itemList.push(item);
        document.querySelector('.item').value = "";
        document.querySelector('.item').focus();
    }
    showList();
}

// 기능1. 입력창에 할일을 입력 후, +버튼을 누르면 리스트에 할일이 표시된다
function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".item__list").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}
// 기능2. 삭제 버튼을 누르면 해당 리스트가 삭제된다.
function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1); // splice 함수를 사영하여 지정한 인덱스(id)부터 지정한 숫자(1)만큼 요소를 삭제할 수 있다.
    showList();
}

// 기능3. 체크리스트
let checkList = document.querySelector('.item__list');
checkList.addEventListener('click', event => {
    if(event.target.targetNmae = 'LI') {
        event.target.classList.toggle('checked');
    } // classList의 toggle 메서드를 사용하여 click 이벤트가 발생했을 때 checked 클래스가 존재한다면 제거, 없다면 추가하도록 설정한다.
});


