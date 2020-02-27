function open(section, tab){
  $(".projNav").animate({width: '0'});
  $(".button").hide(1000);
  $(".info").animate({width: '70%'});

  $(tab).fadeIn(1000);
  $(section).css("display", "flex");
  $(section).fadeIn();
}

function close(){
  $(".projNav").animate({width: '70%'});
  $(".button").fadeIn(1000);
  $(".info").animate({width: '0'});
  
  var ids = ["#d1", "#d2", "#d3", "#d4"];
  $.each(ids, function(i, v) {
      $(v).fadeOut();
  })
  $("#mainPic").fadeIn();
  $("#togglePic").hide();
};

$(document).ready(function(){
  var btns = ["#b1", "#b2", "#b3", "#b4"];
  var tab = ["#d1-t1", "#d2-t1", "#d3-t3", "#d4-t4"];
  var sec = ["#d1", "#d2", "#d3", "#d4"];
  var cl = [".pic", ".close", ".return"];
  $.each(btns, function(i, v) {
    $(v).click(function() {
        open(sec[i], tab[i]);
    })
  })
  $.each(cl, function(i, v) {
    $(v).click(function() {
        close();
    });
  });
})