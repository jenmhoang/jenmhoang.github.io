var pagination = document.getElementById("pagination");
var tabs = pagination.getElementsByClassName("tab");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function() {
    var curr = document.getElementsByClassName("active");
    curr[0].className = curr[0].className.replace(" active", "");
    this.className += " active";
  });
}

function openTab(section){
    $(section).slideDown(1000);
}

function closeTab(){
    $("#d1-t1").slideUp(1000);
    $("#d1-t2").slideUp(1000);
    $("#d1-t3").slideUp(1000);
}

$(document).ready(function(){
    $("#t1").click(function(){
        closeTab();
        openTab("#d1-t1");
    });
    $("#t2").click(function(){
        closeTab();
        openTab("#d1-t2");
    });
    $("#t3").click(function(){
        closeTab();
        openTab("#d1-t3");
    });
});


