
// NAVEGACIÓN RESPONSIVA

const botonLateral = document.querySelector("#botonLateral");
const navegador = document.querySelector("#navegador");

if (botonLateral && navegador) {
    botonLateral.addEventListener("click", () => {
        const menuAbierto = navegador.classList.toggle("menuAbierto");
        botonLateral.textContent = menuAbierto ? "✕ Cerrar menú" : "☰ Menú";
    });
}

// FAVORITOS

const enlaceActual = document.querySelector(
    "#navegador .nav-link.active"
);
const listaFavoritos = document.querySelector("#listaFavoritos");
const mensajeVacio = document.querySelector("#favoritosVacios");
const botonFavorito = document.querySelector("#botonFavorito");

if (enlaceActual && listaFavoritos && mensajeVacio && botonFavorito) {
    const tituloActual = enlaceActual.textContent.trim();
    const claveFavoritos = "mundoLivieFavoritos";
    const elementosFavoritos = listaFavoritos.querySelectorAll("li");

    function leerFavoritos() {
        return JSON.parse(localStorage.getItem(claveFavoritos) || "[]");
    }

    function actualizarFavoritos() {
        const favoritos = leerFavoritos();
        let paginaActualGuardada = false;

        for (let i = 0; i < elementosFavoritos.length; i++) {
            const elemento = elementosFavoritos[i];
            const enlace = elemento.querySelector("a");
            const titulo = enlace.textContent.trim();
            let estaGuardado = false;

            for (let i = 0; i < favoritos.length; i++) {
                if (favoritos[i] === titulo) {
                    estaGuardado = true;
                    break;
                }
            }

            elemento.hidden = !estaGuardado;

            if (titulo === tituloActual && estaGuardado) {
                paginaActualGuardada = true;
            }
        }

        mensajeVacio.hidden = favoritos.length > 0;
        botonFavorito.textContent = paginaActualGuardada ? "★" : "☆";
        botonFavorito.title = paginaActualGuardada
            ? "Quitar de favoritos"
            : "Agregar a favoritos";
    }

    for (let i = 0; i < elementosFavoritos.length; i++) {
        const elemento = elementosFavoritos[i];
        const enlace = elemento.querySelector("a");
        const botonQuitar = elemento.querySelector(".botonQuitarFavorito");

        botonQuitar.addEventListener("click", () => {
            const favoritos = leerFavoritos();
            const titulo = enlace.textContent.trim();

            for (let j = 0; j < favoritos.length; j++) {
                if (favoritos[j] === titulo) {
                    favoritos.splice(j, 1);
                    break;
                }
            }

            localStorage.setItem(claveFavoritos, JSON.stringify(favoritos));
            actualizarFavoritos();
        });
    }

    botonFavorito.addEventListener("click", () => {
        const favoritos = leerFavoritos();
        let yaEstabaGuardada = false;

        for (let i = 0; i < favoritos.length; i++) {
            if (favoritos[i] === tituloActual) {
                favoritos.splice(i, 1);
                yaEstabaGuardada = true;
                break;
            }
        }

        if (!yaEstabaGuardada) {
            favoritos.push(tituloActual);
        }

        localStorage.setItem(claveFavoritos, JSON.stringify(favoritos));
        actualizarFavoritos();
    });

    actualizarFavoritos();
}