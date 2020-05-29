var mybutton = document.getElementById("scrollTop");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var pct = $(document.body).height() / screen.availHeight;
  if (pct > 1.8) {
    if (document.body.scrollTop > 300) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
