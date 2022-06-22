
//const precioOriginal = 230;
//const descuento = 17;
//const porcentajeConDescuento = 100 - descuento;
//const precioFinal = (precioOriginal * porcentajeConDescuento)/100 ;

/*console.log({
    precioOriginal,
    descuento,
    porcentajeConDescuento,
    precioFinal
});
*/



function calcularPrecioFinal(precio,descuento){
    const porcentajeConDescuento =100- descuento;
    const precioFinal =(precio * porcentajeConDescuento)/100;
    return precioFinal;

}



function calcularPrecioReal(){
    const inputPrecio = document.getElementById("inputPrecio");
    const inputDescuento = document.getElementById("inputDescuento");
    const precioValue =inputPrecio. value ;
    const descuentoValue = inputDescuento.value;
    const precioReal = calcularPrecioFinal(precioValue,descuentoValue);

    const precioP= document.getElementById("precioConDescuento");
    precioP.innerText = "El precio con descuento es: $" + precioReal ; 

}
