const quizQB = [
    {
        question: "Q1 : What is the full form of HTML?",
        a: "Hello To my Land",
        b: "Hey Text Markup Language",
        c: "Hyper text Makeup Language",
        d: "Hyper text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2 : What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },
    {
        question: "Q3 : What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Transfer Protocol",
        c: "Hey text Protocol",
        d: "Hypertext Test Protocol",
        ans: "ans2"
    },
    {
        question: "Q4 : What is the full form of JS?",
        a: "Javascript",
        b: "JavaS",
        c: "JavaSuper",
        d: "Jordenshop",
        ans: "ans1"
    },
    {
        question: "Q5 : What is the full form of HTML?",
        a: "Hello To my Land",
        b: "Hey Text Markup Language",
        c: "Hyper text Makeup Language",
        d: "Hyper text Markup Language",
        ans: "ans4"
    },
];

const question = document.querySelector('.heading');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next-button');

const showScore = document.querySelector('#showScore');

const answers = document.querySelectorAll('.answer');

//console.log(showScore);
function startQuiz(){
    // console.log(document.getElementById("questionCard"));
    // console.log(document.getElementsByTagName("body").style.overflow="scroll");
    if(document.getElementById("questionCard").style.display==="none"){
        document.getElementById("questionCard").style.display="block";
    }
}

let questionCount = 0;
var score = 0;
const loadQuestion = () =>{
    const quesList = quizQB[questionCount];
    question.innerText = quesList.question;

    option1.innerText = quesList.a;
    option2.innerText = quesList.b;
    option3.innerText = quesList.c;
    option4.innerText = quesList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElement) => {
        if(curAnsElement.checked){
            answer = curAnsElement.id;
        }        
    })
    return answer;

}

next.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if(checkAnswer === quizQB[questionCount].ans){
        score+=2;        
    };
    questionCount++;
    if(questionCount < quizQB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = "Your Score is : " + score + " Out of 10";
    }
});

    