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

var db = require('./models');
const User = db.users;

const RootQuery = new GraphQLObjectType({
    name: 'xyz',
    fields:{
        userList:{
            type: new GraphQLList(UserType),
            resolve(parent,args){
                let data = db.users.findAll()
                return data;
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery})