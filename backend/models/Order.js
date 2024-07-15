const { DataTypes } = require("sequelize");
const sequelize = require("../confilg/database");
const Customer = require("./customer");

const Order = sequelize.define("Order", {
  status: { type: DataTypes.STRING, allowNull: false },
});
Order.belongsTo(Customer);
Customer.hasMany(Order);
module.exports = Order;
