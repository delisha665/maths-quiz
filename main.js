function login() {
    player1_login=document.getElementById("player1_login").value;
player2_login=document.getElementById("player2_login").value;
localStorage.setItem("p1",player1_login);
localStorage.setItem("p2",player2_login);
window.location="main.html";
}