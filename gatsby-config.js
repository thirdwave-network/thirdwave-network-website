const siteMetadata = {
  title: 'thirdwave.network',
}

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-react-next',
  `gatsby-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  'gatsby-plugin-netlify-cache',
  // 'gatsby-plugin-mdx',
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: process.env.NODE_ENV === 'development',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets/`,
    },
  },
  // {
  //   resolve: `gatsby-plugin-mdx`,
  //   options: {
  //     name: `mdxpages`,
  //     path: `${__dirname}/src/mdxpages/`,
  //   },
  // },
  // {
  //   resolve: "gatsby-plugin-page-creator",
  //   options: {
  //     path: `/src/`,
  //   },
  // },
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: './static/favicon.png',
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false,
      },
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
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-',
    },
  },
]

module.exports = {
  plugins,
  siteMetadata,
}
