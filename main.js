let pantalla = document.querySelector(".pantalla");
let operacion = "", a, b = "", huboCalculo = false, operacionReciente = false;

function cambiar(esto) {
    operacionReciente = false;
    if (huboCalculo) {
        huboCalculo = false;
        pantalla.value = "";
    }

    pantalla.value = pantalla.value + esto.textContent;
    huboCalculo = false;
}

function operar(esto) {
    if (operacion != "" && !operacionReciente) {
        calcular(esto);
    }
    huboCalculo = false;
    operacion = esto.textContent;
    a = pantalla.value;
    if (!operacionReciente) {
        pantalla.value = pantalla.value + esto.textContent;
        operacionReciente = true;
    }
    else pantalla.value = (pantalla.value).substring(0, (pantalla.value).length - 1) + esto.textContent;
}

function borrar(esto) {
    pantalla.value = "";
    a = "";
    b = "";
    operacion = "";
    huboCalculo = false;
}

function calcular(esto) {
    operacionReciente = false;
    if (!huboCalculo) {
        huboCalculo = true;
        let bandera = false;
        for (let i = 0; i < (pantalla.value).length; i++) {
            if (bandera) {
                b += (pantalla.value)[i];
            }

            if ((pantalla.value)[i] == operacion)
                bandera = true;


        }
        let c = parseFloat(a), d = parseFloat(b);
        if (operacion == "+") {
            pantalla.value = c + d;
        }
        else if (operacion == "-") {
            pantalla.value = c - d;
        }
        else if (operacion == "/") {
            pantalla.value = c / d;
        }
        else if (operacion == "x") {
            pantalla.value = c * d;
        }
        b = "";
        operacion = "";
    }

}

function convertir(esto) {
    if (operacion == "") {
        pantalla.value = parseFloat(pantalla.value) * (-1);
    }
}

function decimal(esto) {
    if (pantalla.value == "" || (pantalla.value)[(pantalla.value).length - 1] != '.') {
        if (huboCalculo)
            pantalla.value = esto.textContent;
        else pantalla.value = pantalla.value + esto.textContent;
        huboCalculo = false;
        operacionReciente = false;
    }
}
