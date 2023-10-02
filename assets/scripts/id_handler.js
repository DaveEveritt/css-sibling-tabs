"use strict";

let theTarget;

test.addEventListener("click", (e)=> {
  theTarget = e.target.attributes["data"].value;
  document.getElementById(theTarget).scrollIntoView({
    behavior: 'smooth'
  })
})

/*
document.querySelectorAll('.input')
  .forEach(input => input.addEventListener('focus', this.onInputFocus));

---
document.querySelectorAll('foo').forEach(item => {
  THE_THING_TO_DO
});

---
const doOnClick = (e) => {
    // code here
}
document.querySelectorAll('.jump').forEach((el) => {
  el.addEventListener('click', doOnClick)
})

---
document.querySelectorAll('.some-class').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
  })
})

*/