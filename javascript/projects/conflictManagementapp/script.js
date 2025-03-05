const home = document.querySelector(".home");
const app = document.querySelector(".app");
const startBtn = document.getElementById("home-button");
startBtn.addEventListener("click",()=>{
    app.style.display = "block";
    home.style.display = "none";
})

let hbutton = document.createElement("button");
hbutton.classList.add("home-button");
hbutton.innerHTML = "Go Home";
app.appendChild(hbutton);
hbutton.style.display = "none";

const questions = [
    "If someone disagrees with me, I vigorously defend my side of the issue",
    "I go along with suggestions from co workers, even if I don’t agree with them",
    "I give-and-take so that a compromise can be reached",
    "I keep my opinions to myself rather than openly disagree with people",
    "In disagreements or negotiations, I try to find the best possible solutions for both sides by sharing information",
    "I try to reach a middle ground in disputes with other people",
    "I accommodate the wishes of people who have different points of view than my own",
    "I accommodate the wishes of people who have different points of view than my own",
    "In negotiations, I hold on to my position rather than give in",
    "I try to solve conflicts by finding solutions that benefit both me and the other person",
    "I let co-workers have their way rather than jeopardize our relationship",
    "I try to win my position in a discussion",
    "I like to investigate conflicts with co workers so that we can discover solutions that benefit both of us",
    "I believe that it is not worth the time and trouble discussing my differences of opinion with other people",
    "To reach an agreement, I give up some things in exchange for others"
];

let currentQuestionIndex = 0;
let competingScore = 0;
let compromisingScore = 0;
let accomodatingScore = 0;
let avoidingScore = 0;
let collaboratingScore = 0;

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function startQuiz(){
    currentQuestionIndex = 0;
    currentQuestionIndex = 0;
    competingScore = 0;
    compromisingScore = 0;
    accomodatingScore = 0;
    avoidingScore = 0;
    collaboratingScore = 0;
    nextButton.innerHTML = "Next"
    displayQuestion();
}
function displayQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestionIndex+1 + ". " + currentQuestion;
    for(let i = 1;i<=5;i++){
        const button = document.createElement("button");
        button.innerHTML = i;
        button.classList.add("btn");
        answerButton.appendChild(button);
        button.addEventListener("click", selectanswer);
    }
}
function selectanswer(e){
    const selectedBtn = e.target;
    selectedBtn.classList.add("select");
    let questionScore = parseInt(selectedBtn.textContent);
    if (currentQuestionIndex === 0 || currentQuestionIndex === 8 || currentQuestionIndex === 11) {
        competingScore += questionScore;
    } else if (currentQuestionIndex === 1 || currentQuestionIndex === 6 || currentQuestionIndex === 10) {
        accomodatingScore += questionScore;
    } else if (currentQuestionIndex === 2 || currentQuestionIndex === 5 || currentQuestionIndex === 14) {
        compromisingScore += questionScore;
    } else if (currentQuestionIndex === 3 || currentQuestionIndex === 7 || currentQuestionIndex === 13) {
        avoidingScore += questionScore;
    } else {
        collaboratingScore += questionScore;
    }
    let answerButtons = document.querySelectorAll(".btn");
    answerButtons.forEach((child) => {
        child.disabled = true;
    });
    nextButton.style.display = "block";
}
function increaseScore(questionScore){
    if (currentQuestionIndex in [0, 8, 11]) {
        competingScore += questionScore;
    } else if (currentQuestionIndex in [1, 6, 10]) {
        accomodatingScore += questionScore;
    } else if (currentQuestionIndex in [2, 5, 14]) {
        compromisingScore += questionScore;
    } else if (currentQuestionIndex in [3, 7, 13]) {
        avoidingScore += questionScore;
    } else {
        collaboratingScore += questionScore;
    }
}

nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        displayQuestion();
    }else if(currentQuestionIndex == questions.length){
        showscore();
    }else{
        startQuiz();
    }
})

function showscore(){
    resetState();
    questionElement.innerHTML = `Your Result:<br>
    <br>Competing Score = ${competingScore}
    <br>Accomodating Score = ${accomodatingScore}
    <br>Compromising Score = ${compromisingScore}
    <br>Avoiding Score = ${avoidingScore}
    <br>Collaborating Score = ${collaboratingScore}`;
    hbutton.style.display = "block";
}
hbutton.addEventListener("click", () => {
    hbutton.style.display = "none";
    home.style.display = "block";
    app.style.display = "none";
})

function resetState() {
    nextButton.style.display = "none";
    answerButton.innerHTML = "";
}
startQuiz();

