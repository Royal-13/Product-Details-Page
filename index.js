function onMenuClick() {
  var navbar = document.getElementById("minContainer");
  var responsive_class_name = "responsive";

  navbar.classList.toggle(responsive_class_name);
}

function changeImage(newImageSrc) {
  var mainImage = document.getElementById("mainImage");
  mainImage.src = newImageSrc;

  var smallImage = document.getElementById("imageThumb");
  for (var i = 0; i < smallImages.length; i++) {
    smallImage[i].style.opacity = "50%";
    smallImage[i].style.border = "2px solid #ff7d1a";
  }

}
