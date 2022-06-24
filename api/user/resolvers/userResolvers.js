const { GraphQLScalarType } = require('graphql')

const userResolvers = {
    Datetime: new GraphQLScalarType({
        name: 'Datetime', 
        description: 'string date time in ISO-8601 format',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),

    Query: {
        users: (root, args, { dataSources }) => dataSources.usersApi.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersApi.getUserById(id),
    },
    
    Mutation: {
        addUser: async (root, user, { dataSources }) => dataSources.usersApi.addUser(user),
        updateUser: async (root, userUpdated, { dataSources }) => dataSources.usersApi.updateUser(userUpdated),
        deleteUser: async (root, {id}, { dataSources }) => dataSources.usersApi.deleteUser(id)
    }
}

module.exports = userResolvers
