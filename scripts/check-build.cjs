const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")

const read = file => fs.readFileSync(path.join("public", file), "utf8")
const readPageData = route =>
  JSON.parse(read(path.join("page-data", route, "page-data.json")))

const thoughts = readPageData("thoughts")
const posts = thoughts.result.data.allPost.nodes
const expectedPostCount = fs
  .readdirSync(path.join("content", "blog"))
  .filter(file => /\.mdx?$/.test(file)).length
assert.equal(posts.length, expectedPostCount, "Thoughts must contain every post")
assert.match(posts[0].date, /^\d{2} [A-Z][a-z]{2} \d{4}$/)

const thoughtsHtml = read("thoughts/index.html")
assert(thoughtsHtml.includes(">My Thoughts</h1>"))
assert(thoughtsHtml.includes("<title data-gatsby-head=\"true\">My Thoughts | Luke Dodge</title>"))
assert(thoughtsHtml.includes('property="og:title" content="My Thoughts | Luke Dodge"'))
assert(thoughtsHtml.includes('property="og:url" content="https://lrdodge.github.io/thoughts/"'))
assert(!thoughtsHtml.includes(">Blog</h1>"))
assert(!thoughtsHtml.includes(">Blog | Luke Dodge</title>"))

const feed = read("rss.xml")
for (const post of posts) {
  const route = post.slug.replace(/^\//, "").replace(/\/$/, "")
  const page = readPageData(route)
  assert.equal(page.result.data.post.title, post.title)
  assert(read(path.join(route, "index.html")).includes("<main"))
  assert(feed.includes(post.slug), `RSS is missing ${post.slug}`)
}

const homepage = read("index.html")
for (const post of posts.slice(0, 5)) {
  const href = `${post.slug.replace(/\/$/, "")}/`
  assert(homepage.includes(`href="${href}"`), `Homepage is missing ${post.title}`)
}
assert(homepage.includes("Luke Dodge"))
assert(homepage.includes("engineering leader"))
assert(homepage.includes("Scaling Growth Through Peer Feedback"))
assert(homepage.includes('href="/feedback-workshop/"'))
assert(homepage.includes('href="/thoughts/"'))
assert(homepage.includes('href="/about/"'))
assert(homepage.includes("https://www.linkedin.com/in/luke-dodge/"))

const about = read("about/index.html")
assert(about.includes("Kansas City"))
assert(about.includes("software engineer turned engineering leader"))

const feedbackWorkshop = read("feedback-workshop/index.html")
assert(feedbackWorkshop.includes("Scaling Growth Through Peer Feedback"))
assert(feedbackWorkshop.includes("Giving useful feedback"))
assert(feedbackWorkshop.includes("mailto:luke.r.dodge@gmail.com"))

const taglinedPost = read("knowing-how-to-pause-is-your-competitive-advantage/index.html")
assert(taglinedPost.includes("Why good judgement matters more in the age of AI"))
assert(
  !taglinedPost.includes(
    "Ready to Implement These Ideas at Your Company? Contact Me!"
  )
)

const tagIndex = read("tags/index.html")
assert(tagIndex.includes("Leadership"))
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
