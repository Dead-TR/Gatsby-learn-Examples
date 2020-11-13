const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-caches-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/.cache/caches/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/src/templates/blog-post.js")))
}

