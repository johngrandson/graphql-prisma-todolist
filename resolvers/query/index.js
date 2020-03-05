module.exports = {
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
}