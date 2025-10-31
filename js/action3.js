var tela = document.getElementById("box");
var pontos = document.getElementById("pontos");

var num_1, num_2, resp, x;
var score = 0, acertos = 0, erros = 0;
var animacao = false;

gera_conta();

let tempoTotal = 100; // tempo total em segundos
let tempoRestante = tempoTotal;

const barra = document.getElementById("bar");

const intervalo = setInterval(() => {
  tempoRestante -= 0.1; // diminui a cada 100ms
  let largura = (tempoRestante / tempoTotal) * 100;
  barra.style.width = largura + "%";

  if (tempoRestante <= 0) {
    clearInterval(intervalo);
    barra.style.width = "0%";
    localStorage.setItem("score", score);
    localStorage.setItem("acertos", acertos);
    localStorage.setItem("erros", erros);
    window.location.href = "game_over.html";
    }
}, 100);

function atualiza_tela(){
    let operacao = num_1+" + "+num_2+" = ";
    return operacao; 
}

function gera_conta(){
    x="";
    num_1 = Math.floor(Math.random() * 10) + 1;
    num_2 = Math.floor(Math.random() * 10) + 1;
    resp = num_1 + num_2;
    tela.innerHTML = atualiza_tela();
}

function add_number(number){
    if(animacao != true){
        x += number;
        tela.innerHTML = atualiza_tela() + x;
    }
}

function apagar(){
    if(animacao != true){
        x = ""
        tela.innerHTML = atualiza_tela() + x;
    }
}

function calcular(){
    if(animacao != true){
        animacao = true;
        if(x == resp){
            score += 15;
            acertos++;
            acerto();
            pontos.innerHTML = "SCORE: "+score;
        }else{
            erros++;
            erro();
        }
    }
}

function acerto(){

    tela.classList.add("acerto");
    
    setTimeout(() => {
        tela.classList.remove("acerto");
        gera_conta();
        animacao = false;
    }, 1000);

}

function erro(){

    tela.classList.add("erro");
    
    setTimeout(() => {
        tela.classList.remove("erro");
        gera_conta();
        animacao = false;
    }, 1000);

}

function restart_game(){
    location.reload();
}