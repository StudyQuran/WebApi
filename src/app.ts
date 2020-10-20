import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import Config from './config/index'
import Routes from './routes/index'
import './config/Init/initMongoDb'

const startServer = () => {
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use(morgan('dev'))
  app.use('/', Routes.HomeRoutes)
  // app.use('/auth', Routes.AuthRoutes)
  app.use(Config.Errors.Error404)
  app.use(Config.Errors.ErrorHandlder)
  app.listen(Config.Env.server.PORT, () => console.log(`Server on => http://localhost:${Config.Env.server.PORT}`))
}

startServer()
