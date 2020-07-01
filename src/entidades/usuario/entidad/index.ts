import buildMakeUsuario from './usuarioEntidad'
import Schemas from '../../../drivers/hapi_joi/schemas/index'
import ValidatorSchema from '../../../drivers/hapi_joi/validator/validator'

const makeUsuario = buildMakeUsuario(Schemas.UsuarioSchema, ValidatorSchema)

export default makeUsuario
