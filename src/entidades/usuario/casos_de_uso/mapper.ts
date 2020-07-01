const _mapperSingle = (usuario:any) => {
    return {
      'id': usuario._id,
      'email': usuario.email,
      'password': usuario.password,
      'fecha_creacion': usuario.fecha_creacion,
      'fecha_actualizacion': usuario.fecha_actualizacion
    };
  };
  
  const mapper = (data:any) => {
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return data.map(_mapperSingle)
    }
    return _mapperSingle(data)
  }
  
  export default mapper