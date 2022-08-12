var submitBtn = document.getElementById("submit-btn");
var subscribeEmail = document.getElementById("email");
var errorMsg = document.getElementById("errorMsg");

submitBtn.addEventListener('click', function(e){
    e.preventDefault();

    if(subscribeEmail.value === ""){
        errorMsg.innerHTML = "Please fill in your email";
    } else{
        subscribeEmail.value = "";
        errorMsg.innerHTML = "Your email has been received";

    }

    setTimeout(function(){
        errorMsg.innerHTML = "";
    }, 2000)
})





// get a quote form validation

var userNameQuote = document.getElementById("username-quote")
var emailQuote = document.getElementById("email-quote")
var messageQuote = document.getElementById("message-quote")
var submitQuoteBtn = document.getElementById("submit-quote")

submitQuoteBtn.addEventListener('click', function (e){
    e.preventDefault();

    if(userNameQuote.value === ""|| emailQuote.value === ""|| messageQuote.value === ""){
quoteErrorMsg.innerHTML = "Please fill in all inputs"
    }
})
