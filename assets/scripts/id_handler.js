"use strict";

let theTarget;

test.addEventListener("click", (e)=> {
  theTarget = e.target.attributes["data"].value;
  document.getElementById(theTarget).scrollIntoView({
    behavior: 'smooth'
  })
})
