function calcular(){
    let op1;
    let op2;
    let operacion;
    let resultado;

    // Capturando los datos
    op1 = parseInt(document.getElementById('op1').value);
    operacion = document.getElementById('operacion').value;
    op2 = parseInt(document.getElementById('op2').value);
    console.log(`El valor de op1 es: ${op1}`)
    console.log(`El valor de op2 es: ${op2}`)
    console.log(`El valor de la operacion es: ${operacion}`)

    // Uso del condicional

    if(operacion === '+'){
        resultado = op1 + op2;
    }

    if(operacion === '-'){
        resultado = op1 - op2
    }

    if(operacion === '*'){
        resultado = op1 * op2
    }

    if(operacion === '/'){
        if(op2!=0){
            resultado = op1 / op2
        }else{
            resultado = 'No se puede dividir por 0';
        }
    }

    document.getElementById('resultado').innerHTML = resultado;
}
function borrar(){
    document.getElementById('op1').value = '';
    document.getElementById('operacion').value = '';
    document.getElementById('op2').value = '';
    document.getElementById('resultado').innerHTML = '';
}