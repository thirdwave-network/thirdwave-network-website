/**
 * Isomorphic settings file (hence not typescript and commonjs notation)
 */

module.exports.urls = {
  authors: 'authors',
  articles: 'articles',
  netlify: {
    preview: '/.netlify/functions/preview',
  },
  linkedin: 'https://www.linkedin.com/company/',
  instagram: 'http://instagram.com/',
  dribbble: 'http://dribbble.com/',
  twitter: 'https://twitter.com/thirdwave_',
  facebook: 'https://www.facebook.com/thirdwave.network/',
}

module.exports.imageQuality = 100

/**
 * What size do we want to cut hero images to?
 */
module.exports.heroImageDimensions = [
  ['CardPreview', 1200, 680],
  ['Article__Featured', 1200, 825],
  ['Article__Hero', 3200, 2200],
]
