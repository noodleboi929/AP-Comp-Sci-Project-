module.exports = {
  siteMetadata: {
    title: 'Akash Site',
    author:'Akash Macha'
  },
  plugins:[
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-gatsby-cloud',
    'react-markdown',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kv1vi667h2ez`,
        accessToken: 'x8KhddZGcXdVIPy1W45U__WYU0lvphiE4hr-xBwNPTY',
      },
    },
     
    ],

}