const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query{
        hello:String
        nani:String
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello world",
        nani: () => "Hello nani",
    }
}





const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.use((req, res) => {
        res.send("Hey bro server is running...");
    })
    app.listen(4000, () => {
        console.log("App is running at port 4000")
    })
}


startServer();