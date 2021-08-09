/*
    Prototype - prototipos - Linguagem prototipada

    * Prototype-based language
    * Prototype chain (Cadeia de protótipos)
    * __proto__
*/

// JS é uma linguagem baseada em protótipos (prototype)

/*
    Type conversion (typecasting) vs Type Coersion (Coerção - Força algo)
    * Alteração de um tipo de dado para outro tipo = Type Conversion
    * Java script fazendo implicitamente essa troca = Type Coersion
*/

//console.log(`9` + 5);
//O Java Script leu o 9 string e coercitivamente, transformou o 5 em string também, para que fosse feito a concatenação, sem que seu programa apresente erro.

// console.log(Number(`9`) + 5);
// Utilizando de uma função, pode se transformar uma string em um number, logo é uma conversão.

// Manipulando Strings e números
// Transformar String em Número e número em string

let string = "123";
console.log(Number(string));

let number = 321;
console.log(String(number));

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo";
console.log(word.length);

let number2 = 1234;
console.log(String(number2).length);

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number3 = 345.33452345;
console.log(number3.toFixed(2).replace(".", ","));
//Quando uma função é atrelada a um objeto, nós chamamos ela de método

// Transforme letras maiúsculas em minúsculas e vice versa.
let word2 = `Programar é muito bacana!`;
console.log(word2.toUpperCase());
console.log(word2.toLowerCase());

// Separar um texto que contenha espaços, em um novo array, onde cada texto é uma posição do Array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _.
let phrase = `Eu quero viver o amor!`;
let myArray = phrase.split(" ");
console.log(myArray);
let phraseWithUnderScore = myArray.join("_");
console.log(phraseWithUnderScore);

// Verificar se o texto contém a palavra Amor
let phrase2 = `Eu quero viver o amor!`;
console.log(phrase2.includes("amor")); // Case sensitive

// Criar array com construtor
let myArray3 = ["a", "b", "c"];
console.log(myArray3);

let myArray4 = new Array("a", "b", "c"); // Ele irá criar os objetos A B e C
console.log(myArray4);

myArray4 = new Array(10); // Irá criar 10 espaços vazio
console.log(myArray4);

// Contar elementos da array
console.log([`a`, `b`, `c`]);
// Dentro de uma array, pode-se colocar qualquer tipo de dado, desde objeto, funções etc.

console.log(
  [
    `a`,
    { type: `array` },
    function () {
      return `alo`;
    },
  ][2]
);

console.log(
  [
    `a`,
    { type: `array` },
    function () {
      return `alo`;
    },
  ].length
);

// Transformar uma cadeia de caracteres em elementos de um array
let word3 = "Manipulação";
console.log(Array.from(word3));
// Cada caracterer da variável word3, virou um elemento da array.

// Manipulando Arrays
let techs = ["HTML", "CSS", "JS"];
// Adicionar um item no fim
techs.push("NodeJS");
// Adicionar no inicio
techs.unshift("SQL");
// Remover do fim
techs.pop();
// Remover do inicio
techs.shift();
// Pegar somente alguns elementos da array
// Remover 1 ou mais itens em qualquer posição do array
// Encontrar a posição de um elemento no array

console.log(techs);
