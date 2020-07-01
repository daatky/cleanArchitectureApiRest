const notFound = async () => {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    body: { error: 'Error, ruta no encontrada' },
    statusCode: 404
  }
}

export default notFound
