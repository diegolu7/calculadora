let aux = null;
let resultado = null;
//funcion ppal
function init() {

    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {
        button.addEventListener("click", function (evento) { //cuando haga click llamas a esta fn
            let text = evento.target.innerText; //tomamos el texto plano con innetText


            if (((text == "CE") || (text == "C"))) {
                limpiar();
            }
            else {

                if (aux) {
                    aux = aux + text;
                    document.getElementById("pantalla").value = aux;


                } else {
                    aux = text;
                    document.getElementById("pantalla").value = aux;

                }

            }
            if ((aux) && text == "=") {
                console.log(aux);
                resultado = aux.substring(0, aux.length - 1);
                resultado = eval(resultado);
                console.log(resultado);
                document.getElementById("pantalla").value = resultado;

                aux = null;
                resultado = null;

            }


            function limpiar() {
                //limpiar pantalla
                document.getElementById("pantalla").value = "0";
                //limpiar variables
                aux = null;
                resultado = null;

            }

        });
    }
}


window.onload = init; //onload se usa para ejecutar una función de JavaScript tan pronto como una página haya cargado