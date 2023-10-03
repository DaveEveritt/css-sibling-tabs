"use strict";

let theTarget;

test.addEventListener("click", (e)=> {
  theTarget = e.target.attributes["data-link"].value;
  document.getElementById(theTarget).scrollIntoView({
    behavior: 'smooth'
  })
})

/*
const jumpTo = (e) => {
  theTarget = e.target.attributes["data-link"].value;
  document.getElementById(theTarget).scrollIntoView({
    behavior: 'smooth'
  })
}

document.querySelectorAll('.jump').forEach((el) => {
  el.addEventListener('click', jumpTo)
})

get all ".toplinkheader"
querySelectorAll(data-link[""])
querySelectorAll(href["#rulerships"])

OR

document.querySelectorAll('.jump')
  .forEach(el => el.addEventListener('click', jumpTo));

OR MAP (FASTER)

document.querySelectorAll('.jump').map((el) => {
  el.addEventListener('click', jumpTo)
})

---
document.querySelectorAll('foo').forEach(item => {
  THE_THING_TO_DO
});

---
document.querySelectorAll('.jump').forEach(el => {
  el.addEventListener('click', event => {
    //handle click
  })
})

*/