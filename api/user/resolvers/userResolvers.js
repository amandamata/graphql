const userResolvers = {
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
