/*-------------------------------- Constants --------------------------------*/
import {mainQuotes} from "../data/quotes.js"

/*---------------------------- Variables ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const btn = document.querySelector("#shifting-button")
const welcome= document.querySelector("#welcome")

/*----------------------------- Event Listeners -----------------------------*/
console.log(btn.innerText)
btn.addEventListener("click",(e)=>{
  if( btn.innerText == "Rules Of The Game" ){
    hideContent()
    renderRules() 
  }else{
    console.log("it's changed")
  }
})

/*-------------------------------- Functions --------------------------------*/


function renderRules(){
  let div= document.createElement("div")
  div.classList.add("game-font")
  div.setAttribute('id','rendered-rules')
  div.innerHTML= "<p> 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi debitis molestiae voluptatum voluptatibus deleniti eos, asperiores culpa fugit dolorem fuga doloribus accusantium ea animi quaerat!<br><br> 2. Fuga aspernatur asperiores repudiandae reprehenderit est. Velit ut nesciunt voluptatum aperiam, tempore placeat vel blanditiis, minus sunt aut nemo facere dolore id praesentium similique nam.<br><br> 3.Debitis earum adipisci eius ex tenetur velit nobis, obcaecati, ea porro esse voluptatem placeat facere harum sit cupiditate nemo qui asperiores doloribus aliquid? Non, sit.</p>"
  welcome.parentElement.append(div)
}


let hideContent = ()=>{
  welcome.classList.add("hide")
  btn.innerText= "start the game"
}
let showContent = ()=>{

}