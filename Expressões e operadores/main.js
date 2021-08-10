/* Expressões e Operadores

    -   Expressions
    -   Operators
        Binary
        Unary
        Ternary
*/

// Expressão é qualquer linha de código que resolve algo no Java Script

let number = 1;

//Função Auto executável - Função que irá executar imediatamente
(function () {
  console.log("Alo");
})();

// Operador Binário - Binary
console.log(number + 1);

// Operadores Unários - Unary (que possui apenas um elemento)
console.log(++number); // ++ incremento -- decremento
console.log(typeof number);

const person = {
  nome: "Rachid",
  age: 25,
};

delete person.age;
console.log(person);

// Operador Ternário
console.log(true ? "alo" : "nada");

/*
    new
    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String("Rachid");
name.surName = "Martins";
let age = new Number(25);
console.log(name.surName, age);

let data = new Date(`2021-08-09`);
console.log(data);
