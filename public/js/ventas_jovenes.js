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
    const telefono = document.getElementById("telefono").value.trim();
    if (telefono.length !== 8) {
        alert("Ingrese un número de teléfono válido de 8 dígitos.");
        return;
    }

    const fecha = document.getElementById("fecha").value;
    const gastos = document.getElementById("gastos").value;
    const vendido = document.getElementById("vendido").value;
    const total = document.getElementById("total").value;

    const mensaje = `Ventas de Jóvenes:\nFecha: ${fecha}\nGastos: $${gastos}\nVendido: $${vendido}\nTotal: $${total}`;
    
    window.open(`https://wa.me/503${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

function cancelarFormulario() {
    document.getElementById("ventasForm").reset();
    window.location.href = "index.html"; // Regresa a la pantalla principal
}
