import Joi from '@hapi/joi'

const ValidatorSchema = (schema: Joi.ObjectSchema, values: any) => {
    let { error } = schema.validate(values)
    if (error) {
        let message = error.details.map(el => el.message).join('\n')
        return {
            error: message
        }
    }
    return {
        validate: true
    }
}

export default ValidatorSchema