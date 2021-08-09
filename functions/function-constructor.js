/* 
    Function() constructor

        * Expressão new
        * Criar um novo objeto
        * This Keyword  
*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}

const rachid = new Person("Rachid");
const max = new Person("Max");

console.log(rachid.walk());
console.log(max.name);

// Deve se utilizar a expressão NEW em uma constante, junto com a função
// Deve se instanciar os objetos com a palavra THIS
// Quando criar uma função construtora, utilizar a primeira letra do nome da função como MAIÚSCULA, como uma boa prática.
