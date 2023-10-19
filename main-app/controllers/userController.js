const userModel = require('../models/userModels');
const bcrypt = require('bcrypt');

const controller = {
    getLogin: (req, res) => {
        const error = req.query.error;

        res.render('login', { error });
    },

    getRegister: (req, res) => {
        const error = req.query.error;

        res.render('register', { error });
    },

    login: (req, res) => {
        const userInJson = userModel.findByEmail(req.body.email);

        // Caso en que el mail no pertenece a ningún usuario
        if (!userInJson) {
            return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }

        // Comparesync retorna un booleano 
        const validPw = bcrypt.compareSync(req.body.password, userInJson.password);

        // Si la contraseña es válida
        if (validPw) {
            // Si se quiere mantener sesión iniciada
            if(req.body.remember === 'on'){
                // Creamos la cookie userId, guardamos el id del usuario y hacemos que expire en un año
                res.cookie('email', userInJson.email, { maxAge: 1000 * 60 * 60 * 24 * 365});
            } else {
                console.log('No se quiere mantener la sesión iniciada');
            }

            req.session.user = userInJson;

            res.redirect('/');
        } else {
            res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }
    },

    register: (req, res) => {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
        }

        const user = userModel.create(newUser);

        if (user.error) {
            res.redirect('/users/register?error=' + user.error);
        } else {
            res.redirect('/');
        }
    },
}

module.exports = controller;
