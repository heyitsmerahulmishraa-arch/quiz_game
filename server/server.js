import express, { json } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './utils/db_connect.js'
import authRouter from './routers/auth_router.js'
import quizRouter from './routers/quiz_router.js'
import questionRouter from './routers/question.router.js'

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Server is running")
})

app.use("/api/auth", authRouter)
app.use("/api/quiz", quizRouter)
app.use("/api/question", questionRouter)


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}).catch((error) => {
    console.error('Failed to connect to the database:', error)
    process.exit(1)
})