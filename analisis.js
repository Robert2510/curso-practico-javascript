
const salarioUru = uruguay.map(function(habitant){
        return habitant.salary; 
    }
);

const salarioUruSorted = salarioUru.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB;

    }
);

function esPar(numero){
    return (numero % 2 ===0);
}

function calcularMediana(lista){
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );

        const promedioLista = sumalista/lista.length;
        return promedioLista;
    }
        
function medianaSalary(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediana([personaMitad1, personaMitad2]);
        return mediana;

    } else{
        personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGralUru= medianaSalary(salarioUruSorted);

// mediana top 10%

const spliceStart = (salarioUruSorted.length *90)/100;
const spliceCount = salarioUruSorted.length - spliceStart;

const salaryTop10 = salarioUruSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Uru = medianaSalary(salaryTop10);

console.log({
    medianaGralUru,
    medianaTop10Uru,
}
);
