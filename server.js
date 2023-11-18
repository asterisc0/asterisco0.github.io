const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

const dispositivos = [];

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const datosUsuario = req.body;
    dispositivos.push(datosUsuario);
    console.log('Información del usuario recibida:', datosUsuario);
    res.send('Datos recibidos correctamente');
});

app.get('/dispositivos', (req, res) => {
    res.json(dispositivos);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
