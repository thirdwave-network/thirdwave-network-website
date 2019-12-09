// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/404.js")),
  "component---src-pages-careers-js": preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/careers.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/twaszczyk/workspaces/thirdwave-network-website/src/pages/index.js"))
}

