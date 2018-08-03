let answers = ["YES", "NO", "Ask me later."];
let button = $("input.button");
let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

//if there has been Ask me Later answers create a 30 sec timer for each question
// function setTimer(){

// }

//add to ask later list
function listLater(){
    $("#later-list").append("<li>"+ $('#question').val()+ "</li>");
    return;
}

//make former answer disappear when clicking the question input
function clearScreen(){
    if($("#answer").length>0){
        $("#answer").fadeOut(2000);
        $("#attention").fadeOut(2000);
    }
}

//randomise answer
function chooseAnswer(){
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
//display the answer !need to be in choose answer to have the same chosenAnswer
    function displayAnswer(){
        $("#answer").html(chosenAnswer);
        $("#answer").fadeIn("slow");
        if (chosenAnswer=="Ask me later."){
            listLater();
            return;
        }
        return;
    }
    displayAnswer()
    return;
}

//check if this is a proper question
//! ADD check if the question is part of the ASK LATER list
function checkQuestion(){
    if ($("#question").val().includes("?")){
        chooseAnswer();
        return;
    }
    else {
        // will appear big on screen with a fadeout
        $("#attention").html("Ask me something with a '?'");
        $("#attention").fadeIn("slow");
        return;
    }
}

//gives answer
function answer(){
    checkQuestion();
};

$(document).ready(function(){
    $("#question").keypress(function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
        // Cancel the default action, of enter key reloading page
            event.preventDefault();
        // Trigger the button element with a click
            $("#submit-btn").click();
        }
    });
})