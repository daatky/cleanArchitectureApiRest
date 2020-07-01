import bodyParser from 'body-parser'
import config from 'config'
import express from 'express'
import { db_init } from './drivers/mongoose/index'
import Logger from './drivers/logging/logger'
import rutas from './drivers/routes/api_v1'
import notFound from './drivers/not-found/not-found'
import makeCallback from './drivers/express-callback'


class Server {
	app = express()
    port = (config.get('port')) ? config.get('port') : 3000
    logger = Logger({ config })
    db:any = null    

	applyMiddlewares(logger:any) {
        this.app.use(bodyParser.json())
        rutas.forEach(r => {
            this.app.use(r.group, r.rutas)
        })
        this.app.use(makeCallback(notFound, logger))
	}

	async start() {
        const logger = Logger({ config })
        this.applyMiddlewares(logger)
        this.db = await db_init({ logger, config })
        if (this.db) {
            this.app.listen(this.port, async () => {
                console.log(config.get('port'))
                console.log(this.port)
                this.logger.level = 'info'
                this.logger.info(`listening to port:${this.port}`)
            });
        }
	}
}

export const server = new Server();
