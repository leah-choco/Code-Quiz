var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn")
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question")
var answerEl = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {

    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerEl.appendChild(button)
    })

}

function resetState() {
    nextButton.classList.add("hide")
    while ( answerEl.firstChild)
    answerEl.removeChild(answerEl.firstChild)

}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass( document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("corrrect")
    element.classList.remove("wrong")
}

var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            { text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true}, 
            {text: "numbers", correct: false},
        ]
    }
        
    /*{
        question: "Hahahahaha",
        answers:[
            {text: "ha", correct:false},

        ]
    }
    
         
       
    
]