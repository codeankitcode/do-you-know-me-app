var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question('May I have your name? ');

console.log("Welcome " + userName + ", to DO YOU KNOW Ankit !")
console.log("-------")

let questions = [{
  question: "Where do I live? ",
  answer: "Bihar"
}, {
  question:"What am I learning right now? ",
  answer: "Coding" 
}, {
  question: "What is my favorite place? ",
  answer: "Delhi"
}]

for (let i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
    console.log("right");
    score = score + 1;
    console.log("current score: ", score)
    console.log("--------")

  } else{
    console.log("wrong")
    console.log("current score: ", score)
    console.log("--------")
  }
}


function yourScore() {
  console.log("Your Score: ", score)
}
yourScore()