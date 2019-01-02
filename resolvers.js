import Producto from './modelos/producto';
export  const resolvers = {
    Query : {
       async obtenerProducto(root, {_id}){
           return await Producto.findById(_id);
       },
       async obtenerProductos(){
           return await Producto.find();
        }
    },
    Mutation: {
        async crearProducto(root, {input}){
           return await Producto.create(input);
        },
        async actualizarProducto(root, {_id, input}){
            return await Producto.findOneAndUpdate({_id},input,{new: true})
        },
        async borrarProducto(root, {_id}){
            return await Producto.findOneAndRemove({_id});
        }
    }
};