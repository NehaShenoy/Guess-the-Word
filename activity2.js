function back(){
    window.location="activity_1.html";
}

function getscore(){
    score= localStorage.getItem("score");
    document.getElementById("score").innerHTML="score: "+ score;
}