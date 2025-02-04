function modificarValor(id, cambio) {
    let campo = document.getElementById(id);
    let valor = parseInt(campo.value) + cambio;
    campo.value = valor < 0 ? 0 : valor;
}

function enviarWhatsApp() {
    const telefono = document.getElementById("telefono").value.trim();
    if (telefono.length !== 8) {
        alert("Ingrese un número de teléfono válido de 8 dígitos.");
        return;
    }

    const fecha = document.getElementById("fecha").value;
    const lugar = document.getElementById("lugar").value;
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