const buildMakeUsuario = (schema: any, validatorSchema: any) => {
    return ({
        email = '',
        password = ''
    } = {}) => {
        let { error, values } = validatorSchema(schema, { email, password })
        if (error) throw new Error(error)

        return {
            getEmail: () => email,
            getPassword: () => password
        }
    }
}

export default buildMakeUsuario