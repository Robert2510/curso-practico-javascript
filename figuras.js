
// código del cuadrado.
console.group("cuadrado");

//  const ladoCuadrado = 5;
//    console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimertroCuadrado(lado){
    return lado *4;
}

//   const perimertroCuadrado = ladoCuadrado * 4;
//     console.log("El perimetro del cuadrado es: " + perimertroCuadrado  + "cm" );

//     const areaCuadrado = ladoCuadrado * ladoCuadrado;
//       console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

function areaCuadrado(lado){
    return lado * lado ;
}


console.groupEnd();

// código del triángulo.
console.group("Triángulo");

//   const ladoTriangulo1 = 6;
//  const ladoTriangulo2 = 6;
//   const baseTriangulo = 4;
//  const alturaTriangulo = 5.5;
//  console.log(
//   "Los lados del triángulo miden: "
//    + ladoTriangulo1
//     +"cm, "
//    +ladoTriangulo2 
//    +"cm, "
//     +baseTriangulo
//     +"cm. "
// );

// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

// 

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

function areaTriangulo(base,altura){
    return (base * altura)/ 2 ;
}

console.groupEnd();

// código del circulo.
console.group("círculo");

// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm" );

 const PI = Math.PI;

// const perimetroCirculo = Math.floor(diametroCirculo * PI);
// console.log("La circunferencia del círculo es: " +   perimetroCirculo + "cm");

// const areaCirculo = Math.floor((radioCirculo * radioCirculo)* PI);
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

function diametroCirculo(radio){
    return radio * 2;
}

function circunferencia(radio){
    const diametro = diametroCirculo(radio) ;
    return diametro * PI ;
}

function areaCirculo(radio){
    return (radio * radio)* PI ;
}

console.groupEnd();

//interaccion con html.//





function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimertroCuadrado(value);
        alert(perimetro);
    
    
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
        alert(area);

    
} 

// perimetro y area del triangulo//



 function calcularPerimetroTriangulo(){
    const primerLado = document.getElementById("inputPrimerLado");
    const segundoLado = document.getElementById("inputSegundoLado");
    const ladobase = document.getElementById("inputBase");
    const valueA =parseInt(primerLado.value);
    const valueB= parseInt(segundoLado.value);
    const valueBase =parseInt(ladobase.value);
    const perimetro = perimetroTriangulo(valueA , valueB , valueBase);
        alert(perimetro);

 }

 function calcularAreaTriangulo(){
    const ladobase = document.getElementById("inputBase");
    const altura = document.getElementById("inputAltura");
    const valueBase =parseInt(ladobase.value);
    const valueAltura = parseInt(altura.value);
    const area = areaTriangulo(valueBase,valueAltura);
      alert(area);

    


 }

 
    
    

    

    
       
 
      

    





    
    
 

    
    
    
    











