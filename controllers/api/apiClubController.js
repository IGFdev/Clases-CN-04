const db = require('../../database/models');

module.exports = {
    getClubes: async (req, res) => {
        try {
            let statusCode = 200;
            const clubes = await db.Club.findAll();

            statusCode = clubes.length > 0 ? statusCode : 204;

            const response = {
                data: clubes,
                meta: {
                    status: statusCode,
                    path: req.baseUrl,
                    quantity: clubes.length,
                    query: req.query
                }
            }

            res.status(statusCode).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error', code: '500'});
        }
    },
    getClubById: async (req, res) => {
        try {
            const club = await db.Club.findByPk(req.params.id);
            res.json(club);
        } catch (error) {
            console.error(error);
            res.json({error: 'Server error', code: '504'});
        }
    },
    postClub: async (req, res) => {
        try {
            const data = {
                name: req.body.name,
                img: req.body.img,
            }
            const newClub = await db.Club.create(data);

            res.status(201).json(newClub);
        } catch (error) {
            console.error(error);
        }
    }
}