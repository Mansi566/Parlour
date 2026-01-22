const mongoose = require("mongoose");
const customerschema =  new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number
});

const Customer = mongoose.model("Customer", customerschema);
module.exports = Customer;