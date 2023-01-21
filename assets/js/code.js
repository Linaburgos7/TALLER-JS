function sumatoria() {
    let numerodigitado = document.getElementById("digitado").value
    let calculo = 0
    for (let i = 0; i <= numerodigitado; i++) {
        calculo = calculo + i;

    }


    let phtml = document.getElementById("result")
    phtml.innerHTML += calculo

}



function parimpar() {
    let numero = document.getElementById("escrito").value
    if (numero % 2 == 0) {
        let phtmll = document.getElementById("rta")
        phtmll.innerHTML = ("El numero " + numero + " es par");


    } else {
        let phtmll = document.getElementById("rta")
        phtmll.innerHTML = ("El numero " + numero + " es impar");
    }

}

function validar() {
    let opcion = document.getElementById("firstRadio").value
    if (opcion === true) {
        alert('Okay, si estas seguro.');



    }
}

function recibe() {
    let edad = parseInt(document.getElementById('edad').value)
    let genero = document.querySelector("input[name='grupo']:checked").value
    if (genero == "hombre") {
        if (edad <= 10) {
            alert('Reclama un jugo')
        } else if (edad >= 18) {
            alert('Reclama una cerveza')
        } else {
            alert('Desafortunadamente, no recibe ningun premio')
        }
        alert('Reclamar adicionalemte una porcion de pizza tres carnes')
    }
    else if (genero == "mujer") {
        alert('Reclamar una porcion de pizza hawaiana')
        if (edad <= 10) {
            alert('Reclamar adicionalemte un jugo')
        }
        else if (edad >= 18) {
            alert('Reclama adicionalemte una cerveza')
        }
        else {
            alert('Desafortunadamente, no recibe ningun premio')
        }
    }
}


let Numerousuario = document.getElementById('digito')
let resultado = document.getElementById('solucion')
function multiplicacion() {
    let numeroo = parseInt(Numerousuario.value)
    let igual = ''
    for (let i = 1; i <= 10; i++) {
        igual += numeroo + "X" + i + "=" + numeroo * i + "<br>"
    }
    resultado.innerHTML = igual
}

function total() {
let Numerousuarioo = document.getElementById('promedio')
let nota  = parseInt (Numerousuarioo.value)
let valor = 1000000
let porcentaje = 0


    if (nota < 3) {
        alert('no tiene ningun descuento')
    }
    else if (nota >= 3 && nota <= 4) {
        porcentaje = (valor * 5) / 100
        valor = valor - porcentaje
        alert('el valor de tu matricula es $ ' + valor)
    }
    else if (nota > 4) {
        porcentaje = (valor * 50) / 100
        valor = valor - porcentaje
        alert('el valor de tu matricula es $ ' + valor)
    }
}
