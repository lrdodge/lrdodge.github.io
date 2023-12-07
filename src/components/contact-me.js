import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "./avatar"

const ContactMe = () => {
  const data = useStaticQuery(graphql`
    query ContactMeQuery {
      site {
        siteMetadata {
          author {
            name
            email
            summary
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <Avatar />
      {author?.name && (
        <p>
          <strong>
            Ready to Implement These Ideas at Your Company? Contact Me!
          </strong>
          <br />
          {`If you're looking to enhance your engineering leadership strategies, I'm here to help. Connect with me at `}
          <a href={`mailto: ${author?.email}`}>{author?.email}</a>
          {` for personalized advice to elevate your team and organization.`}
        </p>
      )}
    </div>
  )
}

export default ContactMe
