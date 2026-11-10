/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteTitle: `Luke Dodge`,
    siteTitleAlt: `Luke Dodge — Engineering and Leadership`,
    siteHeadline: `Engineering leadership, software development, and curious problem solving`,
    siteUrl: `https://lrdodge.github.io/`,
    siteDescription: `Writing about engineering, leadership, curiosity, and building great teams.`,
    siteImage: `/favicon.ico`,
    siteLanguage: `en`,
    author: ``,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        postsPath: `content/blog`,
        pagesPath: `content/pages`,
        formatString: `DD MMM YYYY`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/luke-dodge/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) => {
              return allPost.nodes.map(post => {
                const url = new URL(post.slug, site.siteMetadata.siteUrl).href
                const content = `<p>${post.excerpt}</p><p><strong><a href="${url}">Keep reading</a>.</strong></p>`

                return {
                  title: post.title,
                  description: post.description || post.excerpt,
                  date: post.date,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              })
            },
            query: `{
              allPost(sort: {date: DESC}) {
                nodes {
                  title
                  date
                  excerpt
                  description
                  slug
                }
              }
            }`,
            output: `/rss.xml`,
            title: `Luke Dodge Blog RSS Feed`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luke Dodge Blog`,
        short_name: `Luke Dodge`,
        description: `Writing about engineering, leadership, curiosity, and building great teams.`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-EKNXP12MJG"],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
}
