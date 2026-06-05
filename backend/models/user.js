const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }

User.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
firstName: {
type: DataTypes.STRING, allowNull: false
},
lastName: {
type: DataTypes.STRING, allowNull: false
},
email: {
type: DataTypes.STRING, allowNull: false, unique: true
},
userName:{
    type: DataTypes.STRING, allowNull: false
},
userPassword: {
    type: DataTypes.STRING, allowNull: false
},
createdAt: {
    type: DataTypes.DATE, allowNull: false
},
updatedAt: {
    type: DataTypes.DATE, allowNull: false
}},
{
sequelize: sequelizeInstance, modelName: 'users', 
timestamps: true, freezeTableName: true
}
)
module.exports = User;