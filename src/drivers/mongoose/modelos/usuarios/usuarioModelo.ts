import mongoose from 'mongoose'
import { timeStamp } from 'console';
import { number } from '@hapi/joi'

const schemaOptions = {
    timestamps: { createdAt: 'fecha_creacion', updatedAt: 'fecha_actualizacion' },
}
 
const campos = new mongoose.Schema({
    email:String,
    password:String
}, schemaOptions);
 
const UsuarioModelo = mongoose.model<mongoose.Document>('usuario', campos)
 
export default UsuarioModelo