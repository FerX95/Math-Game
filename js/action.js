var div_box = document.getElementById("box");
var div_acerto = document.getElementById("acerto");
var div_erro = document.getElementById("erro");

var num_1, num_2, resp, x;
var acerto = 0, erro = 0;  

gera_conta();

function gera_conta(){
    x = "";
    div_box.style.color = "#f0f8ff";
    div_box.style.borderColor = "#f0f8ff";
    num_1 = Math.floor(Math.random() * 10) + 1;
    num_2 = Math.floor(Math.random() * 10) + 1;
    resp = num_1*num_2;
    div_box.innerHTML = num_1+" x "+num_2+" = ";
    div_acerto.innerHTML = acerto;
    div_erro.innerHTML = erro;
}

function add_number(number){
    x += number;
    div_box.innerHTML = num_1+" x "+num_2+" = "+x;
}

function limpa_num(){
    x = "";
    div_box.innerHTML = num_1+" x "+num_2+" = "+x;
}

function verifica_resp(){
    if(x == resp){
        div_box.style.color = "#53ff1f";
        div_box.style.borderColor = "#53ff1f"
        acerto++;
    }else{
        div_box.style.color = "#ff604b";
        div_box.style.borderColor = "#ff604b";
        erro++;
    }
    setTimeout(gera_conta, 500);
}