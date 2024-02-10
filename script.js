// shows a message when clicked the submit button

function submitButton(){
  document.getElementById("response").innerHTML = "Your response was submitted!"
  document.querySelector(".submitbutton").style.color = "darkgreen"
}

// asks the user if he agrees to receive emails on the email that he is about to submit

function emailInput(){
var email = prompt("Do you agree do receive notifications in your email?").innerHTML;
document.getElementById("emailcase").innerHTML = email
}

// will measure the age of the applicant and see if is old enough to join the program

var age = document.getElementById("age").innerHTML;
var ageAnswer = document.getElementById("ageAnswer").innerHTML;

function inputAge(){
var theAge = prompt("What is your age?");
  if (theAge <= 17){
alert("Sorry you are not old enough to join our program")  }
}


// will show the name of the person + a text saying that the subscription was succesful


var fname = document.getElementById("fname")
var gurizao = document.getElementById("gurizao");

function submitButtonTwo(){
var fnameagain = prompt("What is your name?0");
document.getElementById("oie").innerHTML = fnameagain + ", your subscription was succesful!"
}
