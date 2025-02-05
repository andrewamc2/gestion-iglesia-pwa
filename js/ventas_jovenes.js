document.addEventListener("DOMContentLoaded", function () {
    const gastosInput = document.getElementById("gastos");
    const vendidoInput = document.getElementById("vendido");
    const totalInput = document.getElementById("total");

    function calcularTotal() {
        const gastos = parseFloat(gastosInput.value) || 0;
        const vendido = parseFloat(vendidoInput.value) || 0;
        totalInput.value = (vendido - gastos).toFixed(2);
    }

    gastosInput.addEventListener("input", calcularTotal);
    vendidoInput.addEventListener("input", calcularTotal);
});

function enviarWhatsApp() {

    const gastos = parseFloat(document.getElementById("gastos").value);
    if (isNaN(gastos) || gastos < 0) {
        alert("Ingrese un monto válido para los gastos del día.");
        document.getElementById("gastos").focus();
        return;
    }

    const vendido = parseFloat(document.getElementById("vendido").value);
    if (isNaN(vendido) || vendido <= 0) {
        alert("Ingrese un monto válido para las ventas del día.");
        document.getElementById("vendido").focus();
        return;
    }

    const telefono = document.getElementById("telefono").value.trim();
    if (telefono.length !== 8) {
        alert("Ingrese un número de teléfono válido de 8 dígitos.");
        return;
    }

    const fecha = document.getElementById("fecha").value;
    
    const total = document.getElementById("total").value;

    const mensaje = `*Ventas de Jóvenes*\n\nFecha: ${fecha}\n\nGastos: $${gastos}\nVendido: $${vendido}\n\n*Total: $${total}*`;
    
    window.open(`https://wa.me/503${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

function cancelarFormulario() {
    document.getElementById("ventasForm").reset();
    window.location.href = "index.html"; // Regresa a la pantalla principal
}

document.addEventListener("DOMContentLoaded", function () {
    const fechaInput = document.getElementById("fecha");
    if (fechaInput) {
        const today = new Date().toISOString().split("T")[0]; // Obtiene la fecha actual en formato YYYY-MM-DD
        fechaInput.value = today; // Asigna la fecha al campo
    }
});