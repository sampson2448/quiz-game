import quotesArray from "../data/quotes.js";

/*------------ Constants ------------*/
const openingButton = document.querySelector("#opening-button");
const homePage = document.querySelector("#home-page");
const body = document.querySelector("body");
const questionDisplayDiv = document.querySelector("#question-display");
const dog = document.querySelector("#dog");
const deer = document.querySelector("#deer");
const dogSay = new Audio("../music/dog.mp3");
const deerSay = new Audio("../music/deer.mp3");

/*------------ Variables ------------*/
let loseBackground = "url('./imgs/lose.gif')";
let winBackground = "url('./imgs/win.gif')";
let mainBackground = "url(/imgs/background.jpeg)";
let welcome = document.querySelector("#welcome");
let theSelectedQuestion;
let counter = 0;
let counterContainer = document.querySelector("#counter-container");
let counterSpan = document.querySelector("#counter-value");
let fireRound = document.querySelector("#fire-round-container");
let threeInARow = document.querySelector("#three-in-a-row-container");
window.counter = counter;

/*--------- Event Listeners ---------*/

openingButton.addEventListener("click", () => {
  if (openingButton.innerText == "Rules Of The Game") {
    hideContent(homePage);
    openingButton.innerText = "start the game";
    renderRules();
  } else {
    const rules = document.querySelector("#rendered-rules");
    hideContent(rules);
    hideContent(openingButton);
    renderGame();
  }
});

dog.addEventListener("click", function (evt) {
  dogSay.volume = 0.05;
  dogSay.play();
});
deer.addEventListener("click", function (evt) {
  deerSay.volume = 0.05;
  deerSay.play();
});

/*------------ Functions ------------*/

function renderRules() {
  let div = document.createElement("div");
  div.classList.add("game-font");
  div.setAttribute("id", "rendered-rules");
  div.innerHTML = `<p>1.Click the my answer button to select the person you felt create the quote<br/>2.In order to win the game, you must have three answers correct in a row. <br/>3. Good Luck and have fun!</p>`;
  welcome.parentElement.append(div);
}

function renderGame() {
  hideContent(openingButton);
  showContent(questionDisplayDiv);
  showContent(welcome);
  showContent(counterContainer);
}

function shuffle(allArr) {
  let shuffleFormula = Math.floor(Math.random() * allArr.length);
  const shuffleQuotes = allArr.sort(
    () => shuffleFormula - Math.random() * quotesArray.length
  );
  const shuffledArrayList = [];
  for (let index = 0; index < allArr.length; index++) {
    const element = shuffleQuotes[index];
    if (shuffledArrayList.length < 3) {
      shuffledArrayList.push(element);
    }
  }
  let randomQuotesFormula = Math.floor(
    Math.random() * shuffledArrayList.length
  );
  let selectedQuestion = shuffledArrayList[randomQuotesFormula];
  theSelectedQuestion = selectedQuestion;
  displayQuestion(selectedQuestion);
  createCard(shuffledArrayList);
}

// create cards
function createCard(e) {
  let div = document.createElement("div");
  div.classList.add("card-container");
  e.forEach((element) => {
    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "game-font card");
    innerDiv.innerHTML = `<img src=${element.img} alt=Avatar/><h4>${element.name}</h4><button onclick='clickedName("${element.quote}")'>My answer</button>`;
    div.append(innerDiv);
  });
  return welcome.append(div);
}
// display the name of the question
function displayQuestion(question) {
  questionDisplayDiv.innerHTML = `<h2>${question.quote}</h2>`;
}
// Take onClick value and the question
document.clickedName = clickedName;
document.finalTest = finalTest;
function clickedName(e) {
  isItRight(e, theSelectedQuestion.quote);
}
//remove cards
function resetCard() {
  const element = document.querySelector(".card-container");
  element.remove();
}

function isItRight(question, displayedQuestion) {
  console.log(counter);

  if (displayedQuestion == question) {
    counter++;
    counterDisplay(counter);
    resetCard();
    console.log(counter);

    shuffle(quotesArray);
  }
  if (displayedQuestion == question && counter == 2) {
    counterSpan.innerText = 0;
    resetCard();
    showContent(questionDisplayDiv);
    finalTestRules();
    console.log(counter);
  }
  if (displayedQuestion != question) {
    counter = 0;
    counterDisplay(counter);
    resetCard();
    shuffle(quotesArray);
  }
}
function counterDisplay(counter) {
  counterSpan.innerText = counter;
}

function finalTest(e) {
  showContent(fireRound.parentElement);
  hideContent(welcome);
  hideContent(counterContainer);
  hideContent(threeInARow);
  if (e == "Reindeer") {
    winOrLose();
    restartButtonFunction(e);
    bodyMakeUp(e);
  }
  if (e == "German Shepherd") {
    winOrLose();
    restartButtonFunction(e);
    bodyMakeUp(e);
  }
}

function finalTestRules() {
  hideContent(questionDisplayDiv);
  hideContent(counterContainer);
  showContent(threeInARow);
  threeInARow.innerHTML = "<h2>Congrats, you won three in a row</h2>";
  let testDiv = document.createElement("div");
  testDiv.classList.add("card-container");
  testDiv.innerHTML = `<div id='final-rules'><h1> Final Round: click the correct keys to win.<br/> You lose if not entered correctly and or time runs out<br/> <button onclick='finalTest()'>I understand</button></h1></div>`;
  welcome.append(testDiv);
}

let hideContent = (e) => {
  e.classList.add("hide");
};
let showContent = (e) => {
  e.classList.remove("hide");
};
let deleteContent = (e) => {
  e.remove();
};

shuffle(quotesArray);

function winOrLose() {
  hideContent(fireRound.parentElement);
}

function resetGame() {
  let restartButton = document.querySelector("#restart-button");
  body.style.backgroundImage = mainBackground;
  hideContent(counterContainer);
  hideContent(welcome);
  hideContent(questionDisplayDiv);
  showContent(homePage);
  deleteContent(restartButton);
  openingButton.innerText = "Rules Of The Game";
  showContent(openingButton);
  deleteContent(document.querySelector("#rendered-rules"));
  deleteContent(document.querySelector("#final-rules"));
  deleteContent(document.querySelector(".card-container"));
  shuffle(quotesArray);
}

function bodyMakeUp(answer) {
  if (answer == "German Shepherd") {
    body.style.backgroundImage = loseBackground;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "center"; // The background image will be centered
    body.style.backgroundSize = "cover";
    body.style.height = "100vh";
  } else {
    body.style.backgroundImage = winBackground;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundPosition = "bottom"; // The background image will be centered
    body.style.backgroundSize = "cover";
    body.style.height = "100vh";
  }
}

function restartButtonFunction(e) {
  let restartButton = document.createElement("button");
  restartButton.setAttribute("id", "restart-button");
  restartButton.classList.add("restart-button");
  restartButton.classList.add("game-font");
  restartButton.onclick = resetGame;
  if (e == "German Shepherd") {
    restartButton.innerText = "Start Over";
  } else {
    restartButton.innerText = "You win, try again?";
  }
  body.append(restartButton);
}
