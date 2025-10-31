var tela = document.getElementById("box");
var pontos = document.getElementById("pontos");

var num_1, num_2, resp, x;
var score = 0, acertos = 0, erros = 0;

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
    alert("Acabou! SCORE FINAL: "+score);
    alert("Acertos: "+acertos+", Erros: "+erros);
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
    x += number;
    tela.innerHTML = atualiza_tela() + x;
}

function apagar(){
    x = ""
    tela.innerHTML = atualiza_tela() + x;
}

function calcular(){
    if(x == resp){
        score += 15;
        acertos++;
        pontos.innerHTML = "SCORE: "+score;
    }else{
        erros++;
        console.log("Errou!");
    }
    setTimeout(gera_conta, 500);
}