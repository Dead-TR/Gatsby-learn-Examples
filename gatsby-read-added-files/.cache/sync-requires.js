const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/src/pages/about.js"))),
  "component---src-pages-files-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/src/pages/files.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/src/pages/index.js"))),
  "component---src-pages-mark-js": hot(preferDefault(require("/home/usr01/etc/gatsby-starter/src/pages/mark.js")))
}

