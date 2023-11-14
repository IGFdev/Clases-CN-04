const { Jugador } = require('../database/models')

module.exports = {
    createOne: async (player) => {
        try {
            const newPlayer = await Jugador.create(player);

            return newPlayer;
        } catch (error) {
            throw new Error(error);
        }
    }
}