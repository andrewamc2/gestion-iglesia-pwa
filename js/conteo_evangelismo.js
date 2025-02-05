function modificarValor(id, cambio) {
    let campo = document.getElementById(id);
    let valor = parseInt(campo.value) + cambio;
    campo.value = valor < 0 ? 0 : valor;
}

function enviarWhatsApp() {

    
    const lugarInput = document.getElementById("lugar");
    const lugar = lugarInput.value;
    if (lugar === "") {
        alert("Por favor, ingrese el lugar de evangelismo.");
        lugarInput.focus(); // Establece el foco en el campo
        return;
    }
    
    const telefonoInput = document.getElementById("telefono");
    const telefono = telefonoInput.value.trim();

    if (telefono.length !== 8 || isNaN(telefono)) {
        alert("Ingrese un número de teléfono válido de 8 dígitos.");
        telefonoInput.focus(); // Poner el foco en el campo de entrada
        return;
    }

    const fecha = document.getElementById("fecha").value;
    
    const servidores = document.getElementById("servidores").value;
    const ninos = document.getElementById("ninos").value;
    const profesiones = document.getElementById("profesiones").value;
    const confrontados = document.getElementById("confrontados").value;

    const mensaje = `Conteo de Evangelismo:\nFecha: ${fecha}\nLugar: ${lugar}\nServidores: ${servidores}\nNiños: ${ninos}\nProfesiones de Fe: ${profesiones}\nConfrontados: ${confrontados}`;
    
    window.open(`https://wa.me/503${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
}


function cancelarFormulario() {
    document.getElementById("evangelismoForm").reset();
    window.location.href = "index.html"; // Regresa a la pantalla principal
}

document.addEventListener("DOMContentLoaded", function () {
    const fechaInput = document.getElementById("fecha");
    if (fechaInput) {
        const today = new Date().toISOString().split("T")[0]; // Obtiene la fecha actual en formato YYYY-MM-DD
        fechaInput.value = today; // Asigna la fecha al campo
    }
});