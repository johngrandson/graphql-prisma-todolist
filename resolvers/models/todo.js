module.exports = {
  owner(root, args, context) {
    return context.prisma
      .todo({
        id: root.id
      })
      .owner()
  },
}