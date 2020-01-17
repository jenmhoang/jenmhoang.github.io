function open(section, pic){
  $(".div1-1").animate({width: '0'});
  $(".button").hide(1000);
  $(".info").animate({width: '60%'});

  $("#pic1").fadeOut();
  $("#pic2").fadeOut();
  $("#pic3").fadeOut();

  $(pic).fadeIn();
  $(section).fadeIn();
}

function close(){
  $(".div1-1").animate({width: '60%'});
  $(".button").fadeIn(1000);
  $(".info").animate({width: '0'});
  
  $("#d1").fadeOut();
  $("#d2").fadeOut();
  $("#d3").fadeOut();
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
  $("#close").click(function(){
    close();
  });
});

  
