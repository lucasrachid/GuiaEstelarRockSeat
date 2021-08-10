// Operadores Aritiméticos

// Multiplicação
console.log(5 * 3);

// Divisão
console.log(10 / 2);

// Soma
console.log(10 + 10);

// Subtração
console.log(10 - 8);

// Resto da Divisão
console.log(10 % 3);

// Incremento
let increment = 99;
increment++;
console.log(increment);
// ou;
let increment2 = 88;
console.log(increment2++);
console.log(increment2);

// Decremento
let increment3 = 99;
increment3--;
console.log(increment3);
// ou;
let increment4 = 88;
console.log(increment4--);
console.log(increment4);

// Exponencial
console.log(3 ** 3);

// Grouping Operator ( )

let total = (2 + 3) * 5;
console.log(total);

// Operadores de comparação
// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1;
let two = 2;
let three = 1;

// == igual a
console.log(one == three); // True
console.log(one == 2); // False

// != diferente de
console.log(one != two); // True
console.log(one != three); // False

// Operador estritamente igual a (===)
console.log(one === "1"); // False, porque one é igual a 1, porém o tipo é diferente
console.log(one === 1); // True, porque 1 é igual a 1, tanto em valor como em tipo

// Operador estritamente diferente de (!==)
console.log(two !== "2"); // True, a variável two é diferente pelo Tipo, sendo que um é numero e o outro string
console.log(two !== 2); // False, a variável não é diferente nem em valor e nem em tipo

// Também tem os operadores
// > maior que
// >= Maior igual a
// < menor que
// <= menor igual a

// Operadores de atribuição
let x;
// Assignment
x = 1;
// Addition Assignment
// X = X + 1
x += 1;
// Subtraction Assignment
// X = X - 1
x -= 1;
// Multiplication Assignment
// X = X * 1
x *= 1;
// Division Assignment
// X = X / 1
x /= 1;
// Remainder Assignment
// X = X % 2
x %= 2;
// Exponetiation Assignment
// X = X ** 2;
x **= 2;

// Operadores lógicos (Logical Operators)
// - 2 Valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true;
let queijo = true;
let cafe = false;

// AND &&
console.log(pao && queijo); // TRUE, porque voce tem pao e queijo true

// OR ||
console.log(pao || cafe); // TRUE, porque, entre pao e café, ao menos um é true

// NOT !
console.log(!pao); // Ele transforma de true para false a variavel pao.

// Operador Condicional Terário
// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// Condicion ? value1 : value2

// Exemplos
// Café da manhã top
let paozin = true;
let queijin = true;

const niceBreakFast = paozin && queijin ? "Café top" : "Café ruim";
// Se tiver Paozin e queijin, café é top, caso contrário, café é ruim
console.log(niceBreakFast);

// Maior de 18

let age = 18;
const canDrive = age >= 18 ? "Can drive" : "Can't Drive";
console.log(canDrive);

// Operador de String (String Operator)

// Comparison (Comparação)
console.log("a" == "b");

// Concatenation (Concatenação)
// Retorna a união de duas Strings
console.log("Lucas " + "Rachid " + "Martins");

let alpha = "alpha";
alpha += "bet";
console.log(alpha);

/* 
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log(false ? "Verdadeiro" : "Falso"); // FALSE
console.log(0 ? "Verdadeiro" : "Falso"); // FALSY
console.log(-0 ? "Verdadeiro" : "Falso"); // FALSY
console.log("" ? "Verdadeiro" : "Falso"); // FALSY
console.log(null ? "Verdadeiro" : "Falso"); // FALSY
console.log(undefined ? "Verdadeiro" : "Falso"); // FALSY
console.log(NaN ? "Verdadeiro" : "Falso"); // FALSY

/* 
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1 
    Infinity
    -Infinity
*/
console.log(true ? "Verdadeiro" : "Falso"); // TRUE
console.log({} ? "Verdadeiro" : "Falso"); // TRUTHY
console.log([] ? "Verdadeiro" : "Falso"); // TRUTHY
console.log(1 ? "Verdadeiro" : "Falso"); // TRUTHY
console.log(3.23 ? "Verdadeiro" : "Falso"); // TRUTHY
console.log("0" ? "Verdadeiro" : "Falso"); // TRUTHY
console.log("false" ? "Verdadeiro" : "Falso"); // TRUTHY
console.log(-1 ? "Verdadeiro" : "Falso"); // TRUTHY
console.log(Infinity ? "Verdadeiro" : "Falso"); // TRUTHY
console.log(-Infinity ? "Verdadeiro" : "Falso"); // TRUTHY

/* OPERATOR PRECEDENCE

    Precedência de Operadores

    * Grouping ()
    * Negação e Incremento ! ++ --
    * Multiplicação e divisão * /
    * Adição e Subtração + - 
    * Relacional < <= > >=c
    * Igualdade == != === !==
    * AND &&
    * OR ||
    * Condicional ? :
    * Assignment (atribuição) = += -= *= %=
    
*/
