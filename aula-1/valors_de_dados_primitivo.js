/*
    Primitivos (imutaveis) - string ,numerico , boolean ,underfined
    null (bigint ,symbol).
    dados são valores  não é a variavel



 as string são imutaveis

 Referencias (mutaveis) - array, object, function
*/ 

// let nome = 'Fabio';
// nome = 'roberto';

// console.log(nome[0]);

let a = [1,2,3]; //passa por referencias e afeta as duas variaveis quadno muda. elea apontam para  amesma memoria
let b = a;

a.push(4)
b.pop()
console.log(a, b)