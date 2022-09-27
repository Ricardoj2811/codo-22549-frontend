function calcularNotas() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    const notasValidas = validarNotas (nota1, nota2);

    if(!notasValidas){
        alert('Verifique los datos ingresados');
        return;
    }

    calcularValores(nota1, nota2);
}

function validarNotas(nota1, nota2){
    if(Number(nota1) && Number(nota2)){
        return true;
    }
    return false
}

function calcularValores(nota1, nota2) {
    // Crear un vector
    const notas = [];

    // if (nota1 === '' || nota2 === '') {
    //     alert('Complete las notas');
    //     return;
    // }

    // Cargar un valor
    // Forma 1: nombreVector[indice] = valor;
    notas[0] = parseInt(nota1);
    notas[1] = +nota2;

    // Ahora trabajo con el vector
    // Recorro el vector
    let menor = notas[0];
    let mayor = notas[0];
    let promedio;
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < menor) {
            menor = notas[i];
        }
        if (notas[i] > mayor) {
            mayor = notas[i];
        }
        suma = suma + notas[i];
    }
    promedio = suma / notas.length;

    document.getElementById('menor').innerHTML = menor;
    document.getElementById('mayor').innerHTML = mayor;
    document.getElementById('promedio').innerHTML = promedio;
}

function limpiar() {
    document.getElementById('menor').innerHTML = '';
    document.getElementById('mayor').innerHTML = '';
    document.getElementById('promedio').innerHTML = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}