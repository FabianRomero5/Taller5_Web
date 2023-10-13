document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const enfermedadesSelect = document.getElementById("enfermedades");
    const enfermedadesContagiosasInput = document.getElementById("enfermedadesTexto");
    const fechaNacimientoInput = document.getElementById("fechaNacimiento");
    const edadSpan = document.getElementById("edad");

    function calcularEdad(fechaNacimiento) {
        const fechaActual = new Date();
        const nacimiento = new Date(fechaNacimiento);
        const edadMilisegundos = fechaActual - nacimiento;
        const edad = Math.floor(edadMilisegundos / 31557600000); // 1 año en milisegundos
        return edad;
    }
    
    fechaNacimientoInput.addEventListener("input", function() {
        const fechaNacimiento = fechaNacimientoInput.value;
        const edad = calcularEdad(fechaNacimiento);
        edadSpan.textContent = `${edad} años`;
    });

    // Validación de contraseña y enfermedades al enviar el formulario
    registroForm.addEventListener("submit", function(event) {
        // Validación de contraseña
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Las contraseñas no coinciden.");
            event.preventDefault(); // Evita que se envíe el formulario
        }

        // Validación de enfermedades contagiosas
        if (enfermedadesSelect.value === "si" && enfermedadesContagiosasInput.style.display === "none") {
            alert("Debes especificar las enfermedades contagiosas si has sufrido de ellas.");
            event.preventDefault(); // Evita que se envíe el formulario
        }
    });

// Mostrar/ocultar campo de enfermedades contagiosas al cambiar la selección
enfermedadesSelect.addEventListener("change", function() {
    if (enfermedadesSelect.value === "si") {
        document.getElementById("enfermedadesContagiosas").style.display = "block";
    } else {
        document.getElementById("enfermedadesContagiosas").style.display = "none";
        enfermedadesContagiosasInput.value = ""; // Limpia el campo de entrada
    }
    });
});
