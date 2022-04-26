// CREATE A QUIZ CLASS

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0; 
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length
    }
}


// Create a Question Class

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}





// NOW DISPLAY THE QUESTIONS

function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById('question');
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById('choice' + i)
            choiceElement.innerHTML = choices[i]
            guess('btn' + i, choices[i]);
        }

        showProgress();
    }
};




// GUESS ANSWER

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}


// SHOW QUIZ PROGRESS

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById('progress');
    progressElement.innerHTML = `
        Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};


// SHOW SCORES

function showScores() {
    let quizEndHTML = `
        
        <h1>Quiz Completed</h1>
        <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html">Take Quiz Again</a>
        </div>
        `;
    let quizElement = document.getElementById('quiz');
    quizElement.innerHTML = quizEndHTML;
};


// create questions here
let questions = [
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
    ),
    new Question(
        "Cascading Style sheet stands for?", ["HTML", "JQuery", "CSS", "XML"], "CSS"
    ),
    new Question(
        "Which is a JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"
    ),
    new Question(
        "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"
    ),
    new Question(
        "Which is best for Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"
    )
];


// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion()


// Add A CountDown for the Quiz

let time = 10;
let quizTimerInMinutes = time * 60 * 60;
let quizTime = quizTimerInMinutes / 60;

let counting = document.getElementById('count-down');

function startCountDown() {
    let quizTimer = setInterval(() => {
        if(quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`
        }
    }, 1000);
}


startCountDown();









































































// const questionsData = [
//     {
//         task1: 'Ի՞նչ կտպվի console-ում' + '<br><br>' + 'let x = 5;' +  '<br>'  +'console.log(x++);',
//         answers: ["5","error","undefined","6"],
//         correctAnswer: 1
//     },
//     {
//         task2: 'Նշվածներից ո՞րոնք են ցիկլի օպերատոր',
//         answers: ["for if", "switch while","for while","case for"],
//         correctAnswer: 3
//     },
//     {
//         task3: 'Ո՞ր պնդումն է ճիշտ։',
//         answers: [
//                   "JavaScript-ը դինամիկ տիպավորող լեզու է",
//                   "JavaScript-ում բոլոր տվյալի տեսակները օբյեկտներ են",
//                   "JavaScript-ը կամպիլացվող լեզու է",
//                   "JavaScript-ը աշխատում է միայն browser-ում",
//                  ],
//         correctAnswer: 1
//     }
// ]

// const questions = document.querySelector('.questions')

// questions.addEventListener('click', e => {
//     if(e.target.textContent == 5) {
//         console.log(e.target)
//     }
// })
















// function addQuestion(question) {
//     questions.insertAdjacentHTML('beforeend', `
//     <div class="question">
//         <p>${question}</p>
//     </div>
//     <div class="question__answers">
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//     </div>
//         <div class="score">
//     </div>
// `)}




// let dataQuestion = [];
// function questionsDataIteration(data) {
//     function questionIter() {
//         let i = 0
//         for(i; i < data.length; i++) {
//             dataQuestion = data[i][`task${i+1}`]
//             console.log(data[i][`task${i+1}`])  
//         }
//         questionsDataIteration(data)
//     }
//     while(data.length <= 0) {
//         questionIter()
//     }
//     data.length= data.length-1

// }

// questionsDataIteration(questionsData)
