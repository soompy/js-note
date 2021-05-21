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
  var h = window.innerHeight;
  window.scrollBy(0, h);
}