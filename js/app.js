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
let quizGameDiv = document.querySelector("#quiz-game-div");
let theSelectedQuestion;
let counter = 0;
let counterContainer = document.querySelector("#counter-container");
let counterSpan = document.querySelector("#counter-value");
let finalRound = document.querySelector("#final-round-container");
let firstRoundCleared = document.querySelector("#first-round-cleared");

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
  div.innerHTML = `<h2>1.Click my answer to select who's the creator of the quote displayed<br/>2.To win the game, you must be correct three times in a row. <br/>3. Good Luck and have fun!</h2>`;
  quizGameDiv.parentElement.append(div);
}
// hides the first two pages of the game and display the game
function renderGame() {
  hideContent(openingButton);
  globalCreator();
  showContent(questionDisplayDiv);
  showContent(quizGameDiv);
  showContent(counterContainer);
  shuffle(quotesArray);
}
//Shuffle the array of quotes
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
  theSelectedQuestion = shuffledArrayList[randomQuotesFormula];
  displayQuestion(shuffledArrayList[randomQuotesFormula]);
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
  return quizGameDiv.append(div);
}
// display the name of the question
function displayQuestion(displayedQuestion) {
  questionDisplayDiv.innerHTML = `<h2>${displayedQuestion.quote}</h2>`;
}
// Take onClick value and the question
function clickedName(e) {
  verifyAnswer(e, theSelectedQuestion.quote);
}
//remove cards
function resetCard() {
  const element = document.querySelector(".card-container");
  element.remove();
}

//verfiying if my answer is correct
function verifyAnswer(question, myAnswer) {
  if (myAnswer == question) {
    counter++;
    counterDisplay(counter);
    resetCard();
    shuffle(quotesArray);
  }
  if (myAnswer == question && counter == 2) {
    counterSpan.innerText = 0;
    resetCard();
    showContent(questionDisplayDiv);
    finalTestRules();
  }
  if (myAnswer != question) {
    counter = 0;
    counterDisplay(counter);
    resetCard();
    shuffle(quotesArray);
  }
}

//change the count of how many in a row is correct
function counterDisplay(counter) {
  counterSpan.innerText = counter;
}

//runs the final test
function finalTest(e) {
  showContent(finalRound.parentElement);
  hideContent(quizGameDiv);
  hideContent(counterContainer);
  hideContent(firstRoundCleared);
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

//runs the final test rules
function finalTestRules() {
  hideContent(questionDisplayDiv);
  hideContent(counterContainer);
  showContent(firstRoundCleared);
  firstRoundCleared.innerHTML = "<h2>Congrats, you won three in a row</h2>";
  let testDiv = document.createElement("div");
  testDiv.classList.add("card-container");
  testDiv.innerHTML = `<div id='final-rules'><h1> Final Round: click the correct keys to win.<br/> You lose if not entered correctly and or time runs out<br/> <button onclick='finalTest()'>I understand</button></h1></div>`;
  quizGameDiv.append(testDiv);
}
// hide final round div
function winOrLose() {
  hideContent(finalRound.parentElement);
}

// reset the game
function resetGame() {
  let restartButton = document.querySelector("#restart-button");
  body.style.backgroundImage = mainBackground;
  hideContent(counterContainer);
  hideContent(quizGameDiv);
  hideContent(questionDisplayDiv);
  showContent(homePage);
  deleteContent(restartButton);
  openingButton.innerText = "Rules Of The Game";
  showContent(openingButton);
  deleteContent(document.querySelector("#rendered-rules"));
  deleteContent(document.querySelector("#final-rules"));
  deleteContent(document.querySelector(".card-container"));
}
// change the body makeup depending on if you win or lose
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
// restarting the page button function
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
//create global varables
function globalCreator() {
  window.clickedName = clickedName;
  window.finalTest = finalTest;
  window.counter = counter;
}
// hide content
function hideContent(e) {
  e.classList.add("hide");
}

//show content
function showContent(e) {
  e.classList.remove("hide");
}

// delete content
function deleteContent(e) {
  e.remove();
}
