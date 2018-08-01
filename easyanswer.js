let answers = ["YES", "NO", "Ask me later."];
let button = $("input.button");
let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

//make former answer disappear when clicking the question input
function clearScreen(){
    if($("#answer").length>0){
        $("#answer").fadeOut(2000);
        $("#attention").fadeOut(2000);
    }
}

//random answer
function chooseAnswer(){
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
    console.log(chosenAnswer);
//display the answer need to be in choose answer to have the same chosenAnswer
    function displayAnswer(){
        if (chosenAnswer=="YES"){
            $("#answer").html("YES");
            $("#answer").fadeIn("slow");
            return;
        }
        else if (chosenAnswer=="NO"){
            $("#answer").html("NO"); 
            $("#answer").fadeIn("slow");
            return;
        }   
        else {
            $("#answer").html("Ask me later.");
            $("#answer").fadeIn("slow");
            return;
        }
        console.log(chosenAnswer);
    }
    displayAnswer()
    return;
}

//check if this is a proper question
function checkQuestion(){
    if (document.getElementById("question").value.includes("?")){
    chooseAnswer();
    return;
    }
    else {
    // will appear big on screen with a fadeout
    $("#attention").html("Ask me something with a '?'");
    $("#attention").fadeIn("slow");

    console.log("Ask me something with a '?'");

    return;
    }
}

//gives answer
function answer(){
    checkQuestion();
};