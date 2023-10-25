var nome = "John";
var idade = 30;

console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");

if (idade >= 18) {
    console.log("Eu sou maior de idade.");
} else {
    console.log("Eu sou menor de idade.");
}

for (var i = 0; i < 5; i++) {
    console.log("Contagem: " + i);
}

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Alice");
saudacao("Bob");

var frutas = ["Maçã", "Banana", "Laranja"];
console.log("Minha fruta favorita é " + frutas[0]);

var pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "São Paulo"
};

console.log(pessoa.nome + " tem " + pessoa.idade + " anos e mora em " + pessoa.cidade);