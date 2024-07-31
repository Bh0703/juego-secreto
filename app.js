/* let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Selecciona un número entre 1 y 10'; */
let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoDeIntentos = 3;


function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento); //Elemento html que se quiere trabajar o modificar
    titulo.innerHTML = texto; //Texto que va en ese elemento
    return;
}

function verficarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número, era ${numeroSecreto}. Lo hiciste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
        if (intentos > maximoDeIntentos){
            asignarTextoElemento('p', `Lo siento, has agotado los ${maximoDeIntentos} disponibles`);
            document.getElementById('intentar').setAttribute('disabled', 'true');
            document.getElementById('reiniciar').removeAttribute('disabled')
        } 
    }
    return;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = "";
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.')
    } else{
        // Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) { 
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Selecciona un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón del juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');
}

condicionesIniciales();


