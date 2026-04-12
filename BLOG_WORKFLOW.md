# Blog Post Workflow

This document outlines the workflow for adding new blog posts to the Astro-powered blog at `/blog/` on the personal website.

## Prerequisites
- Node.js installed locally (`node --version` to verify).
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

### 4. Test Locally (Recommended)
- Run `npm run dev` to preview the site locally at `http://localhost:4321/blog/`.
- Check the new post at `/blog/your-post-title/`.
- Ensure links, images, and formatting work.

### 5. Build the Updated Blog
- Run `npm run build` to generate the static site.
- This updates the `blog/` directory with the new post and any changes.

### 6. Commit the Changes
- Run `git add blog/ src/content/posts/your-post-title.md` (add built blog and source post).
- Run `git commit -m "Add new blog post: Your Post Title"`.
- Follow AGENTS.md commit style (imperative mood, e.g., "Add new post about X").

### 7. Push and Create PR
- Run `git push origin add-new-post`.
- Create a pull request on GitHub from `add-new-post` to `master`.
- Request review if needed.

### 8. Merge and Deploy
- Merge the PR on GitHub.
- GitHub Pages (set to `master` branch) will automatically serve the updated `/blog/` with the new post.

## Astro Commands
- `npm run dev` - Start dev server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

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