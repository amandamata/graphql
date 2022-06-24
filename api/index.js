const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')

const users = [
    {
        name: "Amanda",
        active: true
    },
    {
        name: "Marcia",
        active: false
    }
]

const typeDefs = [userSchema]
const resolvers = []
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
    console.log(`Server running at ${ url }`)
}) 