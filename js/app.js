/*-------------------------------- Constants --------------------------------*/
import {mainQuotes} from "../data/quotes.js"

/*---------------------------- Variables ----------------------------*/

/*------------------------ Cached Element References ------------------------*/
const btn = document.querySelector("#shifting-button")
const welcome= document.querySelector("#welcome")
/*----------------------------- Event Listeners -----------------------------*/
btn.addEventListener("click",()=>{
  if( btn.innerText == "Rules Of The Game" ){
    hideContent(welcome)
    btn.innerText= "start the game"
    renderRules() 
  }else{
    const rules=document.querySelector('#rendered-rules')
    hideContent(rules)
    hideContent(btn)
    renderGame()
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
function renderGame(){
  let div= document.createElement("div")
  div.classList.add("game-font")
  div.setAttribute('id','')
  div.innerHTML= "<p> connected</p>"
  welcome.parentElement.append(div)
}


let hideContent = (e)=>{
  console.log(e)
  e.classList.add("hide")
 
}
let showContent = (e)=>{
  e.classList.remove("hide")

}