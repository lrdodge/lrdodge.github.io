/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby"
import { Box, jsx } from "theme-ui"
import Homepage, {
  Head,
} from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage"

const HomepageWithFivePosts = () => {
  const { allPost } = useStaticQuery(graphql`
    query HomepageWithFivePosts {
      allPost(sort: { date: DESC }, limit: 5) {
        nodes {
          slug
          title
          date(formatString: "DD MMM YYYY")
          excerpt
          timeToRead
          description
          tags {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <Box
      sx={{
        "header, #skip-nav > section:not(:last-of-type)": {
          mb: [`4rem`, 5, 6],
        },
      }}
    >
      <Homepage posts={allPost.nodes} />
    </Box>
  )
}

export default HomepageWithFivePosts

export { Head }
