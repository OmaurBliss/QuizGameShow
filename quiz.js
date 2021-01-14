var quizClick = document.querySelector ("#quizclick") 
// var questions = ["first wuestion", "second qestion"];
// var choices = [
//     ["ironman", "spiderman"],
//     []
// ]
// var answer =[""]
var countDownTime = 0
var x = setInterval (function (){
var countDownStart = 60000;
var countDown = countDownStart - countDownTime;
var seconds = Math.floor((distance % (1000* 60)) / 1000);
document.querySelector("#timer").textContent = "s";

if (countDown < 0) {
    clearInterval(x);
    document.querySelector("#timer").textContent = "Time is Up"
}

});

var countDown = document.querySelector("#timer");
var allQuestions = [
    {
        question: "Who is Tony Stark's alter ego?",
        choices:["Pink Panther", "The Claw", "Ironman", "Black Panther"],
        answer: "Ironman"
    },
    {
        question: "Who is an origional member of the Avengers?",
        choices: ["Rocket", "Black Panther", "Aquaman", "Black Widow"],
        answer: "Black Widow"
    },
    {
        question: "Which superhero was bitten by a radioactive spider?",
        choices: ["Hulk", "Thor", "Hawkeye", "Spiderman"],
        answer: "Spiderman"
    },
    {
        question: "Which super villain was in search of the infinity stones?",
        choices: ["Dr Doom", "Octopus", "The Mandarin", "Thanos"],
        answer: "Thanos"
    },
    {
        question: "Which marvel character is known to break the forth wall?",
        choices: ["Dare Devil", "Iron Fist", "Punisher", "Deadpool"],
        answer: "Deadpool"
    }
]
function startQuiz () {



}
var countDown = document.querySelector("#timer");
document.addEventListener ("click", startQuiz)