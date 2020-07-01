import express from 'express'
import usuarioControlador from '../adaptador/v1/index'
import makeCallBack from '../../../drivers/express-callback/index'

import Logger from '../../../drivers/logging/logger'
import config from 'config'

const logger = Logger({ config })

const router = express.Router()

router.post('/crearUsuario', makeCallBack(usuarioControlador.crearUsuario, logger))
router.get('/obtenerUsuarios', makeCallBack(usuarioControlador.obtenerUsuarios, logger))

export default router


