var operacion = '';
var num1 = 0;
var num2 = 0;

function numero(valor){
    if(operacion != ''){
        num1 += parseInt(valor);
        document.getElementById('idResultado').value = num1;
    } else {
        num2 += parseInt(valor);
        document.getElementById('idResultado').value = num2;
    }
    
}

function inicializar() {
    operacion = '';
    num1 = 0;
    num2 = 0;
}

function guardarOperacion(simbolo){
    operacion = simbolo
}

function resultado() {

    switch (operacion) {
        case '+': {
            document.getElementById('idResultado').value = (num1 + num2);
            inicializar();
            break;
        }

        case '-': {
            document.getElementById('idResultado').value = (num1 - num2);
            inicializar();
            break;
        }

        case 'x': {
            document.getElementById('idResultado').value = (num1 * num2);
            inicializar();
            break;
        }

        case '/': {
            document.getElementById('idResultado').value = (num1 / num2);
            inicializar();
            break;
        }

    }
}

