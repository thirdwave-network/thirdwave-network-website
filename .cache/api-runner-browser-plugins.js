module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Narative","short_name":"Narative","start_url":"/","background_color":"#111216","theme_color":"#111216","display":"standalone","icon":"src/assets/favicon/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-118232427-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-facebook-pixel/gatsby-browser.js'),
      options: {"plugins":[],"pixelId":"2183075648607369"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
