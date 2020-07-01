import log4js from 'log4js'

const logger = ({ config } : { config:any }) => {
  const logging:any = config.get('logging')
  log4js.configure(logging.config)
  const logger = log4js.getLogger()
  return logger
}

export default logger
