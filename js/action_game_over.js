var score = document.getElementById("i_score");
var acertos = document.getElementById("i_acertos");
var erros = document.getElementById("i_erros")

score.innerHTML = "SCORE: "+localStorage.getItem("score");
acertos.innerHTML = "ACERTOS: "+localStorage.getItem("acertos");
erros.innerHTML = "ERROS: "+localStorage.getItem("erros");