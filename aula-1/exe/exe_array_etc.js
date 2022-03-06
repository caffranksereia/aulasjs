// function info(){
    
//     let informado = document.querySelector('#form')


//     informado.onsubmit = function(event){//funcão anonima
//         event.preventDFefault();
//         alert(1);
//         console.log('foi enviado')
//     }

//     return informado;
 // info.
    // function(event){//funcão anonima
    //     event.preventDFefault();
    //     alert(1);
    //     console.log('foi enviado')
    //}
// const btt = 1
        // btt++
        // console.log(btt)
// }
// info();
 // alert(1)

// alert(1)

function anyway(){
  let btt = document.querySelector(".form")
  let apresen = document.querySelector(".resul")


  let info = []
  btt.addEventListener("click",saveArray)  

  function saveArray(event){
    event.preventDefault();
    
    
    const nome =   btt.querySelector(".Nome")  
    const sobre =   btt.querySelector(".sobrenome")  
    const peso =   btt.querySelector(".peso")  
    const alt =   btt.querySelector(".Altura")  

    console.log(nome.value, sobre.value, peso.value, alt.value)

    info.push =({
      nome: nome.value,
      sobre: sobre.value,
      peso: peso.value,
      alt: alt.value
    })
      
    
    console.log(info)
    apresen.innerHTML+=('<h1>Informação</h1>');
    apresen.innerHTML+=(`<p>${nome.value} ${sobre.value}`+`${peso.value} ${alt.value}</p>`);
    
  }



  
}

anyway()