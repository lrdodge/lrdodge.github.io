const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")

const read = file => fs.readFileSync(path.join("public", file), "utf8")
const readPageData = route =>
  JSON.parse(read(path.join("page-data", route, "page-data.json")))

const blog = readPageData("blog")
const posts = blog.result.data.allPost.nodes
assert.equal(posts.length, 10, "The blog must contain all ten posts")
assert.match(posts[0].date, /^\d{2} [A-Z][a-z]{2} \d{4}$/)

const feed = read("rss.xml")
for (const post of posts) {
  const route = post.slug.replace(/^\//, "").replace(/\/$/, "")
  const page = readPageData(route)
  assert.equal(page.result.data.post.title, post.title)
  assert(read(path.join(route, "index.html")).includes("<main"))
  assert(feed.includes(post.slug), `RSS is missing ${post.slug}`)
}

const homepage = read("index.html")
assert(homepage.includes("Luke Dodge"))
assert(homepage.includes("engineering leader"))
assert(homepage.includes("Feedback course"))
assert(homepage.includes('href="/blog/"'))
assert(homepage.includes('href="/about/"'))
assert(homepage.includes("https://www.linkedin.com/in/luke-dodge/"))

const about = read("about/index.html")
assert(about.includes("Kansas City"))
assert(about.includes("building useful things and leading cool people"))

const taglinedPost = read("the-deliberate-pause/index.html")
assert(taglinedPost.includes("Why good judgement matters more in the age of AI"))
assert(
  taglinedPost.includes(
    "Ready to Implement These Ideas at Your Company? Contact Me!"
  )
)

const tagIndex = read("tags/index.html")
assert(tagIndex.includes("Engineering Leadership"))
assert(tagIndex.includes("Teams"))

assert(read("404.html").includes("404: Not Found"))
assert(read("sitemap-index.xml").includes("sitemap-0.xml"))

const manifest = JSON.parse(read("manifest.webmanifest"))
for (const icon of manifest.icons) {
  const filename = new URL(icon.src, "https://lrdodge.github.io/").pathname
  assert(
    fs.existsSync(path.join("public", filename)),
    `Missing icon: ${icon.src}`
  )
}

console.log(
  `Production smoke checks passed for ${posts.length} posts, homepage, about, tags, RSS, sitemap, 404, and icons.`
)
