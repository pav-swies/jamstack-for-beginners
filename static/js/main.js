const heading = document.querySelector('.hero');

function fadeIn() {
  heading.classList.add('animated');
}

window.onload = function animation() {
  this.fadeIn();
}