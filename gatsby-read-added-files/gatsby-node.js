exports.onCreateNode = ({ node, getNode }) => {
console.log("!!11", internal.type)
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}