require('dotenv').config()

const proxy = require('http-proxy-middleware')

exports.siteMetadata = {
  title: 'thirdwave.network',
  siteUrl: 'https://thirdwave.network',
  pathPrefix: `/`,
}

exports.plugins = [
  'gatsby-plugin-react-helmet',
  `gatsby-image`,
  `gatsby-plugin-typescript`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-transformer-remark`,
  'gatsby-plugin-netlify',
  'gatsby-plugin-netlify-cache',
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName:
        process.env.NODE_ENV === 'development' ||
        process.env.TARGET === 'staging',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: "txu76a3w3kbd",
      accessToken: "8dwdZiYRd2SoyqFegwmbaXCRLnpic73OleNX5Ao0NgI",
      environment: "master",
    },
  },

  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'thirdwave.network',
      short_name: 'thirdwave.network',
      start_url: '/',
      background_color: '#111216',
      theme_color: '#111216',
      display: 'standalone',
      icon: 'src/assets/favicon/favicon.png',
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://thirdwave.network',
      sitemap: 'https://thirdwave.network/sitemap.xml',
      policy: [
        { userAgent: '*', disallow: ['/.netlify/', '/articles/preview/'] },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-148301372-1',
    },
  },
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: '2183075648607369',
    },
  },

  // These are our local plugins that can be found within ./plugins
  'gatsby-transformer-enhance-contentful',
  'gatsby-transformer-contentful-rich-text-html-renderer',
  `gatsby-plugin-twitter`,
]

// For lambda functions
exports.developMiddleware = app => {
  app.use(
    '/.netlify/functions/',
    proxy({
      target: 'http://localhost:9000',
      pathRewrite: {
        '/.netlify/functions/': '',
      },
    })
  )
}
