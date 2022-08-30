const share_btn = document.getElementsByClassName("share-btn");
const share_menu = document.getElementsByClassName("share-menu");
const share_menu_mobile = document.getElementsByClassName("share-menu-mobile");

share_btn[0].onclick = myfunc;

function myfunc() {
  if (share_menu[0].classList.contains("active")) {
    share_menu[0].classList.remove("active");
    share_menu_mobile[0].classList.remove("active");
  } else {
    share_menu[0].classList.add("active");
    share_menu_mobile[0].classList.add("active");
  }
}
