const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

/*
// Hardcoded data.
const customers = [
  {id: '1', name: 'John Doe', email: 'jd@gmail.com', age: 35},
  {id: '2', name: 'Steve', email: 'steve@gmail.com', age: 25},
  {id: '3', name: 'Sarah', email: 'sarah@gmail.com', age: 32},
] */

// Customer Type.
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt},
  })
});

// Root query.
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {type: GraphQLString}
      },
      resolve(parentValue, args) {
//        for (let i = 0; i < customers.length; i++) {
//          if (customers[i].id == args.id) {
//            return customers[i];
//          }
//        }
        return axios.get('http://localhost:3000/customers/' + args.id).then(res => res.data);
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/customers').then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
