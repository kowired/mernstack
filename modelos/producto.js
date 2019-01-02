import  mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    titulo : {
        type: String,
        required: true
    },
    cantidad: {
        type: Number
    }
});

export default mongoose.model('producto', ProductoSchema);