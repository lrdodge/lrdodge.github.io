/** @jsx jsx */
import { jsx } from "theme-ui"

import profilePhoto from "../images/profile-pic.png"

const AboutPortrait = () => (
  <div
    sx={{
      float: ["none", "right"],
      width: ["min(100%, 18rem)", "15rem"],
      mt: [0, 1],
      mr: ["auto", 0],
      mb: [4, 3],
      ml: ["auto", 4],
    }}
  >
    <img
      src={profilePhoto}
      alt="Luke Dodge smiling at the camera"
      sx={{
        display: "block",
        width: "100%",
        aspectRatio: "1 / 1",
        objectFit: "cover",
        objectPosition: "62% center",
        borderRadius: "50%",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.16)",
      }}
    />
  </div>
)

export default AboutPortrait
