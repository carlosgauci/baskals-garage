module.exports = {
  siteMetadata: {
    title: `Baskal's Garage`,
    description: `Your one stop shop for mechanical repairs & vehicle servicing in Gozo.`,
    url: `https://www.baskalsgarage.com/`,
    image: `img.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#165bb5`,
        theme_color: `#165bb5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
