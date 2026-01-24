import mongoose from "mongoose";
const customerschema =  new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number
});

const Customer = mongoose.model("Customer", customerschema);
export default Customer;