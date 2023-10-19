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
            allowNull: false,
            references: {
                model: 'clubes',
                key: 'id'
            }
        },
    }

    const config = {
        tableName: 'jugadores',
        timestamps: false
    }

    const Jugador = sequelize.define(alias, cols, config);

    Jugador.associate = (models) => {
        Jugador.belongsTo(models.Club, {
            as: 'club',
            timestamps: false,
            foreignKey: 'club_id'
        });
    }

    return Jugador;
}