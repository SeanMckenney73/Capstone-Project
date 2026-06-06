// const { DataTypes, Model } = require("sequelize");
// let dbConnect = require("../dbConnect");
// const sequelizeInstance = dbConnect.Sequelize;
// class Rune extends Model { }

// Rune.init({
// id: {
// type: DataTypes.INTEGER, allowNull: false, autoIncrement:
// true, primaryKey: true
// },
// runeName: {
// type: DataTypes.STRING, allowNull: false
// },
// runeDesc: {
// type: DataTypes.STRING, allowNull: false
// },
// runeImg: {
// type: DataTypes.STRING, allowNull: false, 
// }},
// {
// sequelize: sequelizeInstance, modelName: 'runes', 
// timestamps: false, freezeTableName: true
// }
// )
// module.exports = Rune;