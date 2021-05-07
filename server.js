const express = require("express")
const app = express();
const router = require("./router/router")

require("dotenv").config()

const connectDB  = require("./models/connectDB")
connectDB();

app.use(express.json())
app.use("/api", router)

app.listen(process.env.PORT,()=>{
    console.log(`I'm listening on port ${process.env.PORT}`)
})