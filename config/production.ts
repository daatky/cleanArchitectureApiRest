import path from 'path'

const logPath = path.join(__dirname, '../../logs/production.log')

export default {
	env: "production",
	host: "0.0.0.0",
	port: 5001,
    mongo: {
        user: "db_pro_user",
        password: "db_pass",
        path: "localhost:27017/db_pro"
    },
    logging: {
        state: true,
        config: {
            appenders: { cheese: { type: 'file', filename: logPath } },
            categories: { default: { appenders: ['cheese'], level: 'error' }, info: { appenders: ['cheese'], level: 'info' } }
        }
    }
}