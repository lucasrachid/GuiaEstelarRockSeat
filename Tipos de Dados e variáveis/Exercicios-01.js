// 1.Declare uma variável de nome Weight
// let weight;

// 2. Que tipo de dado é a variável acima ?
// console.log(typeof weight);

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (Integer)
        * stars: Number (Float)
        * isSubscribed: Boolean
        
*/

// let name, age, stars, isSubscribed;
// name = `Lucas`;
// age = 25;
// stars = 9.99;
// isSubscribed = true;

/* 
    4. A variável student a baixo é de que tipo de dado ? R: OBJETO.
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
    Atenção, substitua <name> <age> e <weight> pelos valores de cada pripriedade do objeto.

*/

// let student = {};
// console.log(typeof student);

let student = {
  nameOfThePerson: "Lucas",
  age: 25,
  stars: 9.99,
  isSubscribed: true,
  weightPerson: 102.3,
};

let student1 = {
  nameOfThePerson: "Mylene",
  age: 20,
  stars: 9.99,
  isSubscribed: true,
  weightPerson: 75,
};

// console.log(
//   `${student.nameOfThePerson}, tem ${student.age} anos e pesa ${student.weightPerson} kg, será que ele é inscrito em nosso canal ? ${student.isSubscribed}`
// );

/* 
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
*/

// let students = [];

/* 
    6. Reatribua valor para variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele na array)
*/

let students = [student, student1];

console.log(students);

/*
    7. Coloque no console o valor da posição zedo do Array acima.
*/
console.log(students[0]);

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

console.log(students.length);
console.log(students[1]);

/*
    9. Sem rodar o código, responda qual é a resposta do código abaixo e por que ? Após a sua resposta, rode o código e veja se voce acertou.
    
    console.log(a)
    var a = 1

    R: undefined, fenomeno hoisting

*/
