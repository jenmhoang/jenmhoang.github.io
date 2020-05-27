var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('mImages');
var modalImg = document.getElementById("img01");
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementById("myModal");
span.onclick = function() {
  modal.style.display = "none";
}