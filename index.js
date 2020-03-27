require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga'); 
const  { importSchema } = require('graphql-import');
const resolvers = require('./src/resolvers');

const mongoose = require('mongoose');

mongoose.connect( process.env.MONGO_URL, {
useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const mongo = mongoose.connection();

mongo.on('error', error => console.log(error)).once('open', () => console.log('Connected to Database'));

const typeDefs = importSchema(__dirname+'/schema.graphql');
/**
 * 
 * root: Información del server de gql
 * params: datos que envia el cliente y se definen en el type defs
 * context: objeto por el cual se comunican los resolvers
 * info: el query que se ejecutó por el cliente
 * 
 */
const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => console.log('Servidor arriba en puerto 4000!'));