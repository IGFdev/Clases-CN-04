const path = require('path');

const controller = {
    home: (req, res) => {
        res.render('home', { user: req.session.user });
    }
}

module.exports = controller;