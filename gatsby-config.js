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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-pieces`,
        path: `${__dirname}/src/portfolio-pieces`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100,
              quality: 60,
              withWebp: true,
              showCaptions: true,
            },
          },
        ],
      },
    },
    // `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
