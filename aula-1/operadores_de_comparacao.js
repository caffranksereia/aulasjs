/*
operadores de comparação

> maior que
>= maior que ou igual a
< menor
<= menor que ou igual a
*/
//maior
const n5 = 10
const n6 = 20
const result2 = n6 > n5
console.log(`maior ${result2}`)
//maior que
const n1 = 10
const n2 = 20
const result = n1 >= n2
console.log(`maior que ${result}`)

//menor

const n7 = 10
const n8 = 20
const result3 = n7 < n8
console.log(`menor ${result3}`)
//menor que
const n3 = 10
const n4 = 20
const result1 = n3 <= n4
console.log(`menor que ${result}`)

/**
 * == igualdade(valor) ****
 * === igualdade estrita (valor e tipo)
 * != diferente (valor) ***
 * !== diferente estrito (valor e tipo)
 * 
 */

//igualdade 
const n9 = 40 // number
const n10 ='40' //string
const result4 = n9 == n10 

console.log(`igualdade ${result4} não usamos pois quando uma das variaveis for string ele vai dar true pois isso 
usa-se correção de tipo deduz o qeu queremos fazer e isso não é legal.`)

//igualdade estrita 
const n11 = 30
const n12 = '40'
const result5 = n9 === n10

console.log(`igualdade estrita  ${result5} usa-se esse`)

//diferente estrito
const n14 = 30
const n15 = 40
const result6 = n9 != n10

console.log(`diferente estrito 1 ${result6} não se usa `)

//diferente estrito
const n16 = 30
const n17 = 40
const result7 = n9 !== n10

console.log(`diferente estrito 2 ${result7} usa-se`)
