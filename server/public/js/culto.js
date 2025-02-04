document.addEventListener("DOMContentLoaded", function () {
    const adultosInput = document.getElementById("adultos");
    const ninosInput = document.getElementById("ninos");
    const totalAsistenciasInput = document.getElementById("totalAsistencias");
    const ofrendasInput = document.getElementById("ofrendas");
    const diezmosInput = document.getElementById("diezmos");
    const siembrasInput = document.getElementById("siembras");
    const totalDineroInput = document.getElementById("totalDinero");

    function calcularTotalAsistencias() {
        const adultos = parseInt(adultosInput.value) || 0;
        const ninos = parseInt(ninosInput.value) || 0;
        totalAsistenciasInput.value = adultos + ninos;
    }

    function calcularTotalDinero() {
        const ofrendas = parseFloat(ofrendasInput.value) || 0;
        const diezmos = parseFloat(diezmosInput.value) || 0;
        const siembras = parseFloat(siembrasInput.value) || 0;
        totalDineroInput.value = (ofrendas + diezmos + siembras).toFixed(2);
    }

    adultosInput.addEventListener("input", calcularTotalAsistencias);
    ninosInput.addEventListener("input", calcularTotalAsistencias);
    ofrendasInput.addEventListener("input", calcularTotalDinero);
    diezmosInput.addEventListener("input", calcularTotalDinero);
    siembrasInput.addEventListener("input", calcularTotalDinero);
});

function enviarWhatsApp() {
    const telefono = document.getElementById("telefono").value.trim();
    if (telefono.length !== 8) {
        alert("Ingrese un número de teléfono válido de 8 dígitos.");
        return;
    }

    const fecha = document.getElementById("fecha").value;
    const culto = document.getElementById("culto").value;
    const totalAsistencias = document.getElementById("totalAsistencias").value;
    const totalDinero = document.getElementById("totalDinero").value;

    const mensaje = `Estadísticas de Culto:\nFecha: ${fecha}\nCulto: ${culto}\nTotal Asistencias: ${totalAsistencias}\nTotal Diezmos y Ofrendas: $${totalDinero}`;
    
    window.open(`https://wa.me/503${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

function cancelarFormulario() {
    document.getElementById("cultoForm").reset();
    window.location.href = "index.html"; // Regresa a la pantalla principal
}

document.addEventListener("DOMContentLoaded", function () {
    const fechaInput = document.getElementById("fecha");
    if (fechaInput) {
        const today = new Date().toISOString().split("T")[0]; // Obtiene la fecha actual en formato YYYY-MM-DD
        fechaInput.value = today; // Asigna la fecha al campo
    }
});
