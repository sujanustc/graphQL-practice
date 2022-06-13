const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = graphql

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields:{
        userList:{
            type: new GraphQLList(UserType),
            resolve(parent,args){
                let data = [
                    {id:12,name:'codeimprove', email:'codeimprove@gmail.com', phone: '123456789'},
                    {id:13,name:'code', email:'code@gmail.com', phone: '1123456789'},
                ]
                return data;
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery})