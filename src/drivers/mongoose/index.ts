import mongoose from 'mongoose'

export const db_init = ({ logger, config } : { logger:any, config:any }) => {
    let env = config.get('env')
    let mongo:any = config.get('mongo')

    mongoose.Promise = Promise

    mongoose.connection.on('error', async (err) => {
        logger.level = 'error'
        logger.error(`MongoDB conexion error: ${err}`);
        process.exit(1)
    })

    mongoose.set('debug', (env === 'development'))

    mongoose.connect(
        'mongodb://' + mongo.user + ':' + mongo.password + '@' + mongo.path,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )

    return new Promise((resolve, reject) => {
        mongoose.connection.on('connected', () => {
            logger.level = 'info'
            logger.info(`Mongoose conexion por defecto abierta en ${mongo.path}`);
            resolve(mongoose.connection)
        })
    })
}