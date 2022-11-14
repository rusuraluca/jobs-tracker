import express from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

const app = express()

app.get('/', (req, res) => {
    throw new Error('error')
    res.send('Welcome')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

dotenv.config()

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})