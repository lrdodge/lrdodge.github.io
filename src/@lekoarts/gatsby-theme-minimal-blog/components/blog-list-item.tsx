/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, type Theme } from "theme-ui"
import ThemeBlogListItem from "@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item"

type BlogListItemProps = Parameters<typeof ThemeBlogListItem>[0]

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => {
  // The theme's homepage is the only listing that disables tags.
  if (showTags) return <ThemeBlogListItem post={post} showTags={showTags} />

  return (
    <div sx={{ mb: 4 }}>
      <Link
        to={post.slug}
        sx={(theme: Theme) => ({
          ...theme.styles?.a,
          fontSize: [1, 2, 3],
          color: `text`,
          overflowWrap: `anywhere`,
        })}
      >
        {post.title}
      </Link>
      {post.description && (
        <p
          sx={{
            color: `secondary`,
            fontSize: [0, 1, 2],
            fontStyle: `italic`,
            mt: 1,
            mb: 0,
          }}
        >
          {post.description}
        </p>
      )}
    </div>
  )
}

export default BlogListItem
