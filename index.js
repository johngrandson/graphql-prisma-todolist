const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    todosByValue(root, args, context) {
      return context.prisma.todoes({ where: { done: args.value } })
    },
    todos(root, args, context) {
      return context.prisma.todoes()
    },
    todo(root, args, context) {
      return context.prisma.todo({ id: args.todoId })
    },
    todoByUser(root, args, context) {
      return context.prisma.user({ id: args.userId }).todoes()
    },
    users(root, args, context) {
      return context.prisma.users()
    }
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({
        name: args.name
      })
    },
    createTodo(root, args, context) {
      return context.prisma.createTodo({
        title: args.title,
        owner: {
          connect: { id: args.userId }
        },
      })
    },
    makeDone(root, args, context) {
      return context.prisma.updateTodo({
        where: { id: args.todoId },
        data: { done: true }
      })
    },
    removeUser(root, args, context) {
      return context.prisma.deleteUser({
        where: { id: args.userId }
      })
    },
    removeTodo(root, args, context) {
      return context.prisma.deleteTodo({
        id: args.todoId
      })
    }
  },
  User: {
    todos(root, args, context) {
      return context.prisma
        .user({
          id: root.id
        })
        .todoes()
    },
  },
  Todo: {
    owner(root, args, context) {
      return context.prisma
        .todo({
          id: root.id
        })
        .owner()
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))