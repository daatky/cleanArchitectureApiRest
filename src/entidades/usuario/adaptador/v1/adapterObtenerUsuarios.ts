const makeAdapterObtenerUsuarios = ({ caseObtenerUsuarios, logger } : { caseObtenerUsuarios:any, logger:any }) => {
    const adaptadorObtenerUsuarios = async (httpRequest:any) => {
        try {
            const usuarios = await caseObtenerUsuarios()
            return {
                header: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: { usuarios }
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
    return adaptadorObtenerUsuarios
}

export default makeAdapterObtenerUsuarios