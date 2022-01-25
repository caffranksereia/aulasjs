/* aritimeticos

* + somar ou concatenar
* - subtrair
* * multiplicação
* / divisão
* ** potenciação
* % resto da divisão 

*/
const num =1;
const num2=1000;
const num3=2;
let rest;
/* somar*/
rest = num + num2
console.log(rest)

/* subtrair*/
rest = num - num2
console.log(rest)

/* multiplicar*/
rest = num * num2
console.log(rest)

/* dividir*/
rest = num / num2
console.log(rest)

/* potencia*/
rest = num ** num2
console.log(rest)

/* resto da divisao*/
rest = num % num2
console.log(rest)

/* precedendia das ordem do calculo
1º ()
2º **
3º / **
4º +/-
*/

/* 
* incrementar
*
*/
let contador =1

//incrementar pode ser tanto pre e pos 
contador++; //executa ação e deopis retorna
++contador; //primeiro faz a conta e depois retorna a conta
console.log('contador',contador)

let contador1 =10

//decremento pode ser tanto pre e pos 
contador1--; //executa ação e deopis retorna
--contador1; //primeiro faz a conta e depois retorna a conta
console.log('contador',contador1)



let contador2=null;
const step=2;

contador2 +=step //contador = contador +step
console.log(contador2)


