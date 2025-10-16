# SMILE Website - Content Management Guide

## About This Site

Built with [Hugo](https://gohugo.io/) using [dk-hugo-theme](https://github.com/damiankucharski/dk-hugo-theme).

## Quick Start

All content is in markdown files under `content/`. After editing, commit and push to `main` - GitHub Actions will build and deploy automatically.

## Adding Papers

Create a new file: `content/papers/<paper-name>.md`

```yaml
---
title: "Paper Title"
date: 2024-10-27
draft: false
description: "Brief paper description"
tags: ["tag1", "tag2", "tag3"]
authors: "Author1, Author2, Author3"
journal: "Journal/Conference Name"
doi: "10.xxxx/xxxxx"
---

## Abstract

Your abstract here...
```

See `content/papers/giraffe.md` for a complete example.

## Adding News

Create a new file: `content/news/<news-title>.md`

```yaml
---
title: "News Title"
date: 2024-10-16
draft: false
tags: ["tag1", "tag2"]
---

News content here...
```

## Editing Home Page

Edit: `content/_index.md`

```yaml
---
title: 'Home'
draft: false
---

Your home page content here...
```

## Editing About Page

Edit: `content/about/_index.md`

```yaml
---
title: 'about'
draft: false
---

Your about page content here...
```

## Useful Commands

```bash
# Local preview
hugo server -D

# Build site
hugo

# Test build
hugo --quiet
```

## Tips

- Set `draft: true` to hide content from production
- Use `date` field to control ordering (newer = higher)
- Tags create automatic tag pages
- All markdown syntax supported
- Math/LaTeX supported via `$$...$$` or `$...$`
- Syntax highlighting available with code blocks: ` ```python ` or ` ```bash `
