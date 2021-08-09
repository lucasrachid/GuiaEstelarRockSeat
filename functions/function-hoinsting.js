// Function Hoisting
//Dessa forma, o javascript irá ler o código COMO SE a função estivesse sendo invocada antes da execução
sayMyName();

function sayMyName() {
  /*Função do tipo STATEMENT - DECLARAÇÃO. */
  console.log(`Rachid`);
}

// Porém, se você criar uma variável, com uma função anônima, ele não irá fazer o hoisting, como no exemplo abaixo
sayMyName2();

const sayMyName = function () {
  console.log(`Silva`);
};

// Hoisting, seria a ELEVACAO, como se o Java script, ELEVASSE aquele bloco de codigo, antes da invocação de alguma variável
