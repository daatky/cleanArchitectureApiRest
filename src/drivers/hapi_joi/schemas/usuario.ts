import Joi  from '@hapi/joi'

export const UsuarioSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } } )
        .required()
        .messages({
            "string.base": 'value of {#label} is invalid',
            "string.empty": '{#label} cannot be an empty field',
            "any.required": '{#label} is a required field'
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{7,30}$'))
        .required()
        .messages({
            "string.pattern.base": 'value of {#label} is invalid',
            "string.empty": '{#label} cannot be an empty field',
            "any.required": '{#label} is a required field'
        }),
    fecha_creacion: Joi.date().timestamp(),
    fecha_actualizacion: Joi.date().timestamp()
})
// En caso de requerir errores personalizados, revisar posibles tipos de error en https://github.com/hapijs/joi/blob/master/API.md#list-of-errors
// type.patter.base valida tipo en caso de patter
// type.base valida tipo del campo especificado por type (type puede ser string, number....)
// type.max valor maximo {#limit} para imprimir el valor maximo
// type.min valor minimo {#limit} para imprimir el valor minimo
// {#label} para imprimir el nombre del campo
