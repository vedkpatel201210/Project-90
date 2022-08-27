var questionPlayerName = "";
var answerPlayerName = "";
function loadPlayerName(){
    document.getElementById("player1_name").innerHTML = localStorage.getItem("player1_name") + " : ";
    document.getElementById("player2_name").innerHTML = localStorage.getItem("player2_name") + " : ";
    document.getElementById("player_question").innerHTML = "Question Turn - " + localStorage.getItem("player1_name");
    questionPlayerName = localStorage.getItem("player1_name");
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + localStorage.getItem("player2_name");    
    answerPlayerName = localStorage.getItem("player2_name");
}

function send(){
    document.getElementById("question").style.display = "none";
    document.getElementById("answer").style.display = "inline";
}

function check(){
    document.getElementById("question").style.display = "inline";
    document.getElementById("answer").style.display = "none";
    var localQuestionPlayerName = questionPlayerName;
    questionPlayerName = answerPlayerName;
    answerPlayerName = localQuestionPlayerName;
    document.getElementById("player_question").innerHTML = "Question Turn - " + questionPlayerName;
    questionPlayerName = localStorage.getItem("player1_name");
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + answerPlayerName;    
}