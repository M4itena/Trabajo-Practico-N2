
// PANEL LATERAL

const distribucionPagina = document.querySelector("#distribucionPagina");
const botonLateral = document.querySelector("#botonLateral");

botonLateral.addEventListener("click", () => {
    const panelAbierto = distribucionPagina.classList.toggle("panelAbierto");
    botonLateral.textContent = panelAbierto ? "✕ Cerrar menú" : "☰ Menú";
});

const gruposPagina = document.querySelectorAll(".grupoPagina");

gruposPagina.forEach((grupoPagina) => {
    const botonSecciones = grupoPagina.querySelector(".botonSecciones");
    const listaSecciones = grupoPagina.querySelector(".listaSecciones");

    botonSecciones.addEventListener("click", () => {
        const seccionesAbiertas =
            listaSecciones.classList.toggle("seccionesAbiertas");

        botonSecciones.textContent = seccionesAbiertas ? "Ocultar secciones" : "Mostrar secciones";
    });
});