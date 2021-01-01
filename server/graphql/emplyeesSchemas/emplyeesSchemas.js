var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
// var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
// var GraphQLInt = require('graphql').GraphQLInt;
// var GraphQLDate = require('graphql-date');
var employeesModel = require('./../../models/employee.model');



var employeesType = new GraphQLObjectType({
    name: 'employees',
    fields: function () {
      return {
        _id: {
          type: GraphQLString
        },
        firstName: {
          type: GraphQLString
        },
        lastName: {
            type: GraphQLString
          },
          email: {
          type: GraphQLString
        },
        phone: {
          type: GraphQLString
        },
        state: {
          type: GraphQLString
        },
        country: {
            type: GraphQLString
          }
      }
    }
  });

  var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
      return {
        employeess: {
          type: new GraphQLList(employeesType),
          resolve: function () {
            const employeess = employeesModel.find().exec()
            console.log("EMployess ",employeess)
            if (!employeess) {
              throw new Error('Error')
            }
            return employeess
          }
        },
        employees: {
          type: employeesType,
          args: {
            id: {
              name: '_id',
              type: GraphQLString
            }
          },
          resolve: function (root, params) {
            const employeesDetails = employeesModel.findById(params.id).exec()
            if (!employeesDetails) {
              throw new Error('Error')
            }
            return employeesDetails
          }
        }
      }
    }
  });

  module.exports = new GraphQLSchema({query: queryType});