const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')

const { User, Todo } = require('./resolvers/models')

const resolvers = {
  Query,
  Mutation,
  User,
  Todo,
}

const server = new GraphQLServer({
  // The typeDefs constant defines your GraphQL schema 
  typeDefs: './schema/schema.graphql',
  // The resolvers object is the actual implementation of the GraphQL schema
  resolvers,
  context: {
    prisma,
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))