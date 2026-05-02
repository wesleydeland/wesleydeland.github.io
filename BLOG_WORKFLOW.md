# Blog Post Workflow

This document outlines the workflow for adding new blog posts to the Astro-powered blog at `/blog/` on the personal website.

## Prerequisites
- Node.js installed locally (`node --version` to verify) — only needed if you want to preview before pushing.
- Repository cloned and on a non-master branch (e.g., `blog-new-post` or a new feature branch).
- Basic Markdown knowledge for writing posts.

## Step-by-Step Workflow

### 1. Create a New Branch (If Not Already on One)
- Run `git checkout -b add-new-post` (or use existing non-master branch).
- This follows the AGENTS.md policy to never push directly to master.

### 2. Create the New Post
- Create a new Markdown file in `src/content/posts/` named `your-post-title.md`.
- Use front matter template:

```yaml
---
date: YYYY-MM-DD
draft: false
title: Your Post Title
description: A brief description for SEO
---

Your content here...
```

### 3. Add Images (Optional)
- Place images in the same folder as your post: `src/content/posts/your-post-title.md`
- Reference with relative path: `![Alt text](./image.png)`

### 4. Test Locally (Optional but Recommended)
- Run `npm run dev` to preview the site locally at `http://localhost:4321/blog/`.
- Check the new post at `/blog/your-post-title/`.
- Ensure links, images, and formatting work.

> **Note:** You do **not** need to run `npm run build` before committing. The GitHub Actions CI will build and deploy the site automatically.

### 5. Commit the Changes
- Run `git add src/content/posts/your-post-title.md` (add only the source post).
- Run `git commit -m "Add new blog post: Your Post Title"`.
- Follow AGENTS.md commit style (imperative mood, e.g., "Add new post about X").

> **Do not** commit the `blog/` build directory. It is listed in `.gitignore` and is rebuilt by CI.

### 6. Push and Create PR
- Run `git push origin add-new-post`.
- Create a pull request on GitHub from `add-new-post` to `master`.
- Request review if needed.

### 7. Merge and Deploy
- Merge the PR on GitHub.
- GitHub Actions will automatically build and deploy the updated site.

## Astro Commands
- `npm run dev` — Start dev server with hot reload
- `npm run build` — Build for production (only needed locally if you want to inspect output)
- `npm run preview` — Preview production build locally

## Front Matter Fields
| Field | Required | Description |
|-------|----------|-------------|
| date | Yes | Publication date (YYYY-MM-DD) |
| title | Yes | Post title |
| description | No | SEO description |
| draft | No | Set `false` to publish |

## Potential Issues and Mitigations
- **Build Errors**: Check Astro config and post front matter.
- **Missing Images**: Ensure images are in same folder as post.
- **Styles**: Tailwind classes available for custom styling.

## Notes
- Keep posts as `draft: true` until ready to publish.
- Use relative image paths: `./image.png` not absolute paths.
- Update this document as the workflow evolves.
- Refer to AGENTS.md for general code style and git policies.