var tela = document.getElementById("box");
var pontos = document.getElementById("pontos");

var num_1, num_2, resp, x;
var operacao = "+";
var opDisplay = "+";

var score = 0, acertos = 0, erros = 0;
var animacao = false;

gera_conta();

let tempoTotal = 100;
let tempoRestante = tempoTotal;

const barra = document.getElementById("bar");

const intervalo = setInterval(() => {
  tempoRestante -= 0.1;
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
  let operacaoTxt = num_1 + " " + opDisplay + " " + num_2 + " = ";
  return operacaoTxt; 
}

function gera_conta(){
  x = "";

  // 0 = + | 1 = - | 2 = * | 3 = ÷
  const opIndex = Math.floor(Math.random() * 4);

  switch (opIndex) {
    case 0: // Adição
      operacao = "+";
      opDisplay = "+";
      num_1 = Math.floor(Math.random() * 10) + 1;
      num_2 = Math.floor(Math.random() * 10) + 1;
      resp = num_1 + num_2;
      break;

    case 1: // Subtração (sem resultado negativo)
      operacao = "-";
      opDisplay = "-";
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      num_1 = Math.max(a, b);
      num_2 = Math.min(a, b);
      resp = num_1 - num_2;
      break;

    case 2: // Multiplicação
      operacao = "*";
      opDisplay = "×";
      num_1 = Math.floor(Math.random() * 10) + 1;
      num_2 = Math.floor(Math.random() * 10) + 1;
      resp = num_1 * num_2;
      break;

    case 3: // Divisão (resultado inteiro)
      operacao = "/";
      opDisplay = "÷";
      num_2 = Math.floor(Math.random() * 9) + 1; // divisor de 1 a 9
      resp = Math.floor(Math.random() * 10) + 1; // resultado de 1 a 10
      num_1 = num_2 * resp; // garante divisão exata
      break;
  }

  tela.innerHTML = atualiza_tela();
}

function add_number(number){
  if(!animacao){
    x += number;
    tela.innerHTML = atualiza_tela() + x;
  }
}

function apagar(){
  if(!animacao){
    x = "";
    tela.innerHTML = atualiza_tela() + x;
  }
}

function calcular(){
  if(!animacao){
    animacao = true;
    if(parseInt(x, 10) === resp){
      score += 15;
      acertos++;
      acerto();
      pontos.innerHTML = "SCORE: " + score;
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
