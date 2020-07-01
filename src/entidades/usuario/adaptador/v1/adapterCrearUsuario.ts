const makeAdapterCrearUsuario = ({ caseCrearUsuario, logger } : { caseCrearUsuario:any, logger:any }) => {
    const adaptadorCrearUsuario = async (httpRequest:any) => {
        try {
            const data = httpRequest.body
            const usuario = await caseCrearUsuario({
                ...data
            })
            return {
                header: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(usuario.fecha_creacion).toUTCString()
                },
                statusCode: 201,
                body: { usuario }
            }
        } catch (e) {
            return {
                header: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: { 
                    error: e.message
                }
            }
        }
    }
    return adaptadorCrearUsuario
}

export default makeAdapterCrearUsuario