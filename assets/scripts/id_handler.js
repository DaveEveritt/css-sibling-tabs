"use strict";

// let section;

// function gotoID(whichID) {
//   document.getElementById(whichID).scrollIntoView({
//     behavior: 'smooth'
//   });
// }

// if (location.search) {  
//   section = location.search;
//   console.log(section);
//   document.getElementById(section).scrollIntoView({
//     behavior: 'smooth'
//   });
// };

test.addEventListener("click", ()=> {
  document.getElementById("esoteric-taurus").scrollIntoView({
    behavior: 'smooth'
  })
})

// generic:
/*
- if QueryParams in URL put ID from URL string into urlID
- call gotoID(urlID)
*/
