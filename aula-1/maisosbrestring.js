//AS strings são indexaveis e vão se completando assim sendo guardadas em indexes


let umaString = "Um \"texto\""; //se quiser coloca aspas dentro das aspas colcoa uma barra 
let duasString = "Um \\texto"; //coloque duas barras para pode aparecer no texto se colocar uma como fosse um escape
let duasString2 = "um \texto"; //aqui como fosse dar uma table

console.log(umaString)
console.log(duasString)
console.log(duasString2)

console.log(umaString[4])
console.log(duasString[3])
console.log(duasString2[5])

//se eu quiser achar qual indexe que começa

console.log(umaString.indexOf('Texto'))
console.log(umaString.lastIndexOf('m',7))