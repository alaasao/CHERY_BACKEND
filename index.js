require("dotenv").config()
const express = require("express")
require("express-async-errors")
const cors = require("cors")
const connectDb = require('./db/connect')
const cookieParser = require("cookie-parser")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")


const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())


const authRouter = require("./routes/auth")
const carRouter = require("./routes/car")
const clientRouter = require("./routes/client")
const eventRouter = require("./routes/event")
const faqRouter = require("./routes/faq")
const pieceRouter = require("./routes/piece")
const ticketRouter = require("./routes/ticket")
const bonRouter = require("./routes/bon")
const rdvRouter = require("./routes/Rdv")

app.use("/auth", authRouter)
app.use("/cars", carRouter)
app.use("/clients", clientRouter)
app.use("/events", eventRouter)
app.use("/faqs", faqRouter)
app.use("/pieces", pieceRouter)
app.use("/tickets", ticketRouter)
app.use("/bon",bonRouter)
app.use("/rdv",rdvRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)


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