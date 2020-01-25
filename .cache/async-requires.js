// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-posts-author-template-tsx": () => import("./../src/templates/posts/author.template.tsx" /* webpackChunkName: "component---src-templates-posts-author-template-tsx" */),
  "component---src-templates-pages-articles-template-tsx": () => import("./../src/templates/pages/articles.template.tsx" /* webpackChunkName: "component---src-templates-pages-articles-template-tsx" */),
  "component---src-templates-posts-article-template-tsx": () => import("./../src/templates/posts/article.template.tsx" /* webpackChunkName: "component---src-templates-posts-article-template-tsx" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-about-tsx": () => import("./../src/pages/about.tsx" /* webpackChunkName: "component---src-pages-about-tsx" */),
  "component---src-pages-careers-tsx": () => import("./../src/pages/careers.tsx" /* webpackChunkName: "component---src-pages-careers-tsx" */),
  "component---src-pages-contact-tsx": () => import("./../src/pages/contact.tsx" /* webpackChunkName: "component---src-pages-contact-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-pages-labs-index-tsx": () => import("./../src/pages/labs/index.tsx" /* webpackChunkName: "component---src-pages-labs-index-tsx" */),
  "component---src-pages-labs-novela-tsx": () => import("./../src/pages/labs/novela.tsx" /* webpackChunkName: "component---src-pages-labs-novela-tsx" */),
  "component---src-pages-preview-tsx": () => import("./../src/pages/preview.tsx" /* webpackChunkName: "component---src-pages-preview-tsx" */)
}

