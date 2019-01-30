const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect("mongodb://app:a123456@ds213705.mlab.com:13705/graphql-course", { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log("Listening for requests on port 4000");
});