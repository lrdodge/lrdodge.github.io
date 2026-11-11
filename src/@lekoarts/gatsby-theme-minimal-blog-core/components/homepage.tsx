import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
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

  return <Homepage posts={allPost.nodes} />
}

export default HomepageWithFivePosts

export { Head }
