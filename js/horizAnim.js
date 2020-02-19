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
  
  $("#d1").fadeOut();
  $("#d2").fadeOut();
  $("#d3").fadeOut();

  $("#mainPic").fadeIn();
  $("#togglePic").hide();
}

$(document).ready(function(){
  $("#b1").click(function(){
    open("#d1", "#d1-t1");
  });
  $("#b2").click(function(){
    open("#d2", "#d2-t1");
  });
  $("#b3").click(function(){
    open("#d3", "");
  });

  $(".pic").click(function(){
    close();
  });
  $(".close").click(function(){
    close();
  });
  $(".return").click(function(){
    close();
  });
});

  
