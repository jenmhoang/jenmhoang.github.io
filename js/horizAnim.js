$(document).ready(function () {
  function open(tag) {
    $("#frame").attr("src", $(tag).attr("src"));
    $(".pic").animate({ right: "70%" }, 1000);
    $(".projNav").fadeOut();
    $(".info").css("right", "0");
    $(".info").fadeIn(2000);
    $(".header").fadeOut();
    $(".close").fadeIn(2000);
    $(".close").css("display", "flex");
  }

  function close() {
    $(".info").animate({ right: "-70%" }, { duration: 500, queue: false });
    $(".pic").animate({ right: "0" }, { duration: 500, queue: false });

    $(".projNav").fadeIn(500);
    $(".info").hide({ duration: 0, queue: true });

    $(".close").hide();
    $(".header").fadeIn(2000);
  }

  var btns = ["#b1", "#b2", "#b3", "#b4"];
  var cl = [".pic", ".close", ".return"];
  $.each(btns, function (i, v) {
    $(v).click(function () {
      open(this);
    });
  });
  $.each(cl, function (i, v) {
    $(v).click(function () {
      close();
    });
  });
});
