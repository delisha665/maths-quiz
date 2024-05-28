player_1=localStorage.getItem("p1");
player_2=localStorage.getItem("p2");
Question_turn=player_1;
Answer_turn=player_2;
p1_score=0;
p2_score=0;
document.getElementById("question_turn").innerHTML="Question turn : "+ Question_turn;
document.getElementById("answer_turn").innerHTML="Answer turn : "+ Answer_turn;
document.getElementById("p1_name").innerHTML=player_1;
document.getElementById("p2_name").innerHTML=player_2;
function submit() {
    Number_1=parseInt(document.getElementById("number1").value);
    Number_2=parseInt(document.getElementById("number2").value);
   operation=document.getElementById("sign").value;
    h4_html="<br> <h4>Q. "+Number_1+" "+operation+" "+Number_2;
    input_html="<br> <br><input id='Answer' placeholder='Enter the answer here'>"
    button_html="<br> <br><button onclick='check()' class='btn btn-warning'>Check</button>"
    document.getElementById("output").innerHTML=h4_html+input_html+button_html;
    if (operation=="*"){
        Answer=Number_1*Number_2;
    }
    else if (operation=="+"){
        Answer=Number_1+Number_2;
    }
    else if (operation=="-"){
        Answer=Number_1-Number_2;
    }
    else if (operation=="/"){
        Answer=Number_1/Number_2;
    }
    else {
        document.getElementById("output").innerHTML="please enter a valid operator";
    }
}
function check() {
    input=document.getElementById("Answer").value;
    if(Answer==input){
        if (Answer_turn == player_1) {
            p1_score++
        }
        else if (Answer_turn == player_2) {
            p2_score++;
    }
}
document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;
if (Question_turn == player_1) {
    Question_turn = player_2;
    Answer_turn = player_1;
}
else if (Question_turn == player_2) {
    Question_turn = player_1;
    Answer_turn = player_2;
}
document.getElementById("question_turn").innerHTML = "Question turn : " + Question_turn;
document.getElementById("answer_turn").innerHTML = "Answer turn : " + Answer_turn;
document.getElementById("output").innerHTML=" ";
}
