let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
function startTimer() {
timeLeft = 10;
document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
clearInterval(timer);
timer = setInterval(() => {
timeLeft--;
document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
if (timeLeft === 0) {
clearInterval(timer);
nextQuestion();
}
}, 1000);
}
function loadQuestion() {
const currentQuestion = questions[currentQuestionIndex];
document.getElementById("question").innerText = currentQuestion.question;
const optionsContainer = document.getElementById("options");
optionsContainer.innerHTML = "";
currentQuestion.options.forEach(option => {
const button = document.createElement("button");
button.className = "btn btn-outline-primary";
button.innerText = option;
button.onclick = () => checkAnswer(option);
optionsContainer.appendChild(button);
});
startTimer();
}
function checkAnswer(selected) {
const correct = questions[currentQuestionIndex].answer;
if (selected === correct) {
score++;
}
nextQuestion();
}
function nextQuestion() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
endQuiz();
}
}
function endQuiz() {
clearInterval(timer);
document.getElementById("question").innerText = "Quiz Completed!";
document.getElementById("options").innerHTML = "";
document.getElementById("score").innerText = `Your Score: ${score} / ${questions.length}`;
document.getElementById("next-btn").style.display = "none";
}
loadQuestion();
