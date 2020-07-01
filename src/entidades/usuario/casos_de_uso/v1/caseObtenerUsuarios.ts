import UsuarioModelo from '../../../../drivers/mongoose/modelos/usuarios/usuarioModelo'
import mapper from '../mapper'

const caseObtenerUsuario = async () => {    
    const result = await UsuarioModelo.find({})
    return mapper(result)
}

export default caseObtenerUsuario