const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true,
            lowercase: true
        },
        content: {
            type: {},
            required: true,
            min: 20,
            max: 2000000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
