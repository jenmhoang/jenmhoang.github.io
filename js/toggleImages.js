function toggleMain(tag){
    $("#underPicMain").show();
    $("#mainPic").fadeOut(200, function() {
        $("#mainPic").attr("src",$(tag).attr("href"));
    }).fadeIn(500);
    $("#underPicMain").attr("src",$("#mainPic").attr("src"));
  }

  $(document).ready(function(){
    var mainPics = ["#p1", "#p2", "#p3"];
    $.each(mainPics, function(i, v) {
        $(v).click(function() {
            toggleMain(this);
            return false;
        });
    });
});