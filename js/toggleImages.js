function toggleMain(tag) {
  $("#underPic").show();
  $("#mainPic")
    .fadeOut(200, function () {
      $("#mainPic").attr("src", $(tag).attr("href"));
    })
    .fadeIn(500);
  $("#underPic").attr("src", $("#mainPic").attr("src"));
}

$(document).ready(function () {
  var mainPics = ["#p1", "#p2", "#p3", "#p4"];
  $.each(mainPics, function (i, v) {
    $(v).click(function () {
      toggleMain(this);
      return false;
    });
  });
});
