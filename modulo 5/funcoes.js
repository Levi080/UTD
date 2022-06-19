/*se voce quiser consultar algo como o html de algum objeto (innerHTML), você realiza a consulta aqui e elas
serão exibidas em Inspecionar o código > Console. */

//Com o Console.log ele realiza consulta retornando algo.
console.log(log[4].innerHTML);

/************************************* Adicionando um elemento novo **************************************/
//variável "tag" recebe o objeto "ul".
let tag = document.getElementsByTagName('ul'); 

//A variável "novoElemento" irá receber um novo "li" que acabou de ser criado. 
let novoElemento = document.createElement('li');

//"novoElemento" irá receber innerText, ou seja, um texto.
novoElemento.innerText = 'Ruby';

//a variável "tag na posição [0]" irá receber um filho que é "novo elemento".
tag[0].appendChild(novoElemento);


/******************************** Novas implementações após o ECMAScript6 ********************************/

/*
1. Adição das variáves let e const (sempre usar elas).
2. Outra forma de concatenar:*/

   let nome = "Ana", idade = 20, cidade = "Rio";
   Console.log(`Nome: ${nome} Idade: ${idade} Cidade: ${cidade}`);

//3. Uso das Arrow function, que nada mais é que outra forma de criar uma função:

   

   //forma tradicional 
   function soma (x, y){
       return x + y;
   }

   //ArrowFunction
   let soma2 = (x, y) => x + y;

   console.log(soma (10,15));
   console.log(soma2(10,15));
   
/************************************ Progamação assícrona (Uso do Promisse) *****************************************/
/*Todo script segue a sequência, mas com o Promisse é diferente, ele continua a execução do programa enquanto ele é processado, 
ou seja, neste caso o primeiro resultado será o último console.log na linha 62.*/
function efetuarPagamento(valordacompra) {

    if (valordacompra <= saldo)
      return Promise.resolve("Compra autorizada!");
    else
      return Promise.reject("Trasação interrompida! Saldo insuficiente.");
    
}
let saldo = 100

efetuarPagamento(80)
    .then(result => console.log(result))
    .catch(error => console.log(error));

console.log("Processando...")

/*faça uma function normal, usando o Promise, caso a condição seja verdadeira ele retornará o "then"
caso seja falso ele retornará "cath". LEMBRANDO que enquanto que a "function" que tem o "Promisse" 
estiver processando, o resto do código será executado.*/




