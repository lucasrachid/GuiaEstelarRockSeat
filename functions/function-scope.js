// Function Scope

//Se eu adicionar o parametro com o nome da variável subject, ele irá apenas mudar o significado da variável, onde estiver sendo executado a função
let subject = "Create video";

function createThink(subject) {
  subject = `study`;
  return subject;
}
console.log(subject);
console.log(createThink(subject));

// Quando nao adiciono um parametro a funcao, e peco para ele dar um novo significado a variavel LET, ele irá sobscrever no restante do codigo
let subject2 = "batata";

function createThink2() {
  subject2 = `Maçã`;
  return subject2;
}

console.log(createThink2());
console.log(subject2);
