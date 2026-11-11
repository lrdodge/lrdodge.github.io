# Luke Dodge

Luke Dodge's personal site and writing, built with Gatsby and
[`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog).

## Local development

Use Node.js 24 (`nvm install && nvm use` reads `.nvmrc`), then run:

```sh
npm ci
npm test
npm run develop
```

`npm test` validates the production build, all post routes, the homepage, About
page, tags, RSS, sitemap, 404 page, and manifest icons.

## Publishing thoughts

Store posts in `content/blog` as Markdown files. Keep the existing frontmatter
shape:

```yaml
---
title: Your post title
date: "2026-11-09"
slug: "/your-post-slug/"
tags:
  - Engineering Leadership
  - Teams
---
```

`description` is optional and appears as a subtitle on the post. Existing
`tagline` values are retained for their original editorial metadata.

## Site content

- Homepage introduction: `src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx`
- Projects: `src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx`
- About page: `content/pages/about/index.mdx`
- Navigation, external links, feeds, analytics, and metadata: `gatsby-config.js`

## Deployment

`npm run deploy` builds the site and publishes `public` to the `site` branch.
Run it only when you intend to publish.
