import express from 'express'
import Config from '../config/index'
import Settings from '../settings.json'

export const HomeRoutes = express.Router()

HomeRoutes.get('/', async (req, res, next) => {
  res.send({
    name: Settings.ProjectName,
    version: Settings.ProjectVersion,
    port: Config.Env.server.PORT
  })
})
