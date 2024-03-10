const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;


const UserType = new GraphQLObjectType({
    name:  'UserType',
    fields: () => ({
        //imp for dataIdFromObject
        id: { type: GraphQLID},
      email: { type: GraphQLString }
    })
  });
  
  module.exports = UserType;