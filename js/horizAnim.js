$(document).ready(function(){
  $("#b1").click(function(){
    $(".buttons").animate({width: '0'});
    $(".button").hide(1000);
    $(".info").animate({width: '60%'});
    $("#mainpic").fadeOut();
    
    $("#d1").fadeIn();
    $("#pic1").fadeIn();
  });
  $("#b2").click(function(){
    $(".buttons").animate({width: '0'});
    $(".button").hide(1000);
    $(".info").animate({width: '60%'});
    $("#mainpic").fadeOut();
    
    $("#d2").fadeIn();
    $("#pic1").fadeIn();
  });
  $("#b3").click(function(){
    $(".buttons").animate({width: '0'});
    $(".button").hide(1000);
    $(".info").animate({width: '60%'});
    $("#mainpic").fadeOut();
    
    $("#d3").fadeIn();
    $("#pic1").fadeIn();
  });

  $(".pic").click(function(){
    $(".buttons").animate({width: '60%'});
    $(".button").fadeIn(1000);
    $(".info").animate({width: '0'});
    $("#mainpic").fadeIn();
    
    $("#d1").fadeOut();
    $("#d2").fadeOut();
    $("#d3").fadeOut();
    
    $("#pic1").fadeOut();
  });
});