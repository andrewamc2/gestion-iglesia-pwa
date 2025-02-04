const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para servir las páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/estadisticas-culto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'estadisticas-culto.html'));
});

app.get('/conteo-evangelismo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'conteo-evangelismo.html'));
});

app.get('/ventas-jovenes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ventas-jovenes.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});