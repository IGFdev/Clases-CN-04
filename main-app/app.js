const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();

const routes = require('./routes');

const db = require('./database/models');

const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views')
]);

app.use(session({ secret: 'D1g1T4lH0us3!!!', resave: false, saveUninitialized: true }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(methodOverride('_method'));

app.use((req, res, next) => {
    // Si hay una cookie guardada con el email de un usuario
    if (req.cookies.email) {
        const userModel = require('./models/userModels');

        // Mediante el modelo vamos a buscar los datos del usuario
        const user = userModel.findByEmail(req.cookies.email);

        // Guardamos en session los datos del mismo
        req.session.user = user;
    }
    // Si no hay cookie de email, no hacemos nada
    next();
});

// Para cerrar sesión: res.clearCookie('email');

app.use('/', routes.mainRouter);
app.use('/users', routes.userRouter);
app.use('/products', routes.productRouter);
app.use('/jugadores', routes.jugadorRouter);
app.use('/clubes', routes.clubRouter);
app.use('/posts', routes.postsRouter)
app.use('/api/clubes', routes.apiClubRouter);

app.use((req, res) => {
    res.render('404');
});

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port} || http://localhost:${port}`));