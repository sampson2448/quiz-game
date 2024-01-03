/*-------------------------------- Constants --------------------------------*/
import {quotesArray} from "../data/quotes.js"

/*---------------------------- Variables ----------------------------*/
let counter=0
let timesUsed=0
let theSelectedQuestion

/*------------------------ Cached Element References ------------------------*/
const btn = document.querySelector("#shifting-button")
const firstPage= document.querySelector("#first-page")
const welcome= document.querySelector("#welcome")
const gameStarter= document.querySelector("#game-starter")
const questionDisplayStarter= document.querySelector("#question-display-starter")

const questionDisplayDiv = document.querySelector('#question-display')
let counterContainer= document.querySelector('#counter-container')
let counterSpan = document.querySelector('#counter-value')
let cardContainer= document.querySelector('.card-container')


/*----------------------------- Event Listeners -----------------------------*/
btn.addEventListener("click",()=>{
  if( btn.innerText == "Rules Of The Game" ){
    firstPage.childNodes[1].remove()
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
  console.log(welcome.parentElement)
  firstPage.parentElement.append(div)
}


function renderGame(){
  showContent(counterContainer)
  showContent(questionDisplayStarter)
  showContent(gameStarter)
}
  // create cards
  function createCard(e){
    let div= document.createElement("div")
    div.classList.add("card-container")
    e.forEach(element => {
        let innerDiv = document.createElement("div")
        innerDiv.setAttribute('class','game-font card')
        innerDiv.innerHTML= `<img src=${element.img} alt=Avatar/><h4>${element.name}</h4><button onclick='clickedName("${element.quote}")'>My answer</button>`
        div.append(innerDiv)       
    });
    return welcome.append(div)
}
function shuffle(allArr){
  let shuffleFormula= Math.floor(Math.random()* allArr.length)
  const shuffleQuotes = allArr.sort(() => shuffleFormula - Math.random()*quotesArray.length);
  const shuffledArrayList=[]
  for (let index = 0; index < 3; index++) {
      const element = shuffleQuotes[index];
     shuffledArrayList.push(element)
      
  }
let randomQuotesFormula=Math.floor(Math.random()* shuffledArrayList.length)
let selectedQuestion =shuffledArrayList[randomQuotesFormula]
theSelectedQuestion = selectedQuestion
displayQuestion(selectedQuestion)
createCard(shuffledArrayList)
}
    // display the name of the question
    function displayQuestion(question){
      questionDisplayDiv.innerHTML= `<h2>${question.quote}</h2>`
      console.log(question)
 
     }

let hideContent = (e)=>{
  console.log(e)
  e.classList.add("hide")
 
}

let showContent = (e)=>{
  e.classList.remove("hide")

}

shuffle(quotesArray)
