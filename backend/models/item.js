// const { DataTypes, Model } = require("sequelize");
// let dbConnect = require("../dbConnect");
// const sequelizeInstance = dbConnect.Sequelize;
// class Item extends Model { }

// Item.init({
// id: {
// type: DataTypes.INTEGER, allowNull: false, unique: true, autoIncrement:
// true, primaryKey: true
// },
// itemName: {
// type: DataTypes.STRING, allowNull: false
// },
// itemType: {
// type: DataTypes.STRING, allowNull: false
// },
// itemDesc: {
// type: DataTypes.STRING, allowNull: true
// },
// itemAddDesc:{
//     type: DataTypes.STRING, allowNull: true
// },
// firstStat: {
//     type: DataTypes.STRING, allowNull: false
// },
// secondStat: {
//     type: DataTypes.DATE, allowNull: true
// },
// thirdStat: {
//     type: DataTypes.DATE, allowNull: true
// },
// fourthStat: {
//     type: DataTypes.DATE, allowNull: true
// },
// textImg: {
//     type: DataTypes.STRING, allowNull: false
// },
// firstTag: {
//     type: DataTypes.STRING, allowNull: true
// },
// secondTag: {
//     type: DataTypes.STRING, allowNull: true
// },
// thirdTag: {
//     type: DataTypes.STRING, allowNull: true
// },
// fourthTag: {
//     type: DataTypes.STRING, allowNull: true
// },
// itemCost: {
//     type: DataTypes.INTEGER, allowNull: false
// }},
// {
// sequelize: sequelizeInstance, modelName: 'items', 
// timestamps: false, freezeTableName: true
// }
// )
// module.exports = Item;