"use strict";

let theTarget;

const jumpTo = (e) => {
  theTarget = e.target.attributes["data-link"].value;
  document.getElementById(theTarget).scrollIntoView();
}
//   IF SMOOTH SCROLL NOT HANDLED BY CSS AND BROWSERS:
//   document.getElementById(theTarget).scrollIntoView({
//     behavior: 'smooth'
//   })

const jumpLinks = [...document.querySelectorAll('[data-link]')];
jumpLinks.map((el) => {
  el.addEventListener('click', jumpTo)
})
