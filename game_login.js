function addUser(){
    player1= document.getElementById("player1_name_input").value;
    player2= document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1);
    localStorage.setItem("player2_name", player2);

    window.location="game_page.html";
}

player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn: "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+ player2_name;

function send() {
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("wordsin lower case= "+ word);

    charAt1=word.charAt(1);
    mid=Math.floor(word.length/2);
    charAtMid=word.charAt(mid);
    charAtLast=word.charAt(word.length-1);
    console.log(charAt1+ ", " + charAtMid + " and " + charAtLast);

    removeCharAt1=word.replace(charAt1,"_");
    removeCharAtMid=removeCharAt1.replace(charAtMid,"_");
    removeCharAtLast=removeCharAtMid.replace(charAtLast,"_");

    questionWord="<h4 id='word_display'> Q. "+ removeCharAtLast + "</h4>";
    input="<br> Answer: <input type='text' id='input_check_box'>";
    button="<br><br><button class='btn btn-info' onclick='check()'> Check </button>";

    document.getElementById("output").innerHTML=questionWord + input + button;
    document.getElementById("word").value="";
}