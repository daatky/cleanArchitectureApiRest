import path from 'path'

const logPath = path.join(__dirname, '../../logs/test.log')

export default {
	env: "test",
	host: "0.0.0.0",
	port: 5002,
    mongo: {
        user: "db_test_user",
        password: "db_test",
        path: "localhost:27017/db_test"
    },
    logging: {
        state: false,
        config: {
            appenders: { cheese: { type: 'file', filename: logPath } },
            categories: { default: { appenders: ['cheese'], level: 'error' }, info: { appenders: ['cheese'], level: 'info' } }
        }
    }
}