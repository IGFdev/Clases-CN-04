const { Club } = require('../database/models');

module.exports = {
    getAll: async (req, res) => {
        const clubes = await Club.findAll({ raw: true });

        console.log(clubes);

        res.send('Listado de clubes');
    },
    getDetail: async (req, res) => {
        const club = await Club.findByPk(req.params.id, { raw: true });

        console.log(club);

        res.send('Detalle del club');
    },
}