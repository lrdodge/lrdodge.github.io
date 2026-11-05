// Gatsby's query-string 6 expects a CommonJS function. Node 24 can require the
// patched ESM decoder; expose its default export without copying its code.
module.exports = require("patched-decode-uri-component").default
