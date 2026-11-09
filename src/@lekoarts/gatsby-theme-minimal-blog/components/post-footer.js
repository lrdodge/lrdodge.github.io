/** @jsx jsx */
import { jsx, Heading, Link } from "theme-ui"

const PostFooter = () => (
  <aside sx={{ mt: 5, pt: 4, variant: `dividers.top` }}>
    <Heading as="h2" variant="styles.h3" sx={{ mt: 0 }}>
      Ready to Implement These Ideas at Your Company? Contact Me!
    </Heading>
    <p sx={{ mb: 0 }}>
      If you&apos;re looking to enhance your engineering leadership strategies,
      I&apos;m here to help. Connect with me at{` `}
      <Link href="mailto:luke.r.dodge@gmail.com">
        luke.r.dodge@gmail.com
      </Link>{` `}
      for personalized advice to elevate your team and organization.
    </p>
  </aside>
)

export default PostFooter
