const number = [
    100,
    200,
    2100,
    40000,    
]

number.sort(function(a,b){
    return a-b;
    
})
    
  console.log(number);

  mitadLista = parseInt(number.length / 2);
  //este es la mediana si el total de elementos es impar//


  function calcularPromedio(lista){
     let sumaLista = 0;
 
    for (let i= 0; i < lista.length; i++){
     sumaLista= sumaLista+lista[i];
 
 }
}
 


  function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }
    else{
        return false;
    }
  }

  let mediana;

  if (esPar(number.length)){
    const elemento1= number[mitadLista -1];
    const elemento2= number[mitadLista];

    const promedio = calcularPromedio([
        elemento1,
        elemento2,
    ])

    mediana = promedio;
  }
  else {
    mediana = number[number];
  }


  

