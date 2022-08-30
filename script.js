const share_btn = document.getElementsByClassName("share-btn");
const share_menu = document.getElementsByClassName("share-menu");
// console.log(share_menu);

share_btn[0].onclick = myfunc;

function myfunc() {
  console.log("clicked");
  if (share_menu[0].classList.contains("active")) {
    share_menu[0].classList.remove("active");
  } else {
    share_menu[0].classList.add("active");
  }
}
