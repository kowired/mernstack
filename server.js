
import express from 'express';
import graphlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

const app = express();
const PORT = 30001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern_db');

app.get('/', (req, res) => {
    res.json({
        msg: 'Bienvenido al tutorial MERN'
    })
});
app.use('/graphql', graphlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(PORT, () => {
    console.log(`El servidor escucha en el puerto ${PORT}`);
});