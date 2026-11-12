
// Elementos de la página
const B_botonAbrir = document.querySelector("#B-abrir");
const B_inicio = document.querySelector("#B-inicio");
const B_historia = document.querySelector("#B-historia");

const B_botonRevelar = document.querySelector("#B-revelar");
const B_carta = document.querySelector("#B-carta");

const B_contenedorLluvia = document.querySelector("#B-lluvia");

// Abrir la sorpresa
B_botonAbrir.addEventListener("click", function () {

    B_inicio.classList.add("B-oculto");
    B_historia.classList.remove("B-oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Revelar la carta
B_botonRevelar.addEventListener("click", function () {

    B_carta.classList.remove("B-oculto");

    B_botonRevelar.textContent = "Carta abierta ♡";
    B_botonRevelar.disabled = true;

    B_carta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

// Crear gotas de lluvia
function B_crearGota() {

    const B_gota = document.createElement("span");

    B_gota.classList.add("B-gota");

    B_gota.style.left = Math.random() * 100 + "vw";

    B_gota.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    B_contenedorLluvia.appendChild(B_gota);

    // Eliminar la gota cuando termina su animación
    B_gota.addEventListener("animationend", function () {
        B_gota.remove();
    });

}

// Generar lluvia cada cierto tiempo
setInterval(B_crearGota, 180);
