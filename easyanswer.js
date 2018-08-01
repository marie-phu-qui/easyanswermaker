let answers = ["YES", "NO", "Ask me later."];
let button = $("input.button");

//random answer
function chooseAnswer() {
    console.log(answers[Math.floor(Math.random() * answers.length)]);
    return;
}

//check if this is a proper question
function checkQuestion() {
    if (document.getElementById("question").value.includes("?")){
    console.log("This is a proper question");
    chooseAnswer();
    return;
    }
    else {
    console.log("Ask me something with a '?'");
    return;
    }
}



//gives answer
function answer(){
    checkQuestion();
};