const heading = document.querySelector('body');
const collapsible = document.querySelector('.steps__collapsible');
const collapsibleInner = document.querySelector('.steps__collapsible-inner');
const collapsibleIcon = document.querySelector('.steps__collapsible-icon');

function fadeIn() {
  heading.classList.add('animated');
}

function collapsibleOpen() {
  collapsibleInner.classList.toggle('steps__collapsible-inner--active');
  collapsibleIcon.classList.toggle('steps__collapsible-button--active')
}

collapsible.addEventListener('click', collapsibleOpen);

window.onload = function animation() {
  this.fadeIn();
}