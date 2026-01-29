const express = require("express")
const app = express()
const router = require("./Routes/userRoutes")
const authRoutes = require("./Routes/AuthRoutes")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.dburl)
.then(() => {
    console.log("Db Connected");
})
.catch((err) => {
    console.log("Log the error");
})

app.use("/api/users", router)
app.use("/auth", authRoutes)

app.listen("5101", () => {
    console.log("Running on 5101");
})