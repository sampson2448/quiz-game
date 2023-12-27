import {mainQuotes} from "../data/quotes.js"
console.log(mainQuotes)
/*-------------------------------- Constants --------------------------------*/
/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const btn = document.querySelector(".btn")
const welcome= document.querySelector("#welcome")
const body= document.querySelector("body")

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
btn.addEventListener("click",(e)=>{
  console.log(e.target)
   welcome.classList.add("hide")
   rules()
   
})

function rules(){
  let div= document.createElement("div")
  div.innerHTML= "<p> 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi debitis molestiae voluptatum voluptatibus deleniti eos, asperiores culpa fugit dolorem fuga doloribus accusantium ea animi quaerat!<br><br> 2. Fuga aspernatur asperiores repudiandae reprehenderit est. Velit ut nesciunt voluptatum aperiam, tempore placeat vel blanditiis, minus sunt aut nemo facere dolore id praesentium similique nam.<br><br> 3.Debitis earum adipisci eius ex tenetur velit nobis, obcaecati, ea porro esse voluptatem placeat facere harum sit cupiditate nemo qui asperiores doloribus aliquid? Non, sit. </p>"
  div.classList.add("game-font")
  welcome.parentElement.append(div)
}
