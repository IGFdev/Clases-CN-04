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
        }
    }

    const config = {
        tableName: 'clubes',
        timestamps: false
    }

    const Club = sequelize.define(alias, cols, config);

    return Club;
}