const Book = require("../models/BookModel")
const User = require("../models/UserModel")

exports.getBookList = async(req,res)=>{
   try{
       const bookList = await Book.find();
        res.status(200).json({bookList});

   } catch(err) {
       console.log(err.message);
       res.status(500).json({ errors: [{ message: "Server1 Error" }] })
   }
}

exports.getBookDetails = async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json({book})
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ errors: [{ message: "Server2 Error" }] })
    }
}