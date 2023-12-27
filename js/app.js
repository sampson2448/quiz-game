import {mainQuotes} from "../data/quotes.js"
console.log(mainQuotes)
/*-------------------------------- Constants --------------------------------*/
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const btn = document.querySelector(".btn")
const welcome= document.querySelector("#welcome")


/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
btn.addEventListener("click",(e)=>{
  console.log(e.target)
   welcome.className="hide"
   
})


