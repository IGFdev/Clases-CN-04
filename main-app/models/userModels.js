const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcrypt');


const model = {
    fileRoute: path.join(__dirname, '../data/users.json'),

    create: (userData) => {
        // ejecutamos el método findByEmail para que busque un usuario en el JSON que tenga el mail que nos llega desde userData
        const emailInUse = model.findByEmail(userData.email);

        if (emailInUse) {
            return ({
                error: 'email is already in use'
            });
        }

        let users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

        const newUser = {
            id: uuid.v4(),
            ...userData
        };

        newUser.password = bcrypt.hashSync(newUser.password, 12);

        users.push(newUser);

        const usersJson = JSON.stringify(users);

        fs.writeFileSync(model.fileRoute, usersJson, 'utf-8');

        return newUser;
    },

    findByEmail: (email) => {
        const users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

        const coincidence = users.find(usuarioActual => usuarioActual.email === email);

        return coincidence || null;
    },

    findAll: () => {

    }
}

module.exports = model;