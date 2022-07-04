function calcularPromedio(number){
    let sumaNumber = 0;
    for (let i= 0; i < number.length; i++){
        sumaNumber= sumaNumber+number[i];

        const promedioNumber = sumaNumber/ number.length;
   
        return promedioNumber;
    }

}

const number = [
    
    300,
    100,
    40000,
    2100,    
];

 

number.sort(function(a,b){
    return a-b;
    
});
    
  console.log(number);

  mitadNumber =parseInt(number.length / 2);
  //este es la mediana si el total de elementos es impar//


 function esPar(number){
    if (number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


  

    let mediana;

if (number=== true){
    const elemento1=number[mitadNumber-1];
    const elemento2=number[mitadNumber];
    let mediana =(elemento1+elemento2) /2;
    
}else{
    mediana= number[mitadNumber];
}

/*if (esPar(number.length)){
    const elemento1=number[mitadNumber-1];
    const elemento2=number[mitadNumber];

    const promedioElemento1Y2= calcularPromedio([elemento1,elemento2]);

    mediana=promedioElemento1Y2;

}else{
    mediana= number[mitadLista];
}*/
 

