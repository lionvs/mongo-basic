const { userSchema, orderSchema } = require("./schema");

const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xrqcf.mongodb.net/test-mongo?retryWrites=true&w=majority`;

const db = mongoose.createConnection(DB_CONNECTION_STRING);

const Users = db.model('Users', userSchema);
const Orders = db.model('Orders', orderSchema);

exports.db = db;
exports.Users = Users;
exports.Orders = Orders;