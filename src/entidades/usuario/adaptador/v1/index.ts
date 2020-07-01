import config from 'config'
import Logger from '../../../../drivers/logging/logger'
import { caseCrearUsuario, caseObtenerUsuarios } from '../../casos_de_uso/v1/index'
import makeAdapterCrearUsuario from './adapterCrearUsuario'
import makeAdapterObtenerUsuarios from './adapterObtenerUsuarios'

const logger = Logger({ config })

const crearUsuario = makeAdapterCrearUsuario({ caseCrearUsuario, logger })
const obtenerUsuarios = makeAdapterObtenerUsuarios({ caseObtenerUsuarios, logger })


// Object.freeze hace las propiedades del objeto inmutables
const usuarioControlador = Object.freeze({
    crearUsuario,
    obtenerUsuarios
})

export default usuarioControlador
export { crearUsuario, obtenerUsuarios }