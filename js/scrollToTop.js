var mybutton = document.getElementById("scrollTop");
var div = document.getElementById("tabs");
div.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (div.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  $(div).scrollTop(0);
}
