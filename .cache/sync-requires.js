const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-posts-author-template-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/templates/posts/author.template.tsx"))),
  "component---src-templates-pages-articles-template-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/templates/pages/articles.template.tsx"))),
  "component---src-templates-posts-article-template-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/templates/posts/article.template.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/404.tsx"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/about.tsx"))),
  "component---src-pages-careers-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/careers.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/index.tsx"))),
  "component---src-pages-labs-index-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/labs/index.tsx"))),
  "component---src-pages-labs-novela-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/labs/novela.tsx"))),
  "component---src-pages-preview-tsx": hot(preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/preview.tsx")))
}

