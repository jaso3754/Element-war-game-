const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
sectionReiniciar.style.display = "block"
const botonAgua  = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("Hipodoge")
const inputCalipepo = document.getElementById("Calipepo")
const inputRatigueya = document.getElementById("Ratigueya")
const inputLangostelvis = document.getElementById("Langostelvis")
const inputTucapalma = document.getElementById("Tucapalma")
const inputPydos = document.getElementById("Pydos")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo= document.getElementById("ataques-del-enemigo")

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
   
    sectionSeleccionarAtaque.style.display = "none"
    
    

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    botonFuego.addEventListener("click", ataqueFuego)
    
    botonAgua.addEventListener("click", ataqueAgua) 
   
    botonTierra.addEventListener("click", ataqueTierra)

    botonReiniciar.addEventListener("click",reiniciarJuego)
}
function seleccionarMascotaJugador() {
    

    
    sectionSeleccionarMascota.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"


    

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
   

    // let parrafo = document.createElement("p")
    sectionMensajes.innerHTML = resultadoFinal

   // sectionMensajes.appendChild(parrafo)

   
    botonFuego.disabled = true
   
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    sectionReiniciar.style.display = "block"

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)