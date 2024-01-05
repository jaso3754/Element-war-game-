let ataqueJugador 
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua  = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua) 
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCalipepo = document.getElementById("Calipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge "

    } else if (inputCalipepo.checked) { 
        spanMascotaJugador.innerHTML = "Calipepo "
        
    }  else if (inputRatigueya.checked) { 
        spanMascotaJugador.innerHTML = "Ratigueya "
    } else {
        alert=("selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
        
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
        
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Calipepo"

    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
        
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
    ataqueJugador = "Tierra"
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
        crearMensaje(" empate")
    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra"){
        crearMensaje(" ganaste")
    }else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearMensaje(" ganaste")
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo =="Agua"){
        crearMensaje(" ganaste")
    }else{
        crearMensaje(" perdiste")
    }
}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con  " + ataqueEnemigo + "- " +  resultado

    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener("load", iniciarJuego)