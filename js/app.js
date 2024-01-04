import quotesArray from "../data/quotes.js"


    let welcome= document.querySelector('#welcome')
    const questionDisplayDiv = document.querySelector('#question-display')
    let theSelectedQuestion
    let counter=0
    let counterContainer= document.querySelector('#counter-container')
    let counterSpan = document.querySelector('#counter-value')
    let fireRound= document.querySelector('#fire-round-container')
    const btn = document.querySelector("#shifting-button")
    const firstPage= document.querySelector("#first-page")
    const dog = document.querySelector('#dog')   
    const deer = document.querySelector('#deer')
    const dogSay = new Audio("../music/dog.mp3")
    const deerSay = new Audio("../music/deer.dodmp3")

    btn.addEventListener("click",()=>{
        if( btn.innerText == "Rules Of The Game" ){
          hideContent(firstPage)
          btn.innerText= "start the game"
          renderRules() 
        }else{
          const rules=document.querySelector('#rendered-rules')
          hideContent(rules)
          hideContent(btn)
          renderGame()
        }
      })


function renderRules(){
    let div= document.createElement("div")
    div.classList.add("game-font")
    div.setAttribute('id','rendered-rules')
    div.innerHTML= `<p>1.Click the my answer button to select the person you felt create the quote<br/>2.In order to win the game, you must have three answers correct in a row. <br/>3. Good Luck and have fun!</p>`
    welcome.parentElement.append(div)
  }
  
  function renderGame(){
    hideContent(btn) 
    showContent(questionDisplayDiv)
    showContent(welcome)
    showContent(counterContainer)
  }


    function shuffle(allArr){
        let shuffleFormula= Math.floor(Math.random()* allArr.length)
        const shuffleQuotes = allArr.sort(() => shuffleFormula - Math.random()*quotesArray.length);
        const shuffledArrayList=[]
        for (let index = 0; index < allArr.length; index++) {
            const element = shuffleQuotes[index];
            if(shuffledArrayList.length<3){
           shuffledArrayList.push(element)
            }
        }
     
    let randomQuotesFormula=Math.floor(Math.random()* shuffledArrayList.length)
    let selectedQuestion =shuffledArrayList[randomQuotesFormula]
    theSelectedQuestion = selectedQuestion
    displayQuestion(selectedQuestion)
    createCard(shuffledArrayList)
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
    // display the name of the question
    function displayQuestion(question){
     questionDisplayDiv.innerHTML= `<h2>${question.quote}</h2>`
     console.log(question)

    }
// Take onClick value and the question
document.clickedName =clickedName
document.finalTest=finalTest
function clickedName(e){
isItRight(e,theSelectedQuestion.quote)
}
//remove cards
function resetCard(){
  const element= document.querySelector('.card-container')
  element.remove()
}

 function isItRight(question,displayedQuestion){
    if(displayedQuestion == question){
     counter++
    counterDisplay(counter)
    resetCard()
    shuffle(quotesArray)

    } if(displayedQuestion == question && counter==1){
        resetCard()
        showContent(questionDisplayDiv)
        finalTestRules()
    }
    if(displayedQuestion != question){
        counter =0
        counterDisplay(counter)
        resetCard()
        shuffle(quotesArray)
    }

 }
 function counterDisplay(counter){
    counterSpan.innerText=counter
 }


 function finalTest(e){
showContent(fireRound.parentElement)
hideContent(welcome)
hideContent(counterContainer)

const body=document.querySelector('body')
let button= document.createElement("button")
button.classList.add('restart-button')
button.classList.add('game-font')

button.onclick=function(){
    location.reload()
}

if(e=='Reindeer'){
winOrLose()
button.innerText='You win, try again?'
body.style.backgroundImage="url('./imgs/win.gif')"
body.style.backgroundRepeat = "no-repeat" 
body.style.backgroundPosition = "bottom";  // The background image will be centered
body.style.backgroundSize = "cover"
body.style.height="100vh"
body.append(button)



}if(e=='German Shepherd'){
 winOrLose()
body.style.backgroundImage="url('./imgs/lose.gif')"
button.innerText='Start Over'
body.style.backgroundRepeat = "no-repeat" 
body.style.backgroundPosition = "center";  // The background image will be centered
body.style.backgroundSize = "cover"
body.style.height="100vh"
body.append(button)
}


}

 function finalTestRules(){
    hideContent(questionDisplayDiv)
    counterContainer.innerText= "You have cleared the 3 in a row condition"
    let testDiv= document.createElement("div")
    testDiv.classList.add("card-container")
    testDiv.innerHTML= `<div id='final-rules'><h1> Final Round: click the correct keys to win.<br/> You lose if not entered correctly and or time runs out<br/> <button id='timer' onclick='finalTest()'>I understand</button></h1></div>`
    welcome.append(testDiv)
}



let hideContent = (e)=>{
    e.classList.add("hide")
  }
  let showContent = (e)=>{
  e.classList.remove('hide')
  }

 console.log(counter)
shuffle(quotesArray)


function winOrLose(){
    hideContent(fireRound.parentElement)

}


dog.addEventListener("click", function(evt){
  dogSay.volume = .05
  dogSay.play()
  dogSay.duration("3s")
})
deer.addEventListener("click", function(evt){
  deerSay.volume = .05
  deerSay.play()

})

console.log(fireRound.parentElement)