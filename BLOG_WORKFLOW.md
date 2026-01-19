# Blog Post Workflow

This document outlines the workflow for adding new blog posts to the Hugo-powered blog at `/blog/` on the personal website.

## Prerequisites
- Hugo installed locally (`hugo version` to verify).
- Repository cloned and on a non-master branch (e.g., `blog-setup` or a new feature branch).
- Basic Markdown knowledge for writing posts.

## Step-by-Step Workflow

### 1. Create a New Branch (If Not Already on One)
- Run `git checkout -b add-new-post` (or use existing non-master branch).
- This follows the AGENTS.md policy to never push directly to master.

### 2. Create the New Post
- Run `hugo new content posts/your-post-title.md`.
- This generates a new Markdown file in `content/posts/` with front matter (title, date, draft status).

### 3. Edit the Post
- Open `content/posts/your-post-title.md` in your editor.
- Update the front matter (e.g., set `draft = false` for publishing).
- Write the post content in Markdown below the front matter.
- Save the file.

### 4. Test Locally (Optional but Recommended)
- Run `hugo server --buildDrafts` to preview the site locally at `http://localhost:1313/blog/`.
- Check the new post at `/blog/posts/your-post-title/`.
- Ensure links, images, and formatting work.

### 5. Build the Updated Blog
- Run `hugo` to regenerate the site.
- This updates the `blog/` directory with the new post and any changes.

### 6. Commit the Changes
- Run `git add blog/ content/posts/your-post-title.md` (add only the built blog and source post).
- Run `git commit -m "Add new blog post: Your Post Title"`.
- Follow AGENTS.md commit style (imperative mood, e.g., "Add new post about X").

### 7. Push and Create PR
- Run `git push origin add-new-post`.
- Create a pull request on GitHub from `add-new-post` to `master`.
- Request review if needed.

### 8. Merge and Deploy
- Merge the PR on GitHub.
- GitHub Pages (set to `master` branch) will automatically serve the updated `/blog/` with the new post.

## Automation Options (Future Enhancement)
- **GitHub Actions Workflow**: Add a workflow to auto-build on push to `master`, but this requires committing built files or setting up deployment.
- **Draft Management**: Keep posts as `draft = true` until ready, then set to `false` and rebuild.
- **Scheduling**: Use front matter `publishDate` for future publishing.

## Potential Issues and Mitigations
- **Build Errors**: If `hugo` fails, check config (`hugo.toml`) and post front matter.
- **Stale Content**: Always rebuild after edits to update `blog/`.
- **Version Control**: Don't commit `public/` or temp files; only `blog/`, `content/`, and config.
- **Performance**: For many posts, consider pagination or archives.

## Notes
- Update this document as the workflow evolves.
- Refer to AGENTS.md for general code style and git policies.