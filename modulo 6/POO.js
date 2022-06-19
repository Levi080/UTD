/******************* Criando objeto de forma tradicional, usando construtores ******************/

function Person () {
    this.nome = '';
    this.idade = '';
}

let p1 = new Person();//objeto no caso será o p1, agora ele terá acesso a todos os atributos da function Person.

p1.nome = "Joana";
p1.idade = 20;

console.log(p1.nome);
console.log(p1.idade);

/****************** Agora vamos criar objetos a partir do método liberal **************************/
//Diferente da método anterior, não vamos criar uma function, e sim uma variável e adicionar os atributos nelas.

//let aluno = {
 //   nome : "anita",
 //   idade : 22,
//    curso : "Engenharia Civil"
//}

//console.log(aluno.nome);
///console.log(aluno.idade);
//console.log(aluno.curso);
//console.log(aluno.turno);

/*se eu quiser adicionar um atributo no meu objeto: depois do escopo da variável let, na útima 
chave, vc adiciona da maneira seguinte, mas tem que ser após o escopo da variável.*/
//aluno.turno = 'noite';

/******************* Desestruturando: acessar apenas alguns dos atributos da variável ******************/

//let{nome, idade} = aluno;

//console.log(nome);
//console.log(idade);

/*********************************** Como usar o GET e SET *****************************************/
//Get ele retorna algo, o Set realiza alterações, como neste caso a variável nome foi alterada de anita p/ lara.
let aluno = {
    nome : "anita",
    idade : 22,
    curso : "Engenharia Civil",

    get saidaNome() {
        return this.nome;
    },

    set mudarNome(novonome) {
        this.nome = novonome;
    }

}
aluno.mudarNome = "Lara";

console.log(aluno.nome);

/****************** Herança: Exemplo de herança, uma class herda os métodos de outras classes("usando extends na classe que vai herda").*************/

class Conta{

    constructor(){
        this.saldo = 0;
    }

    saque(valor){
        if(valor > this.saldo)
          console.log('valor insulficiente!');
        else
          this.saldo = this.saldo - valor;
    }

    deposito(valor){
        this.saldo = this.saldo + valor;
    }

}

class ContaPoupanca extends Conta {

    redimento(taxa1){
        this.saldo += (this.saldo / 100) * taxa1;
    }
}

class ContaCorrente extends Conta {

    manutencao(taxa2){
        this.saldo -= (this.saldo / 100) * taxa2;
    }
}

let c1 = new ContaPoupanca;

c1.deposito (500);
c1.redimento (23);

console.log(c1);
/* As classes "ContaPoupanca" e "ContaCorrente" herdaram os métodos da class "Conta",
depois foi estanciado para ciar o objeto c1, para testar os métodos é só adiconar
valores aos parâmetros como nas linhas 98 e 99. */