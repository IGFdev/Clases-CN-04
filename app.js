const express = require('express');
const app = express();
app.use(express.static('public'));
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const path = require('path');



app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views')
]);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productRouter);

app.listen(port, () => console.log(`Servidor funcionando bien en puerto ${port}`));
/*
    Vistas - Son la parte visual, es donde mostramos la info al usuario
    Controllers - Son quienes responden a los pedidos, y también pueden renderizar vistas
    Modelos - Son quienes comunican a los controllers con el JSON. Nos dan funciones para manipular la data el mismo
    Json - Es el archivo donde guardamos data para que se mantenga
*/