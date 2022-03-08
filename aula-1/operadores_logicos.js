/**
 *  Operadores logicos
 * 
 * && -> AND -> E AQUI AS DUAS OU TODAS TEM QEU SER VERDADEIRA EXPRESSÕES DEVEM SER VERDADEIRA 
 * || ->  OR -> OU
 * ! -> NOT - NÃO 
 */

// && expressão and
const exp = true && true
console.log(` Na expressão AND(&&)Todas as expressões tem que ser verdadeira. ${exp}`)

//|| or
const exp1 = true || false
console.log(` Na expressão OR(||)  qualquer uma das expressões retornar verdadeira a expressão torna toda verdadeira 
mesmo e todas forem falsaa. ${exp1}`)

//! -> NOT - NÃO 
const exp2 = true || !!false
console.log(` Na expressão NOT(!)nega a expressão e a saida sai invertida. ${exp2}`)
const exp23 = true || !!false
console.log(` Na expressão NOT 2x(!!)negação da negação  a expressão e a saida sai ivolta ao estado anterior. ${exp23}`)