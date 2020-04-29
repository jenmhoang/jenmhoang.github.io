$(document).ready(function(){
  function open(section, tab){
    $(".section").fadeOut(800);
    $(".pic").animate({right: '70%'}, 1000);
  
    $(tab).fadeIn(0);
    $(section).fadeIn(2000);
    $(section).css("display", "flex");
  }
  
  function close(){
    $(".section").fadeIn(1000);
    $(".pic").animate({right: '0'}, 1000);
    
    var ids = ["#d1", "#d2", "#d3", "#d4"];
    $.each(ids, function(i, v) {
        $(v).fadeOut();
    })
    $("#mainPic").fadeIn();
    $("#togglePic").hide();
  };
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