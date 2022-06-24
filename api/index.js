const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const userResovers = require('./user/resolvers/userResolvers.js')
const UsersApi = require('./user/datasource/user')

const typeDefs = [userSchema]
const resolvers = [userResovers]

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            usersApi: new UsersApi()
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Server running at ${ url }`)
})