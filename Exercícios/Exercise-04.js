/* ### Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// transform('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }
  //Fluxo ideal, F => C
  let updatedDegree;
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  return formula(updatedDegree) + "C";
}

try {
  transformDegree("50F");
  transformDegree("50Z");
} catch (error) {
  console.log(error.message);
}
