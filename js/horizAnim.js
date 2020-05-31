$(document).ready(function () {
  $(".button").click(function () {
    open(this);
  });
  $(".button").hover(function () {
    togglePic(this);
  });
  $(".close, .pic").on("click", close);
});

function togglePic(tag) {
  $(".pic").css("background-image", "url(" + $(tag).attr("href") + ")");
}

function open(tag) {
  $("#frame").attr("src", $(tag).attr("src"));
  $(".pic").animate({ right: "70%" }, 1000);
  $(".projNav").fadeOut();
  $(".info").css("right", "0");
  $(".info").fadeIn(2000);
  $("#header").fadeOut();
  $(".close").fadeIn(2000);
  $(".close").css("display", "flex");
}

function close() {
  $(".info").animate({ right: "-70%" }, { duration: 500, queue: false });
  $(".pic").animate({ right: "0" }, { duration: 500, queue: false });

  $(".projNav").fadeIn({ duration: 500, queue: false });
  $("#header").fadeIn({ duration: 500, queue: false });
  $(".info").hide(0);

  $(".close").hide();
}
