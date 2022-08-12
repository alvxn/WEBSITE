document.write("<p>I am a paragrapgh</p>")

// alert("WELCOME TO THE JAVASCRIPT WEBINAR")

// confirm("ARE YOU SURE?")

// prompt("PLEASE ENTER YOUR NAME")

//console.log("WE ARE LEARNING JAVASCRIPT")

var title = document.querySelector("h1");

title.innerHTML = "THE LADDER BACK DOWN";

var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var sum = parseInt(num1) + parseInt(num2);

title.innerHTML = "Sum = " + sum;