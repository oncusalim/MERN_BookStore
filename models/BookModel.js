
const mongoose = require("mongoose")


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
    },
    author: {
        type: String,
        required: true
    },
    published: {
        type: Date,
       
    },
    description: {
        type: String,
    
    },
    page: {
        type: Number ,
    },
    url:{
        type: String,
    },
    price: {
        type: Number,
    },
    rating: {
        type: Number,
    }
})

module.exports = Book = mongoose.model("book", BookSchema)