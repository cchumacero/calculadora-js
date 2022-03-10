let pantalla = document.querySelector(".pantalla");
let operacion = "", a, b = "";
let huboCalculo = false;
let operacionReciente = false;
function cambiar(esto)
{
    operacionReciente = false;
    if(huboCalculo)
    {
        huboCalculo = false;
        document.querySelector(".pantalla").value = "";
    }
    
    document.querySelector(".pantalla").value = document.querySelector(".pantalla").value + esto.textContent;
    huboCalculo = false;
}

function operar(esto)
{
    huboCalculo = false;
    
    operacion = esto.textContent;
    a = document.querySelector(".pantalla").value;
    if(!operacionReciente)
    {
        document.querySelector(".pantalla").value = document.querySelector(".pantalla").value + esto.textContent;
        operacionReciente = true;
    }
    else document.querySelector(".pantalla").value = (document.querySelector(".pantalla").value).substring(0,(document.querySelector(".pantalla").value).length - 1) + esto.textContent;
}

function borrar(esto)
{
    document.querySelector(".pantalla").value = "";
    a = "";
    b = "";
    operacion = "";
    huboCalculo = false;
}

function calcular(esto)
{
    operacionReciente = false;
    if(!huboCalculo)
    {
        huboCalculo = true;
        let bandera = false;
        for(let i = 0; i < (document.querySelector(".pantalla").value).length; i++)
        {
            if(bandera)
            {
                b += (document.querySelector(".pantalla").value)[i];
            }

            if((document.querySelector(".pantalla").value)[i] == operacion)
                bandera = true;
            
            
        }
        let c = parseFloat(a), d = parseFloat(b);
        if(operacion == "+")
        {
            document.querySelector(".pantalla").value = c + d;
        }
        else if(operacion == "-")
        {
            document.querySelector(".pantalla").value = c - d;
        }
        else if(operacion == "/")
        {
            document.querySelector(".pantalla").value = c / d;
        }
        else if(operacion == "x")
        {
            document.querySelector(".pantalla").value = c * d;
        }
        b = "";
        operacion = "";
    }
    
}

