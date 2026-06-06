// const { DataTypes, Model} = require("sequelize")
// let dbConnect = require('../dbConnect')

// const sequelizeInstance = dbConnect.Sequelize

// class Champion extends Model { }

// Champion.init({
//     champName: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     id: {
//         type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
//     },
//     champRole: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     lane: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     passName: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     passIcon: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     passDesc: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     qName: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     qIcon: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     qDesc: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     qCD: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     wName: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     wIcon: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     wDesc: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     wCD: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     eName: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     eIcon: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     eDesc: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     eCD: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     rName: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     rIcon: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     rDesc: {
//         type: DataTypes.STRING, allowNull: false
//     },
//     rCD: {
//         type: DataTypes.STRING, allowNull: false
//     }},
//     {
//         sequelize: sequelizeInstance, modelName: 'champions',
//         timestamps: false, freezeTableName: true
//     }
// )

// module.exports = Champion