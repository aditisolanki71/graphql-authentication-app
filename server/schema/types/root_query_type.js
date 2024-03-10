const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
console.log("inside rootquery")
const UserType = require('./user_type');
// const AuthType = require('./user_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:() => ({
    dummyField: {
      type: GraphQLID
    },
    user: {
      type: UserType,
      resolve(parentValue, args,req) {
        console.log("*******args", req.user)
        // console.log("*******req is", req.user)
        return req.user;
      }
    }
  })
});


console.log("------------------users----",RootQuery.user);
module.exports = RootQuery;
