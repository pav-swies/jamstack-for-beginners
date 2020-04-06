const heading = document.querySelector('body');

function fadeIn() {
  heading.classList.add('animated');
}

window.onload = function animation() {
  this.fadeIn();
}