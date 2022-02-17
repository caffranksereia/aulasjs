const numero =Number(prompt('Digite o numero:'));
const titulo = document.getElementById('numerox');
const text = document.getElementById('text');

//let res = numero.toFixed(2)
console.log();
//console.log(Math.SQRT1_2(numero));

console.log(Number.isInteger(numero));
console.log(Number.isNaN(numero))
console.log(Math.ceil(numero))
console.log(Math.floor(numero))
console.log(numero **(1/2));
//console.log(numero.toFixed(2))

titulo.innerHTML=numero
text.innerHTML = `Raiz Quadrada ${numero **(1/2)} <br />`;
text.innerHTML += `Se é inteiro: ${Number.isInteger(numero)}<br />`;
text.innerHTML += `é NaN${Number.isNaN(numero)}<br />`;
text.innerHTML += `Arredonda pra baixo ${Math.floor(numero)}<br />`;
text.innerHTML += `Arredonda pra cima:${Math.ceil(numero)}<br />`;
text.innerHTML += `Com duas casa decimas ${numero.toFixed(2)}<br />`;