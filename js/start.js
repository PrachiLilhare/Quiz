// Start Quiz 
function submitForm(e) {
    e.preventDefault();
    var formEle1 = document.getElementById("myForm").elements[0].value;
    //console.log(formEle1);
    sessionStorage.setItem("name",formEle1);
    var formEle2 = document.getElementById("myForm").elements[1].value;
    //console.log(formEle2);    
    sessionStorage.setItem("email",formEle2);

    var quizEle = document.getElementById("Quiz");
    quizEle.style.display="block";
    location.href = "#Quiz";

}

//Click on logo of subjects
var javaEle = document.getElementById("java");
//console.log(javaEle);
var javascriptEle = document.getElementById("javascript");
var osEle = document.getElementById("os");
var cnEle = document.getElementById("cn");


javaEle.addEventListener('click',myFunc);
javascriptEle.addEventListener('click',myFunc);
osEle.addEventListener('click',myFunc);
cnEle.addEventListener('click',myFunc);

function myFunc(){
    alert("Updating Soon...");
}
