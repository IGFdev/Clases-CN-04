const express = require('express');
const methodOverride = require('method-override');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views')
]);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productRouter);

app.use((req, res) => {
    res.render('404');
});

app.listen(port, () => console.log(`Servidor funcionando bien en puerto ${port}`));
/*
    - Method override
    - Delete de productos
    - Put de productos
    - Multer - Subir imágenes
        // creamos un storage de multer
        // seteamos el destination y el filename (dónde se guarda la imagen, y con qué nombre)
        // inicializamos multer pasándole el storage que creamos
        // pasamos este multer como segundo parámetro al router.post
    - Error 404
*/