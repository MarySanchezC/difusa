const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
let signInMode = false;

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    signInMode = false; // Se desactiva el modo de inicio de sesión
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    signInMode = true; // Se activa el modo de inicio de sesión
});

// Event listener para el botón "Confirmar"
const confirmBtn = document.querySelector("#sign-in-btn");
confirmBtn.addEventListener("click", () => {
    alert("Confirmo el tratamiento de datos!");
    signInMode = true; // Establece signInMode en true
});

// Agregar un event listener al formulario de inicio de sesión

document.addEventListener("DOMContentLoaded", function () {
    const ingresarBtn = document.getElementById("ingresar-btn");

        ingresarBtn.addEventListener("click", function (event) {
            console.log("Se hizo clic en el botón Ingresar");
        });
  



});




const signInForm = document.querySelector(".sign-in-form");
signInForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que se envíe el formulario

    if (signInMode) {

        alert("Se está iniciando sesión...");
        window.location.href = "Question1.html";
    } else {
        // Aquí colocas la lógica para el registro
        console.log("Debe acpetar nuestras politicas antes de ingresar.     ");
    }
});






