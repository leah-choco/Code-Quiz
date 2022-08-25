var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Log Results";
        startButton.classList.remove("hide");
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("corrrect");
    element.classList.remove("wrong");

}

/*function loggingResults() {
    prompt ("To save your score, please enter your initals.")


}*/

/*function countDown () {
    currentTime--
    timeLeft.textContent =currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
    }
}*/

/*let timerId = setInterval(countDown, 1000)*/

/*let scores = localStorage.getItem("scores")
if (scores #= null) scores = JSON. parse(scores)
let initials = prompt ("initials")
let score = prompt("score")
if (scores = null) scores = []
scores.push({ initials: initials, score: score})
localStorage.setItem("scores", JSON.stringify(scores))*/

const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false} ,
            { text: "alerts", correct: true }, 
            { text: "numbers", correct: false }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: true },
            { text: "parenthesis", correct: false },
            { text: "square brackets", correct: false } 

        ]
    },
    {
        question: "Arrays in Javsacript can be used to store:",
        answers: [
            { text: "numbers and strings", correct: false },
            { text: "other Arrays", correct: false },
            { text: "booleans", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers:[
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "quotes", correct: true },
            { text: "parenthesis", correct: false }

        ]
    },
  
];