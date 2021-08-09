//Declarar uma variável
var nomeDaPessoa;

//Declarar uma variável e atribuir um valor a ela
var name2 = "Lucas";

//Atribuir um valor a variável já criada
nomeDaPessoa = "Lucas";
console.log(nomeDaPessoa);

// let age = 25;
// let isHuman = true;

//Declaracoes agrupadas
let age, isHuman;
age = 25;
isHuman = true;

//Multiplos argumentos
console.log(nomeDaPessoa, age, isHuman);

//Concatenacao
console.log("Lucas " + "Rachid");

//string mais variáveis + interpolacao com template literals
console.log(
  `O nome dele é ${nomeDaPessoa}, e ele tem ${age}, ele é humano ? ${isHuman}`
);
