// Requerimos express para para usarlo
const express = require('express');
const path = require('path');

// Iniciamos un servidor, y lo guardamos dentro de app
const app = express();

app.use(express.static('public'));


// Escuchamos los GET request a "/"
app.get('/', (req, res) => {
    // Respondemos a este request con este string, mediante res.send
    const ruta = path.join(__dirname, './views/home.html');
    console.log('Hicieron un request en "/"');
    res.sendFile(ruta);
});

app.get('/productos', (req, res) => {
    res.send('Estás en /productos')
    console.log('Hicieron un request en "/productos"');
})

// Hacemos que nuestro servidor escuche requests en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});