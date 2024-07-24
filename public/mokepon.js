const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")

sectionReiniciar.style.display = "block"


const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo= document.getElementById("ataques-del-enemigo")
const contenedorTarjetas =document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let enemigoId = null
let mokepones =[]
let mokeponesEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCalipepo 
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma 
let inputPydos 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua  
let botonTierra
let botonReiniciar 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./img/4elements.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 450

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


class Mokepon{
    constructor(nombre, foto, vida, fotoMapa, id = null ) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
     pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x, // pocision x
            this.y, // pocision y
            this.ancho, // ancho
            this.alto, // alto
        )
     }
    
}

// estos objetos se instancian desde una clase (Mokepon).
let Hipodoge = new Mokepon('Hipodoge', 'img/hipodoge.webp', 5, "./img/hipodogeFm.png")

let Calipepo = new Mokepon('Calipepo', 'img/calipepo.webp', 5, "./img/calipepoFm.png")

let Ratigueya = new Mokepon('Ratigueya', 'img/ratigueya.webp', 5, "./img/ratigueyaFm.png")

let Langostelvis = new Mokepon('Langostelvis', 'img/langostelvis.png', 5, "./img/langostelvisFm.png")

let Tucapalma = new Mokepon('Tucapalma', 'img/tucapalma.png', 5, "./img/tucapalmaFm.png")

let Pydos = new Mokepon('Pydos', 'img/pydos.webp', 5, "./img/pydosFm.png")

const HIPODOGE_ATAQUES =[
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '☘️', id: 'boton-tierra'},
]

// Pero los objetos literarios debo contruirlos desde cero y no tengo clases para poderlo hacer, estos solo van a guardar informacion.
Hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const CALIPEPO_ATAQUES = [
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
]
Calipepo.ataques.push(...CALIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
]

Ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

const LANGOSTELVIS_ATAQUES = [
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '☘️', id: 'boton-tierra'},
]

Langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

const TUCAPALMA_ATAQUES = [
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
]

Tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

const PYDOS_ATAQUES =[
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '☘️', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
]

Pydos.ataques.push(...PYDOS_ATAQUES)

mokepones.push(Hipodoge,Calipepo,Ratigueya,Langostelvis,Tucapalma,Pydos)


function iniciarJuego(){
   
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

// metodo de iteracion (forEach)
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class= "tarjeta-de-mokepon" for=${mokepon.nombre}> 
            <p class="name-mascota">${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `  //templates literarios debe ser con comilla invertida.
    contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCalipepo = document.getElementById("Calipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")
        inputPydos = document.getElementById("Pydos")

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://192.168.101.15:8080/unirse")
        .then(function (res) {
            if (res.ok) {
                res.text() 
                    .then(function(respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    }) 
                
            }
        })
}

function seleccionarMascotaJugador() {
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCalipepo.checked) { 
        spanMascotaJugador.innerHTML = inputCalipepo.id
        mascotaJugador = inputCalipepo.id
    }  else if (inputRatigueya.checked) { 
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }  else if (inputLangostelvis.checked) { 
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }  else if (inputTucapalma.checked) { 
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }  else if (inputPydos.checked) { 
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert("selecciona una mascota")
        return
    }

    sectionSeleccionarMascota.style.display = "none"

    seleccionarMokepon(mascotaJugador)
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
         
}

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://192.168.101.15:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    
    mostrarAtaques(ataques)
}

function mostrarAtaques (ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button class="boton-de-ataque BAtaque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

     botonFuego= document.getElementById("boton-fuego")
     botonAgua= document.getElementById("boton-agua")
     botonTierra= document.getElementById("boton-tierra")
     botonReiniciar= document.getElementById("reiniciar")
     botones= document.querySelectorAll(".BAtaque")
    

    
     botonReiniciar.addEventListener("click", reiniciarJuego)

}


function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if  (e.target.textContent === '💧') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
            
        })
    })
    
}

function enviarAtaques() {
    fetch(`http://192.168.101.15:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.101.15:8080/mokepon/${enemigoId}/ataques`)
    .then(function(res) {
        if (res.ok) {
            res.json()
                .then(function ({ ataques }) {
                    if (ataques.length === 5) {
                        ataqueEnemigo = ataques
                        combate()
                    }
                })
            
        }
    }) 
}

function seleccionarMascotaEnemigo(enemigo){

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()

}


function ataqueAleatorioEnemigo(){
    console.log("Ataques enemigo", ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1){
        ataqueEnemigo.push("FUEGO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4 ){
        ataqueEnemigo.push("AGUA")
    } else {
        ataqueEnemigo.push("TIERRA")
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5) {
        combate () 
    } 
    
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}


function combate(){
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index] ){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] == "FUEGO" && ataqueEnemigo[index] == "TIERRA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] == "AGUA" && ataqueEnemigo[index] == "FUEGO"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador  
        } else if (ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index] =="AGUA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else { 
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
       
    }
   
   revisarVictorias ()

}

