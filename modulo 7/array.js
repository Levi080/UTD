let lista = [];

lista[0] = "maça";
lista[1] = "pão";
lista[2] = "suco";
lista[3] = "biscoito";
lista[4] = "carne";

lista.push("uva"); //Adiciona um item no final do array.
lista.pop();      //Retira um item no final do array.

lista.unshift("café"); //Adiciona um item no começo do array.
lista.shift();        //Retira um item no começo do array.

lista.splice(); // O splice tem o poder de substituir, retirar e adicionar itens no array.
lista.splice(3, "morango") // Substituindo o valor do índice [3] para morango.
lista.splice(3); //retirando o índice 3.

console.log(lista);
