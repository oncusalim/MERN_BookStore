const mongoose = require("mongoose");

const connectDB = async() =>{

    try{
        await mongoose.connect(process.env.MONGODB_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true 
        });
        console.log("MongoDB connected")
    }
    catch(err){
        console.log("MongoDB err : ", err)
    }
}

module.exports = connectDB