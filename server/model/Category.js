import mongoose from "mongoose";
const Categoryschema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date to "now"
  },
});

const Category = mongoose.model("Category", Categoryschema);
export default Category;
