// if ... else

// Exemplo 01
let temperature = 38;

if (temperature == 36.5 || temperature >= 35) {
  console.log("Saudável");
} else if (temperature >= 36.5 && temperature <= 37.5) {
  console.log("Inicio da Febre");
} else {
  console.log("Ta lascado");
}

// Exemplo 02
let temperatura = 36;
let altaTemperatura = temperatura >= 37.5;
let mediaTemperatura = temperatura < 37.5 && temperatura >= 37;

if (altaTemperatura) {
  console.log("Febre alta");
} else if (mediaTemperatura) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}

// Switch - Basicamente é parecido com o IF e ELSE, porém muda a estrutura
let expressãoQualquer = "a";

switch (expressãoQualquer) {
  case "a":
    //codigo aqui
    //Quantos códigos forem necessários, até que tenha um break
    //Embora o Break seja opcional, é recomendado que coloque
    console.log("a");
    break;
  case "b":
    //Outro codigo, para expressao B
    console.log("b");
    break;
  default:
    //Nao atendendo nem um requisito acima, ele irá executar o Default
    console.log("default");
    break;
}

function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case "+":
      //Codigo
      result = number1 + number2;
      break;

    case "-":
      //Código
      result = number1 - number2;
      break;
    case "*":
      //Código
      result = number1 * number2;
      break;
    case "/":
      //Código
      result = number1 / number2;
      break;
    default:
      console.log("Não implementado");
      break;
  }

  return result;
}

console.log(calculate(4, "*", 8));

/* ================= THROW AND TRY... CATCH ================ */
// ERROR
// throw
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Nome é obrigatório");
  }
  console.log("Error");
}

// try...catch
try {
  sayMyName();
} catch (e) {
  console.log(e);
}

console.log("Após a função de erro");

// APLICACAO SEGUINDO SEM ERRO
// throw
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Nome é obrigatório");
  }
  console.log(name);
}

// try...catch
try {
  sayMyName("Rachid");
} catch (e) {
  console.log(e);
}

console.log("Após try/catch");

// ESTRUTURAS DE REPETIÇÃO - FOR / PARA
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// INICIO
// FIM
// PASSO

for (let i = 10; i > 0; i--) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

// Break para a execução do Looping
// Continue - Pula a execução do momento

// ESTRUTURAS DE REPETIÇÃO - WHILE / ENQUANTO

let i = 49586394505;
while (i > 10) {
  console.log(i);
  i /= 35;
}

// ESTRUTURA DE REPETIÇÃO - FOR...OF

let name = "Rachid";

for (let char of name) {
  console.log(char);
}

let names = ["Lucas", "Mylene", "Silva"];
for (let name of names) {
  console.log(name);
}

// ESTRUTURA DE REPETIÇÃO - FOR...IN
// CRIAR UM LOOPING EM CIMA DE UM OBJETO, PEGANDO AS PROPRIEDADES DO OBJETO
let person = {
  name: "Rachid",
  age: 25,
  weight: 105,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]); // Acessar valor da propriedade
}

console.log(person["name"]); // Acessar valor da propriedade
console.log(person.name); // Acessar valor da propriedade

// PEGARA SOMENTE AS PROPRIEDADES E NAO OS VALORES DEFINIDOS
