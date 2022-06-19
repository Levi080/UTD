let numero1 = 10;
let numero2 = 20;

const painel = document.getElementById('painel');

//função com parâmetros e retorno
function soma(numero1, numero2) {
    return numero1 + numero2;    
}

//Função sem parâmetro e sem retorno
function endereco() {
    return "Castelo de Castro 100";
}

texto = endereco();

const resultado = document.createTextNode(texto);
painel.appendChild(resultado);