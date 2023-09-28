const selectmenu = document.getElementById("triangles");
if (selectmenu) {
  selectmenu.onchange=function() {
    // get which option chosen from "selectmenu"
    let chosenoption = this.options[this.selectedIndex];
    //open target page based on option's value attr
    if (chosenoption.value!=""){
      window.open("/triangles/" + chosenoption.value.toLowerCase() + '/', "_self")
    } else {
      // console.log('nothing chosen');
      // choose first option:
      let x=document.getElementById("triangles").selectedIndex;
      let y=document.getElementById("triangles").options;
      // console.log("Index: " + y[x].index + " is " + y[x].text);
    }
  }
}
