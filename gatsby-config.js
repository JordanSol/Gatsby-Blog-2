/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 module.exports = {
  siteMetadata: {
    author: 'Jordan Freeman',
    title: 'JF Dev'
  },
  plugins: [
    {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: 'urbvdrwp8aog',
          accessToken: '4I87g12Xih4XoD6fMXEzTPKxXTl37blhORpdgfYBN24'
        }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
