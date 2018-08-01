let answers = ["YES", "NO", "Ask me later."];
let button = $("input.button");
let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

//random answer
function chooseAnswer(){
    let chosenAnswer = answers[Math.floor(Math.random() * answers.length)];
    console.log(chosenAnswer);
//display the answer need to be in choose answer to have the same chosenAnswer
    function displayAnswer(){
        if (chosenAnswer=="YES"){
            $("#answer").html("YES");
            return;
        }
        else if (chosenAnswer=="NO"){
            $("#answer").html("NO");     
            return;
        }   
        else {
            $("#answer").html("Later");
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
    console.log("This is a proper question");
    chooseAnswer();
    return;
    }
    else {
    // will appear big on screen with a fadeout
    console.log("Ask me something with a '?'");
    return;
    }
}



//gives answer
function answer(){
    checkQuestion();
};