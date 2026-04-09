const mongoose = require("mongoose");
const Customerschema =  new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number
});

const Customer = mongoose.model("Customer", Customerschema);
module.exports = Customer;