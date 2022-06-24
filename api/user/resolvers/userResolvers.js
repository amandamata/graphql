const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) => dataSources.usersApi.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.usersApi.getUserById(id),
    },
    
    Mutation: {
        addUser: async (root, user, { dataSources }) => dataSources.usersApi.addUser(user)
    }
}

module.exports = userResolvers
