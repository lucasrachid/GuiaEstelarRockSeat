//Funcion expression
//Function anonymous
const sum = function (number1, number2) /*Parameters */ {
  let total = number1 + number2;
  return total;
};

sum(2, 4); // Arguments - argumentos

sum(90, 100);

const imc = function (peso, altura) {
  console.log(peso / (altura * altura));
};

imc(103, 1.71);

let number1 = 34;
let number2 = 25;

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);
