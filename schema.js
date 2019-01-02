import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
 type Producto {
  _id: ID!
  titulo: String!
  cantidad: Int
 }
 type Query {
    obtenerProducto(_id: ID!): Producto
    obtenerProductos: [Producto]
 }
 input ProductoIngreso {
  titulo: String!
  cantidad: Int
 }
 type Mutation {
  crearProducto(input: ProductoIngreso) : Producto
  actualizarProducto(_id: ID!, input: ProductoIngreso): Producto
  borrarProducto(_id: ID!) : Producto
 }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;