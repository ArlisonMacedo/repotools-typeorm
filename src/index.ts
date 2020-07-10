import 'reflect-metadata'
import express from 'express'
import routes from './routes'
import { createConnection } from 'typeorm'
import cors from 'cors'

const app = express()
createConnection()

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use(routes)

app.listen(3333)
