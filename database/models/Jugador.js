module.exports = (sequelize, DataTypes) => {
    const alias = 'Jugador';

    const cols = {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        club_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }

    const config = {
        tableName: 'jugadores',
        timestamps: false
    }

    const Jugador = sequelize.define(alias, cols, config);

    return Jugador;
}