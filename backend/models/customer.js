const { DataTypes } = require("sequelize");
const sequelize = require("../confilg/database");

const Customer = sequelize.define("Customer", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
});
module.exports = Customer;
