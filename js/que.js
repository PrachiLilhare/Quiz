//Start Quiz 

let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: " The basic difference between JavaScript and Java is _________?",
    answer: " Functions are values, and there is no hard distinction between methods and fields",
    options: [
      "There is no difference",
      "Functions are considered as fields",
      "Variables are specific",
      " Functions are values, and there is no hard distinction between methods and fields"
    ]
  },
  {
    id: 5,
    question: "The property of JSON() method is __________?",
    answer: "it is invoked automatically by the JSON.stringify() method",
    options: [
      "it can be invoked manually as object.JSON()",
      "it is invoked automatically by the JSON.stringify() method",
      "it will be automatically invoked by the compiler",
      "None of these"
    ]
  },
  
  {
    id: 6,
    question: "The behaviour of the instances present of a class inside a method is defined by __________?",
    answer: "Classes",
    options: [
      "Method",
      "Classes",
      "Interfaces",
      "Classes and Interfaces"
    ]
  },
  {
    id: 7,
    question: "What will be the output of the following JavaScript code? var o = new F(); o.constructor === F",
    answer: "true",
    options: [
      "false",
      "true",
      "1",
      "0"
    ]
  },
  {
    id: 8,
    question: " If A is the superclass and B is the subclass, then subclass inheriting the superclass can be represented as ?",
    answer: "B.prototype=inherit(A);",
    options: [
      "B=inherit(A);",
      "B=A.inherit();",
      "B.prototype=inherit(A);",
      "B.prototype=inherit(A.prototype);"
    ]
  },
  {
    id: 9,
    question: " What is the prototype represents in the following JavaScript code snippet? function f() {};",
    answer: "A custom constructor",
    options: [
      "Function f",
      "A custom constructor",
      "Prototype of a function",
      "Not valid"
    ]
  },
  {
    id: 10,
    question: "The basic purpose of the toLocaleString() is to _________?",
    answer: "it is invoked automatically by the JSON.stringify() method",
    options: [
      "it can be invoked manually as object.JSON()",
      "it is invoked automatically by the JSON.stringify() method",
      "it will be automatically invoked by the compiler",
      "None of these"
    ]
  },
  {
    id: 11,
    question: " What kind of scoping does JavaScript use?",
    answer: "Lexical",
    options: [
      "Literal",
      "Lexical",
      "Segmental",
      "Sequential"
    ]
  },
  {
    id: 12,
    question: "What must be done in order to implement Lexical Scoping?",
    answer: "Reference the current scope chain",
    options: [
      "Get the object",
      "Dereference the current scope chain",
      "Reference the current scope chain",
      "Return the value"
    ]
  },
  {
    id: 13,
    question: "What is closure?",
    answer: " Both Function objects and Scope where function’s variables are resolved",
    options: [
      "Function objects",
      "Scope where function’s variables are resolved",
      " Both Function objects and Scope where function’s variables are resolved",
      "Function return value"
    ]
  },
  {
    id: 14,
    question: "What is the opposite approach to the lexical scoping?",
    answer: "Dynamic scoping",
    options: [
      "Literal scoping",
      "Static scoping",
      "Dynamic scoping",
      "Generic scoping"
    ]
  },
  {
    id: 15,
    question: "What is the purpose of the dynamic scoping?",
    answer: "Variables can be declared outside the scope",
    options: [
      "Variables can be declared outside the scope",
      "Variables must be declared outside the scope",
      "Variables cannot be declared outside the scope",
      "Variable cannot be declared within the function"
    ]
  },
  {
    id: 16,
    question: "What will be the equivalent statement of the following JavaScript statement? var o = new Object();",
    answer: "var o= new Object;",
    options: [
      "var o = Object();",
      "var o;",
      "var o= new Object;",
      "Object o=new Object();"
    ]
  },
  {
    id: 17,
    question: "JavaScript Code can be called by using _________",
    answer: "Function/Method",
    options: [
      "RMI",
      "Triggering Event",
      "Preprocessor",
      "Function/Method"
    ]
  },
  {
    id: 18,
    question: "The type of a variable that is volatile is _______________",
    answer: "Mutable variable",
    options: [
      "Volatile variable",
      "Mutable variable",
      "Immutable variable",
      "Dynamic variable"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

function next() {

  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
//End Quiz