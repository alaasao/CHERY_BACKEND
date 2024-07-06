require("dotenv").config()
const express = require("express")
const app = express()
const connectDb=require('./db/connect')
app.use(express.json())


const port = process.env.PORT || 3000

const start = async() => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log("app is apping")
        })
    } catch (err) {
        console.log(err)
    }
}
start()