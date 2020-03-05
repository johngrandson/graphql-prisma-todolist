module.exports = `
  type Query {
    todos: [Todo!]!
    todosByValue(value: Boolean!): [Todo!]!
    todo(todoId: ID!): Todo
    todoByUser(userId: ID!): [Todo!]!
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!): User
    createTodo(title: String!, done: Boolean!, userId: ID!): Todo
    updateTodo(todoId: ID!, done: Boolean!): Todo
    makeDone(todoId: ID!): Todo
    removeTodo(todoId: ID!): Todo
    removeUser(userId: ID!): User
  }

  type User {
    id: ID!
    name: String!
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    title: String!
    done: Boolean!
    owner: User
  }
`