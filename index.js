var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0

// High score documentation
var highScore = [{
  name: "Amulya",
  score: "10"
},
{
  name: "Leo Valdez",
  score: "9"
}]

// Welcome Message
function welcome() {
  var userName = readlineSync.question(chalk.blue("Please enter your name: "));
  console.log("Welcome to 'How well do you know Amulya?' " + userName + "! Let's start! ");
  console.log("~~~~~~~~~~~~~~")
}


// Function play
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.cyanBright(question));

  console.log(chalk.blue("You entered: " + userAnswer))
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgBlack("You are right!"));
    score = score + 1;
  } else {
    console.log("You are wrong!");
  }

  console.log(chalk.hex("#6366f1")("Current score: " + score))
  console.log("~~~~~~~~~~~~~~")
}

// Array of questions
var questions = [{
  question: "In which city was I named? ",
  answer: "Pune"
},
{
  question: "My favourite season is: ",
  answer: "Summer"
},
{
  question: "Who is my favourite superhero? ",
  answer: "Batman"
},
{
  question: "My favourite chocolate is: ",
  answer: "Twix"
},
{
  question: "What am I allergic to? ",
  answer: "Grapes"
},
{
  question: "What's my favourite number? ",
  answer: "27"
},
{
  question: "What is my cat's formal name? ",
  answer: "Peach"
},
{
  question: "Which insect am I most afraid of? ",
  answer: "Honey Bee"
},
{
  question: "Would I rather watch: action, horror, romance or fantasy? ",
  answer: "romance"
},
{
  question: "Which country do I want to visit the most? ",
  answer: "Japan"
}]

// Loop for questions
function game() {
  for (var i = 0; i < questions.length; i = i + 1) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}


// Display of Score and High Score
function showScores() {
  console.log(chalk.magenta("YAYYY! You scored: ", score));
  console.log("Check out high scores! Ping me your score, I'll be sure to update it!");
  for (var i = 0; i < highScore.length; i = i + 1) {
    var result = highScore[i];
    console.log(chalk.hex("#a78bfa")(result.name + " : " + result.score))
  }
}

// Arguments for functions
welcome();
game();
showScores();



























