const questions = [
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    },
    {
        question: "Which is the smallest continent?",
        answers: [
            { text: "Asia", correct: false },
            { text: "USA", correct: false },
            { text: "Africa", correct: false },
            { text: "Australia", correct: true }
        ]
    },
    {
        question: "Which is the aquatic animal?",
        answers: [
            { text: "Shark", correct: true },
            { text: "Lion", correct: false },
            { text: "Monkey", correct: false },
            { text: "Goat", correct: false }
        ]
    },
    {
        question: "Which is smallest planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Earth", correct: false},
            { text: "Pluto", correct: true },
            { text: "Mercury", correct: false }
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = (currentQuestionIndex + 1) +". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = true;
        }
        button.addEventListener("click",selectanswer);
    }) 
}
function selectanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    let answerButtons = document.querySelectorAll(".btn");
    answerButtons.forEach((child)=>{
        if(child.dataset.correct === "true"){
            child.classList.add("correct");
        }
        child.disabled = true;
    });
    nextButton.style.display = "block";
}
function nextButtonHandle(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

function showscore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
         nextButtonHandle();
    }else{
        startQuiz();
    }
})

function resetState(){
    nextButton.style.display = "none";
    answerButton.innerHTML = "";
}

startQuiz();