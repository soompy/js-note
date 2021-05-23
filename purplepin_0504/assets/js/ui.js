function openStore(evt, shopName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(shopName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();




function pageUp() {
  var h = window.innerHeight;
  window.scrollBy(0, -h);
}

function pageDown() {
  // 페이지 높이 배열을 만들어 주고 그 배열 만큼 클릭시
  // 올라가도록하기
  // var arrH = [937, 1229, 1200, 1310, 1200];
  var arrH = [1200, 1310, 1200, 1229, 937];
  var h = window.innerHeight;
  window.scrollBy(0, h);
}