const userResolvers = {
    Query : {
        users: (root, args, { dataSources }) => dataSources.usersApi.getUsers()
    }
}

module.exports = userResolvers
