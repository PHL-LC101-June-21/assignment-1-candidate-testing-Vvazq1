const input = require('readline-sync');



// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? '
let correctAnswer = 'Sally Ride';
let candidateAnswer = ''
let questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45] ",
  "what entry is at index 2? ",
  "What is the minimum crew size for the ISS?"
  ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers; 


function askForName(candidateName) {
candidateName = input.question('What is your name? ');
   console.log('Hello,',candidateName,'!');
}


function askQuestion(question) {
question = input.question('Who was the first American woman in space? ');
}
candidateAnswer = '';

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


let i = 0;
while ( i < questions) {
  console.log(questions[i]);
  i++;
}


function gradeQuiz(candidateAnswer){
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
correctAnswer = ('Sally Ride')
if (candidateAnswer = ('Sally Ride')
) {
console.log('Correct!');
} else  {
console.log('Incorrect.');
}

  if ('5 kilometer == 5000 meters? ');
  consol.log('true');

} else {
  console.log('false');
}

  if ('5 + 3)/2 * 10 = ');
  console.log('40');

}

  let grade;


  return grade;
}

function runProgram() {
askForName();

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