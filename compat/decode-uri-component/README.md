# Gatsby decoder compatibility

Gatsby's `query-string` 6 requires `decode-uri-component` as a CommonJS function.
The upstream security fix is ESM. This adapter exposes the default export of the
official `decode-uri-component` 0.5.1 package through that existing interface.
Node 24 supports loading this synchronous ESM module with `require()`.

`patched-decode-uri-component` is an npm alias for the official package, not a
fork. No decoder implementation is copied or rewritten here. The distinct alias
also prevents the root override from redirecting the adapter to itself.

The root manifest declares this directory as a direct file dependency, and the
`$decode-uri-component` override reuses that dependency for transitive consumers.
Keep this directory in the repository: fresh installs require it.

The patched version addresses both malformed-input denial-of-service issues:
[GHSA-vcc3-ghjq-m6fr](https://github.com/advisories/GHSA-vcc3-ghjq-m6fr) and
[GHSA-qr28-fpjm-wq7f](https://github.com/advisories/GHSA-qr28-fpjm-wq7f).

Run `npm test` after changes. `scripts/check-decoder.cjs` tests through Gatsby's
actual `query-string` dependency, including adversarial inputs in a subprocess
with a hard timeout and a call through the Markdown image plugin.

Remove this adapter, its direct dependency, and the matching override when
upstream Gatsby supports a patched decoder natively. To update the decoder before
then, update the npm alias version here, regenerate the root lockfile, and rerun
the tests and audit.
