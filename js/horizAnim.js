function open(section, pic){
  $(".projNav").animate({width: '0'});
  $(".button").hide(1000);
  $(".info").animate({width: '60%'});

  $(section).css("display", "flex");
  $(section).fadeIn();
}

function close(){
  $(".projNav").animate({width: '60%'});
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
    open("#d1", "#pic1");
  });
  $("#b2").click(function(){
    open("#d2", "#pic2");
  });
  $("#b3").click(function(){
    open("#d3", "#pic3");
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

  
