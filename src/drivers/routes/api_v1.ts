import usuarioRoutes from '../../entidades/usuario/drivers/usuario_api_v1'

export default [
    {
        group: '/v1/usuarios',
        rutas: usuarioRoutes
    }
]