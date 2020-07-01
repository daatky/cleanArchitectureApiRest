const makeExpressCallback = (controller:any, logger:any) => {
  return (req:any, res:any) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent')
      }
    }
    // Enviar data de la peticion al log
    const source = {
      ip: httpRequest.ip,
      browser: httpRequest.headers['User-Agent'],
      referer: (httpRequest.headers['Referer']) ? httpRequest.headers['Referer'] : '',
      path: httpRequest.path
    }
    logger.level = 'info'
    logger.info('Request recibida a ' + source.path + ' de:  IP => ' + source.ip + ', browser => ' + source.browser + ', referer => ' + source.referer + '. Data de la peticion, Method: ' + httpRequest.method + ' Body: ' + JSON.stringify(httpRequest.body) + ' Query: ' + JSON.stringify(httpRequest.query) + ' Params: ' + JSON.stringify(httpRequest.params))
    // Ejecutar controlador
    controller(httpRequest)
      .then((httpResponse:any) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }
        res.type('json')
        res.status(httpResponse.statusCode).send(httpResponse.body)
      })
      .catch((e:any) => res.status(500).send({ error: 'An unkown error occurred.' }))
  }
}

export default makeExpressCallback
