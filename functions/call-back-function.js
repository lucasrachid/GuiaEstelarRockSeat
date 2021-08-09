// Callback function

// Basicamente é uma função que serve de parâmetro para outra função.

function sayMyName(name) {
  console.log("Antes de executar a função callback");
  name();
  console.log("Depois de executar a função callback");
}

sayMyName(() => {
  console.log("Estou em uma callback");
});