function revisarVictorias(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal ("ESTO FUE UN EMPATE 😒")
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal ("FELICITACIONES! GANASTE 😁")    
    } else {
        crearMensajeFinal("LO SIENTO PERDISTE 🤦‍♂️")
    }
} 

function crearMensaje(resultado){
  
    // let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDeEnemigo = document.createElement("p")
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDeEnemigo.innerHTML = indexAtaqueEnemigo
  
    // sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDeEnemigo)
    
}

function crearMensajeFinal(resultadoFinal){
   
    sectionMensajes.innerHTML = resultadoFinal


   


    sectionReiniciar.style.display = "block"

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

    // la function fillRect lo que hace es crear un rectangulo dentro de canvas.
    // lienzo.fillRect(5, 15, 20, 40,)
    //lienzo.drawImage = para cargar imagen dentro de canvas.
    
function pintarCanvas() {

    mascotaJugadorObjeto.x= mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y= mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height) // esta funcion limpia nuestro canvas.
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function(mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })

}

function enviarPosicion(x, y){
    fetch(`http://192.168.101.15:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ enemigos }) {
                    console.log(enemigos)
                    mokeponesEnemigos = enemigos.map(function (enemigo) {
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if (mokeponNombre === "Hipodoge") {
                            mokeponEnemigo = new Mokepon('Hipodoge', 'img/hipodoge.webp', 5, "./img/hipodogeFm.png", enemigo.id)
                        } else if (mokeponNombre === "CaLipepo") {
                            mokeponEnemigo = new Mokepon('Calipepo', 'img/calipepo.webp', 5, "./img/calipepoFm.png", enemigo.id)
                        } else if (mokeponNombre === "Ratigueya") {
                            mokeponEnemigo = new Mokepon('Ratigueya', 'img/ratigueya.webp', 5, "./img/ratigueyaFm.png", enemigo.id)
                        } else if (mokeponNombre === "Langostelvis") {
                            mokeponEnemigo = new Mokepon('Langostelvis', 'img/langostelvis.png', 5, "./img/langostelvisFm.png", enemigo.id)
                        } else if (mokeponNombre === "Tucapalma") {
                            mokeponEnemigo = new Mokepon('Tucapalma', 'img/tucapalma.png', 5, "./img/tucapalmaFm.png", enemigo.id)
                        } else if (mokeponNombre === "Pydos"){
                            mokeponEnemigo = new Mokepon('Pydos', 'img/pydos.webp', 5, "./img/pydosFm.png", enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y

                        return mokeponEnemigo
                    })
                })
        }
    })
}
    


function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
    
}
function moverAbajo() {
mascotaJugadorObjeto.velocidadY = 5
    
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 5
   
}

function detenerMovimiento(){
  mascotaJugadorObjeto.velocidadX = 0
  mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    // EL SWITCH CASE ES una manera de hacer varios condicionales if juntos.
    switch (event.key) {    
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa () {
   
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePresionoUnaTecla )// el evento "keydown" se escucha cuando de presiona una tecla.
    window.addEventListener("keyup", detenerMovimiento )

}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota= 
        mascotaJugadorObjeto.x 

    if (abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("se detecto una colision");

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemigo(enemigo)
    
}
window.addEventListener("load", iniciarJuego)