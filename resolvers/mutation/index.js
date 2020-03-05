module.exports = {
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
}