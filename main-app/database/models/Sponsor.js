module.exports = (sequelize, DataTypes) => {
    const alias = 'Sponsor';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        tableName: 'sponsores',
        timestamps: false
    }

    const Sponsor = sequelize.define(alias, cols, config);

    Sponsor.associate = (models) => {
        Sponsor.belongsToMany(models.Club, {
            as: 'clubes', // Nombre de la relación
            foreignKey: 'sponsor_id', // Columna que hace referencia al PK de este modelo
            through: 'SponsorClub' // Relación a travez de modelo SponsorClub
        });
    }

    return Sponsor;
}