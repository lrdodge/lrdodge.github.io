/** @jsx jsx */
import * as React from "react"
import { jsx, Heading } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import PostFooter from "./post-footer"

const px = [`16px`, `8px`, `4px`]
const shadow = px.map(
  value => `rgba(0, 0, 0, 0.1) 0px ${value} ${value} 0px`
)

const Post = ({ data: { post }, children }) => (
  <Layout>
    <Heading as="h1" variant="styles.h1">
      {post.title}
    </Heading>
    {post.description && (
      <p
        sx={{
          color: `secondary`,
          fontSize: [2, 2, 3],
          fontStyle: `italic`,
          lineHeight: `heading`,
          mb: 0,
          mt: 3,
        }}
      >
        {post.description}
      </p>
    )}
    <p
      sx={{
        color: `secondary`,
        mt: 3,
        a: { color: `secondary` },
        fontSize: [1, 1, 2],
      }}
    >
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": {
          my: [4, 4, 5],
          borderRadius: `4px`,
          boxShadow: shadow.join(`, `),
          ".gatsby-resp-image-image": {
            borderRadius: `4px`,
          },
        },
        variant: `layout.content`,
      }}
    >
      {children}
    </section>
    <PostFooter post={post} />
  </Layout>
)

export const Head = ({ data: { post } }) => (
  <Seo
    title={post.title}
    description={post.description || post.excerpt}
    image={post.banner?.childImageSharp?.resize?.src}
    pathname={post.slug}
    canonicalUrl={post.canonicalUrl}
  />
)

export default Post
