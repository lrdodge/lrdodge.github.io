const assert = require("node:assert/strict")
const { createRequire } = require("node:module")
const { execFileSync } = require("node:child_process")

// Resolve through the actual image plugin, rather than testing an unused copy.
const pluginRequire = createRequire(require.resolve("gatsby-remark-images"))
const queryString = pluginRequire("query-string")
const decoder = createRequire(pluginRequire.resolve("query-string"))(
  "decode-uri-component"
)
assert.equal(typeof decoder, "function")
assert.equal(decoder("caf%C3%A9%20%E2%9C%93"), "café ✓")
const parsed = queryString.parseUrl("photo.png?caption=caf%C3%A9&tag=a&tag=b")
assert.equal(parsed.url, "photo.png")
assert.equal(parsed.query.caption, "café")
assert.deepEqual(parsed.query.tag, ["a", "b"])
assert.equal(queryString.parse("caption=%zz").caption, "%zz")

// Run adversarial malformed input in a separate process with a hard timeout.
// This exercises both exponential splitting and quadratic replacement cases.
execFileSync(process.execPath, ["-e", `
  const assert = require('node:assert/strict');
  const { createRequire } = require('node:module');
  const q = createRequire(require.resolve('gatsby-remark-images'))('query-string');
  let payload = '';
  for (let i = 0; i < 32000; i++) {
    payload += '%' + Math.floor(i / 256).toString(16).padStart(2, '0')
      + '%' + (i % 256).toString(16).padStart(2, '0') + 'x';
  }
  assert.equal(typeof q.parse('caption=' + payload + '%zz').caption, 'string');
  assert.equal(typeof q.parse('caption=' + '%C3'.repeat(50000)).caption, 'string');
`], { timeout: 5000, stdio: "pipe" })

async function checkPlugin() {
  const image = {
    type: "image",
    url: "https://example.com/photo.png?caption=caf%C3%A9&bad=%zz",
    alt: "Photo",
  }
  await require("gatsby-remark-images")({
    markdownAST: { type: "root", children: [image] },
    files: [],
  }, {})
  assert.equal(image.type, "image")
  console.log("Patched decoder, malformed-input timeout, and Markdown image plugin checks passed.")
}
checkPlugin().catch(error => {
  console.error(error)
  process.exitCode = 1
})
