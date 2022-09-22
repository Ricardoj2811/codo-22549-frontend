// CODIGO PROPIO
// function incrementar(){
//     let contador = parseInt(document.getElementById('contador').innerHTML);

//     // Incremento de valores
//     // contador = contador +1;
//     // contador++; Se llama post incremento
//     // ++contador; Se llama pre incremento, no usarla en conjunto con la asignacion
//     contador++;

//     document.getElementById('contador').innerHTML = contador;

//     let resto = contador % 2;
//     if(resto === 0){
//         document.getElementById('paridad').innerHTML = 'PAR';
//     }else{
//         document.getElementById('paridad').innerHTML = 'IMPAR';
//     }
// }

// function decrementar(){
//     let contador = parseInt(document.getElementById('contador').innerHTML);

//     // Incremento de valores
//     // contador = contador +1;
//     // contador++; Se llama post incremento
//     // ++contador; Se llama pre incremento, no usarla en conjunto con la asignacion
//     contador--;

//     document.getElementById('contador').innerHTML = contador;

//     let resto = contador % 2;
//     if(resto === 0){
//         document.getElementById('paridad').innerHTML = 'PAR';
//     }else{
//         document.getElementById('paridad').innerHTML = 'IMPAR';
//     }
// }

// CODIGO PROFESOR

//funcion paridad
function paridad(valor) {
    //SCOPE es donde es visible la variable
    const labelParidad = document.getElementById('paridad');

    //invocar a la funcion
    let esNumeroPar = esPar(valor);

    if(esNumeroPar) {
        labelParidad.innerHTML = 'PAR';
    }else {
        labelParidad.innerHTML = 'IMPAR';
    }
}

//retorna un boolean
function esPar(valor) {
    //determino si valor es par
    let resto = valor % 2; // 0 o 1
    if(resto === 0){
        return true;
    }else{
        return false;
    }
    // Tambie se puede resolver en una linea usando return valor % 2 === 0
}

function decrementar() {
    const label = document.getElementById('contador');
    let valor = parseInt(label.innerHTML);
    valor--;
    label.innerHTML = valor;

    paridad(valor);
}

const label = {
    innerHTML: ''
};
label.innerHTML = 'PAR';


function incrementar() {
    const label = document.getElementById('contador');
    let valor = parseInt(label.innerHTML);

    //incremento el valor de contadorValor
    //contadorValor = contadorValor + 1;
    valor++; // post incremento
    //++contadorValor; // preincremento
    label.innerHTML = valor;

    paridad(valor);
}