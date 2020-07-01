import UsuarioModelo from '../../../../drivers/mongoose/modelos/usuarios/usuarioModelo'
import makeUsuario from '../../entidad/index'
import mapper from '../mapper'

const caseCrearUsuario = async (data:any) => {
    let usuario = makeUsuario(data)
    let newUsuario = {
        email: usuario.getEmail(),
        password: usuario.getPassword()
    }
    const result = mapper(await UsuarioModelo.create(newUsuario))
    return result
}

export default caseCrearUsuario