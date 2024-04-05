let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque
    sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua  = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua) 
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    

    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
}
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota
    sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque
    sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCalipepo = document.getElementById("Calipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge "

    } else if (inputCalipepo.checked) { 
        spanMascotaJugador.innerHTML = "Calipepo "
        
    }  else if (inputRatigueya.checked) { 
        spanMascotaJugador.innerHTML = "Ratigueya "

    }  else if (inputLangostelvis.checked) { 
        spanMascotaJugador.innerHTML = "Langostelvis "

    }  else if (inputTucapalma.checked) { 
        spanMascotaJugador.innerHTML = "Tucapalma "

    }  else if (inputPydos.checked) { 
        spanMascotaJugador.innerHTML = "Pydos "

    } else {
        alert=("selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
        
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
        
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Calipepo"

    } else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya"

    } else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis"

    } else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma"

    } else {
        spanMascotaEnemigo.innerHTML = "Pydos"
        
    }
     

}

function ataqueFuego (){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua (){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra (){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2 ){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate ()
}


function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    }else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo =="AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else { 
        crearMensaje("PERDISTE")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

   revisarVidas ()

}

function revisarVidas(){
    if (vidasEnemigo == 0){
       crearMensajeFinal ("FELICITACIONES GANASTE 😁")
    } else if (vidasJugador == 0){
       crearMensajeFinal("LO SIENTO PERDISTE 🤦‍♂️")
    }
} 

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo= document.getElementById("ataques-del-enemigo")

    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDeEnemigo = document.createElement("p")
    
    notificacion.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDeEnemigo.innerHTML = ataqueEnemigo
  
    // sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDeEnemigo)
    
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("resultado")

    // let parrafo = document.createElement("p")
    sectionMensajes.innerHTML = resultadoFinal

   // sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua  = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)