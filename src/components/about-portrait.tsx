/** @jsx jsx */
import { jsx } from "theme-ui"

import funProfilePhoto from "../images/profile-pic-fun.jpg"
import studioProfilePhoto from "../images/profile-pic.png"

type AboutPortraitProps = {
  variant?: "studio" | "fun"
}

const portraits = {
  studio: {
    src: studioProfilePhoto,
    alt: "Luke Dodge smiling at the camera",
    objectPosition: "62% center",
  },
  fun: {
    src: funProfilePhoto,
    alt: "Luke Dodge making a playful surprised expression",
    objectPosition: "center 8%",
  },
}

const AboutPortrait = ({ variant = "studio" }: AboutPortraitProps) => {
  const portrait = portraits[variant]

  return (
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
        src={portrait.src}
        alt={portrait.alt}
        sx={{
          display: "block",
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          objectPosition: portrait.objectPosition,
          borderRadius: "50%",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.16)",
        }}
      />
    </div>
  )
}

export default AboutPortrait
