"use strict";

let theTarget;

// test.addEventListener("click", (e)=> {
//   theTarget = e.target.attributes["data-link"].value;
//   document.getElementById(theTarget).scrollIntoView({
//     behavior: 'smooth'
//   })
// })

const jumpTo = (e) => {
  theTarget = e.target.attributes["data-link"].value;
  document.getElementById(theTarget).scrollIntoView({
    behavior: 'smooth'
  })
}

const jumpLinks = [...document.querySelectorAll('[data-link]')];
jumpLinks.map((el) => {
  el.addEventListener('click', jumpTo)
})

/*
get all ".toplinkheader"
querySelectorAll(data-link[""])
querySelectorAll(href["#rulerships"])

OR MAP (FASTER) - FAILS

document.querySelectorAll('.jump').map((el) => {
  el.addEventListener('click', jumpTo)
})

*/