module.exports = (sequelize, DataTypes) => {
    const alias = 'SponsorClub';

    const cols = {
        club_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'clubes',
                key: 'id'
            }
        },
        sponsor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'sponsores',
                key: 'id'
            }
        },
        cobro_mensual: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'sponsor_club',
        timestamps: false
    }

    const SponsorClub = sequelize.define(alias, cols, config);

    return SponsorClub;
}