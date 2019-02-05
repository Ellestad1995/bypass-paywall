console.log("Fjerner restriksjoner...");
//var blur = document.getElementsByClassName('blur');
//console.log("Antall blurs: " + blur.length );
/*for(let b of blur){
  //b.classList.remove('blur');
console.log("Element:" + b.id);
  //console.write("Removing!!");
}
*/
const timer = setInterval(() => {
  const blurs = document.querySelectorAll(".blur");
  //const myElement = document.getElementsByClassName('blur');
  if(blurs.length > 0) {
    clearTimeout(timer);
    processMyElement(blurs);
  }
}, 150);

function processMyElement(blurs){
  for(let b of blurs){
    b.classList.remove('blur');
    console.log("Element:" + b.id);
    //console.write("Removing!!");
  }
}
