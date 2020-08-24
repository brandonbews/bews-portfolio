module.exports = {
  siteMetadata: {
    title: `brandon-bews-portfolio`,
    description: `This is my personal portfolio`,
    author: `@brandonbews`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'xzm6jku',
        },
      },
    },
  ],
}
