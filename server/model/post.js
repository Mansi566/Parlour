const mongoose = require("mongoose");

// Changed 'Postschema' to 'postSchema' (standard naming convention)
const postSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    price: { 
        type: Number, 
        required: true, 
        min: 0 // Prevents accidental negative prices
    },
    status: { 
        type: String, 
        enum: ['rent', 'sell'], 
        default: 'sell' 
    },
    createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;