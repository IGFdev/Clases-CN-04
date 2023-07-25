const express = require('express');
const app = express();
app.use(express.static('public'));
const dotenv = require('dotenv').config();
const port = process.env.PORT ||3000;
const mainRouter = require ('./routes/mainRouter');
const userRouter = require ('./routes/userRouter');

app.listen (port, () => console.log(`Servidor funcionando bien en puerto ${port}`));

app.use('/', mainRouter)
app.use('/user', userRouter)

/*

MODELO
VISTA
CONTROLADOR
1- Rutas
2- Controladores


*/