module.exports = (sequelize, DataTypes) => {
    const alias = 'Club';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }

    const config = {
        tableName: 'clubes',
        timestamps: false
    }

    const Club = sequelize.define(alias, cols, config);

    Club.associate = (models) => {
        Club.hasMany(models.Jugador, {
            as: 'jugadores',
            timestamps: false,
            foreignKey: 'club_id'
        });

        Club.belongsToMany(models.Sponsor, {
            as: 'sponsores', // Nombre de la relación
            foreignKey: 'club_id', // Columna que hace referencia al PK de este modelo
            through: 'SponsorClub'// Relación a travez de modelo SponsorClub
        });
    }

    return Club;
}