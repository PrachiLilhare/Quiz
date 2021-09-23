//User Info
let user_name = sessionStorage.getItem("name");
let user_email = sessionStorage.getItem("email");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.email").innerHTML = user_email;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;


//Button Click 
var back_button = document.getElementById("backButton");
//console.log(back_button);

back_button.addEventListener('click',myBackButton);
function myBackButton(){
    location.href = "index.html";
}

