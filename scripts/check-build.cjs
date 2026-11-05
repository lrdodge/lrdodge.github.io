const assert = require("node:assert/strict")
const fs = require("node:fs")
const path = require("node:path")

// Check the production output, including each post's route and RSS entry.
const read = file => fs.readFileSync(path.join("public", file), "utf8")
const index = JSON.parse(read("page-data/index/page-data.json"))
const posts = index.result.data.allMarkdownRemark.nodes
assert(posts.length > 0, "The homepage must list blog posts")
const feed = read("rss.xml")
for (const post of posts) {
  const slug = post.fields.slug
  const page = JSON.parse(read(`page-data${slug}page-data.json`))
  assert.equal(page.result.data.markdownRemark.frontmatter.title, post.frontmatter.title)
  assert(/itemprop="articleBody"/i.test(read(`${slug.slice(1)}index.html`)))
  assert(feed.includes(slug), `RSS is missing ${slug}`)
}
assert(read("index.html").includes("Luke Dodge"))
assert(read("404.html").length > 0)
const manifest = JSON.parse(read("manifest.webmanifest"))
for (const icon of manifest.icons) {
  const filename = new URL(icon.src, "https://lrdodge.github.io/").pathname
  assert(fs.existsSync(path.join("public", filename)), `Missing icon: ${icon.src}`)
}
console.log(`Production smoke checks passed for ${posts.length} posts, homepage, RSS, 404, and icons.`)
