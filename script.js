// ----- Elementos ----- 

//Video
const elmPlayer = document.getElementById('player');

//Controles
const elmPlayPause = document.getElementById('btnPlay');
const elmMute = document.getElementById('btnMute');
const elmVol = document.getElementById('rngVol');

//Detalles
const elmDetails = document.getElementById('btnDetails');


//  ----- Eventos ----- 

// Play y Pause
elmPlayPause.addEventListener("click", function () {
    if (elmPlayer.paused) {
        elmPlayer.play();
        elmPlayPause.innerHTML = "Pause"; // Cambia el texto del boton
        cambiarFondo();  // Funcion para cambiar el color del fondo

    } else {
        elmPlayer.pause();
        elmPlayPause.innerHTML = "Play"; // Cambia el texto del boton
    }
});

// Mute y Unmute
elmMute.addEventListener("click", function () {
    if (elmPlayer.muted) {
        elmPlayer.muted = false;
        elmMute.innerHTML = "Mute";

    } else {
        elmPlayer.muted = true;
        elmMute.innerHTML = "Unmute";
    }
});

// Volumen
elmVol.addEventListener("input", function () {
    elmPlayer.volume = elmVol.value / 100;
});

// Detalles
elmDetails.addEventListener("click", function () {
    const sinposis = document.getElementById("sinpsis");

    if (sinposis) {
        elmDetails.innerHTML = "Ver más detalles";
        borrarDetalles()

    } else {
        elmDetails.innerHTML = "Cargando ...";
        setTimeout(() => {
            console.log("Pausa de 1 segundos.");
            elmDetails.innerHTML = "Ocultar detalles";
            mostrarDetalles();
        }, "1000");

    }
});


//  ----- Funciones ----- 

//Funcion para cambiar el Fondo con una pausa de 5 seg setTimeout()
function cambiarFondo() {
    setTimeout(() => {
        console.log("Pausa de 5 segundos.");
        document.body.style.backgroundColor = "#000";
    }, "5000");
}

//Funcion para crear elementos de forma dinámica, utilizando createElement() y appendChild()
function mostrarDetalles() {
    const sinposis = document.createElement("div");
    sinposis.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam alias reprehenderit veniam, quibusdam omnis ipsa ex, fugit nam, culpa est eius dignissimos reiciendis magnam dolore";
    sinposis.style.backgroundColor = "#fff";
    sinposis.id = "sinpsis"; // Añadir id
    sinposis.classList.add("sinpsis"); // Añadir clase
    document.body.appendChild(sinposis);
}

//Funcion para eliminar elementos de forma dinámica
function borrarDetalles() {
    const sinposis = document.getElementById("sinpsis");
    if (sinposis) {
        sinposis.remove(); // Eliminar el elemento
    }
}

// :) 