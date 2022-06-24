const arrayUsers = [
    {
        name: "Amanda",
        active: true
    },
    {
        name: "Marcia",
        active: false
    }
]

const userResolvers = {
    Query : {
        users: () => arrayUsers,
        firstUser: () => arrayUsers[0]
    }
}
module.exports = userResolvers
