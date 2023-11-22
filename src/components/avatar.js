import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Avatar = () => {
    return (<StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
    />)
}

export default Avatar
