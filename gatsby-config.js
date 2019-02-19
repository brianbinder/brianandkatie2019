module.exports = {
  siteMetadata: {
    title: `Brian & Katie`,
    description: `Details about Katherine Maziarski and Brian Binder\'s upcoming wedding.`,
    author: `Brian Binder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
