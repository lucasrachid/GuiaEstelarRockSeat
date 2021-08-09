// *Escopo determina a visibilidade de alguma variável no JS

// #Block Statement - Declaração de bloco.

// O bloco, criará um novo escopo. Chamamos de block-scoped

// GLOBAL - Tudo que está dentro do Script.
// LOCAL - Tudo que está dentro de um bloco.

console.log(name);

{
  var name = "Lucas";
}

// VAR o escopo é global e também local, ou seja, mesmo quando ele estiver em um bloco, no final do código, se voce chamar ele algumas linha antes, o JS irá mostrar que a variável foi criada, porém ainda não está definida, ou seja, a variável que voce está tentando puxar, existe em algum lugar do código, porém após aquela declaracao.
// Esse fenomeno se chama hoisting (elevacao).

// let e const, sao variaveis locais e só funcionam dentro do escopo (bloco) onde foi criado.

// 1º Exemplo
{
  let age = 25;
  console.log(age);
}

// 2º Exemplo
let telefone = 3422;

{
  telefone = 3533;
  console.log(telefone);
}

// 1º Exemplo
const meuDinheiro = "$35";
console.log(meuDinheiro);

//2º Exemplo
const meuDinheiro2 = "$40";
{
  console.log(meuDinheiro2);
}

//3º Exemplo
const meuDinheiro3 = "$50";
{
  const meuDinheiro3 = "$60";
  console.log(meuDinheiro3);
}

//Const, posso criar a variavel fora do bloco do codigo, porem dentro do bloco, nao posso definir outro valor a ela, mas posso criar outra variavel com o mesmo nome, que irá valer apenas dentro desse escopo.
