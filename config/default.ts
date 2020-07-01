  
import path from 'path'

const logPath = path.join(__dirname, '../logs/development.log')

export default {
	env: "development",
	host: "0.0.0.0",
	port: 5000,
    mongo: {
        user: "db_dev_user",
        password: "db_pass",
        path: "localhost:27017/db_dev"
    },
    logging: {
        state: true,
        config: {
            appenders: { cheese: { type: 'file', filename: logPath } },
            categories: { default: { appenders: ['cheese'], level: 'error' }, info: { appenders: ['cheese'], level: 'info' } }
        }
    }
}