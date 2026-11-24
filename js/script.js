
// NAVEGACIÓN RESPONSIVA

const botonLateral = document.querySelector("#botonLateral");
const navegacionSuperior = document.querySelector("#navegacionSuperior");

if (botonLateral && navegacionSuperior) {
    botonLateral.addEventListener("click", () => {
        const menuAbierto = navegacionSuperior.classList.toggle("menuAbierto");
        botonLateral.textContent = menuAbierto ? "✕ Cerrar menú" : "☰ Menú";
    });
}