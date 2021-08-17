/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema 
numérico para sistema de ntoas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 -  B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

function getScore(nota) {
  let finalScore;
  if (nota >= 90 && nota <= 100) {
    finalScore = "Você tirou nota A";
  } else if (nota < 90 && nota >= 80) {
    finalScore = "Você tirou nota B";
  } else if (nota < 80 && nota >= 70) {
    finalScore = "Você tirou nota C";
  } else if (nota < 70 && nota >= 60) {
    finalScore = "Você tirou nota D";
  } else if (nota < 60 && nota >= 0) {
    finalScore = "Você tirou nota F";
  } else {
    finalScore = "Não implementado";
  }
  return finalScore;
}

console.log(getScore(95));
console.log(getScore(-1));
