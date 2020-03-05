module.exports = {
  todos(root, args, context) {
    return context.prisma
      .user({
        id: root.id
      })
      .todoes()
  },
}