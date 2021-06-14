const input = require('readline-sync');



// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question('What is your name?');

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer; 'Sally Ride'
let candidateAnswer;
let questions; 'Who was the first American woman in space? '
let correctAnswers;
let candidateAnswers; 


function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //
 input.question = candidateName; 
 }
  // TODO 1.1c: Say Hello to candidate  //
  if (candidateName) {

   console.log('Greetings,', candidateName, '!');
}



function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log('Who was the first American woman in space?');
 // i am a little confuedon this part//
 candidateAnswer

}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let correctAnswer = true
if (correctAnswer) {
console.log('Correct!');
} else {
  console.log('Wrong.');
}

  let grade;


  return grade;
}

function runProgram() {

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};