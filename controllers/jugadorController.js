const { Jugador, Club } = require('../database/models');

module.exports = {
    getAll: async (req, res) => {
        const jugadores = await Jugador.findAll({ raw: true });

        console.log(jugadores);

        res.send('Listado de jugadores');
    },
    getDetail: async (req, res) => {
        try {
            const jugador = await Jugador.findByPk(req.params.id, { raw: true });
    
            res.render('jugadorDetail', { jugador });
            
        } catch (error) {
            console.log(error);
        }
    },
    getCreate: async (req, res) => {
        try {
            const clubes = await Club.findAll({ raw: true });

            res.render('crearJugador', { clubes });
        } catch (error) {
            console.log(error);
        }

    },
    createOne: async (req, res) => {
        const bodyData = req.body;

        const nuevoJugador = {
            first_name: bodyData.first_name,
            last_name: bodyData.last_name,
            club_id: bodyData.club_id,
        };

        try {
            const newPlayer = await Jugador.create(nuevoJugador);

            console.log(newPlayer);
            return res.redirect('/jugadores/' + newPlayer.dataValues.id + '/detail')
        } catch (error) {
            console.log(error);
        }

        res.send('Creando jugador');
    },
    getEdit: async (req, res) => {
        const id = req.params.id;

        try {
            const jugador = await Jugador.findByPk(id, { raw: true });
            const clubes = await Club.findAll();

            res.render('editarJugador', { jugador, clubes });
        } catch (error) {
            console.log(error);
        }
    },
    editOne: async (req, res) => {
        const id = req.params.id;

        const updatedPlayer = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            club_id: req.body.club_id,
        };

        try {
            await Jugador.update(updatedPlayer, {
                where: {
                    id: req.params.id
                }
            })
        } catch (error) {
            console.log(error);
        }

        res.send('Editando...');
    },
    deleteOne: async (req, res) => {
        const id = req.params.id;

        try {
            Jugador.destroy({
                where: {
                    id
                }
            })
        } catch (error) {
            console.log(error);
        }

        res.redirect('/jugadores')
    }
}