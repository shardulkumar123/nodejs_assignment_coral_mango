import express, { Application } from 'express'
import cors from 'cors'
// require('./database/conn')
// import connectDB from './database/conn'
import router from './routes'

const createServer = (): express.Application => {
  const app: Application = express()
  // connectDB('mongodb://localhost:27017/ResturantDB')

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(router)

  return app
}

export default createServer