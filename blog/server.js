const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphQlSchema = require("./src/schema")
const graphQlResolvers = require("./src/resolvers")
const mongoose = require("mongoose")

const app = express()

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true,
    })
)

const uri = "mongodb+srv://admin:admin@cluster0.jrman.mongodb.net/blog?retryWrites=true&w=majority"
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
    .connect(uri, options)
    .then(() => app.listen(4000, console.log("Server is listening on 4000")))
    .catch(error => {
        throw error
    })