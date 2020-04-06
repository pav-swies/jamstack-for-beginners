const heading = document.querySelector('.hero');

console.log('hello');

function fadeIn() {
  heading.classList.add('animated');
}

window.onload = function animation() {
  this.fadeIn();
}