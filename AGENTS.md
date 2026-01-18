# AGENTS.md

This file provides guidelines and commands for agentic coding assistants working on this personal website repository. The site is built with Hugo static site generator for the blog, alongside static HTML/CSS/JS for the main pages.

## Repository Overview

- **Framework**: Hugo (Go-based SSG) for blog at `/blog/`, static HTML for root pages
- **Hosting**: GitHub Pages
- **Key Directories**:
  - `content/`: Markdown content for Hugo
  - `static/`: Assets and static files
  - `themes/`: Hugo themes (PaperMod)
  - `layouts/`: Custom Hugo layouts (if any)
  - `css/`, `js/`: Static styles and scripts
- **No package.json or build scripts**: Use direct commands

## Build Commands

### Full Site Build
- `hugo`: Generate the entire site to `blog/` directory (configured publishDir)
- `hugo --minify`: Build with HTML/CSS/JS minification for production
- `hugo --environment production`: Build for production environment

### Development Server
- `hugo server`: Start local server at http://localhost:1313 (serves from memory)
- `hugo server --buildDrafts`: Include draft posts in development
- `hugo server --disableFastRender`: Full rebuild on changes (slower but accurate)

### Selective Builds
- `hugo --source . --destination ./temp`: Build to custom directory
- `hugo --config config.toml,config-prod.toml`: Use multiple config files

## Test Commands

No automated test suite exists yet. For manual testing:

### Single Page/Post Testing
- `hugo server --buildDrafts --navigateTo="/blog/posts/your-post/"`: Test specific post
- Open generated HTML in browser: `open blog/index.html`

### Cross-Browser Testing
- Use BrowserStack or manual checks on Chrome, Firefox, Safari

### Performance Testing
- `lighthouse http://localhost:1313/blog/`: Run Lighthouse audit (requires Lighthouse CLI)

### Accessibility Testing
- `pa11y http://localhost:1313/blog/`: Check accessibility (requires pa11y)

## Lint Commands

No automated linters configured. Run manually:

### HTML Linting
- `tidy -q -e index.html`: Check HTML validity
- `htmlhint index.html`: Lint HTML (install htmlhint globally)

### CSS Linting
- `stylelint "css/**/*.css"`: Lint CSS files
- `csslint css/styles.css`: Alternative CSS linter

### JavaScript Linting
- `eslint js/scripts.js`: Lint JS (configure .eslintrc if needed)
- `jshint js/scripts.js`: Simple JS linting

### Markdown Linting
- `markdownlint content/**/*.md`: Check Markdown formatting
- `remark content/posts/*.md --use remark-validate-links`: Validate links

### Hugo-Specific Checks
- `hugo --printPathWarnings`: Check for broken internal links
- `hugo --templateMetrics`: Analyze template performance

## Code Style Guidelines

### General Principles
- **Consistency**: Follow existing patterns in the codebase
- **Simplicity**: Prefer straightforward solutions over complex ones
- **Accessibility**: Ensure WCAG 2.1 AA compliance
- **Performance**: Optimize images, minimize assets, use lazy loading
- **Security**: No inline scripts; sanitize user inputs (though static site)

### File Organization
- Hugo content: `content/posts/` for blog posts, `content/page/` for pages
- Static assets: `static/css/`, `static/js/`, `static/images/`
- Keep root clean; use subdirectories for organization

### Hugo-Specific Guidelines

#### Content Structure
- Use Markdown (.md) for all content
- Front matter: Use TOML format consistently
  ```toml
  +++
  title = "Post Title"
  date = 2023-01-01
  draft = false
  tags = ["tag1", "tag2"]
  +++
  ```
- Filenames: `YYYY-MM-DD-slug.md` for posts
- Drafts: Set `draft = true` for unpublished posts

#### Templates and Layouts
- Extend `themes/PaperMod` layouts minimally
- Custom layouts in `layouts/_default/`
- Use Hugo partials for reusable components: `{{ partial "head.html" . }}`

#### Shortcodes
- Use built-in Hugo shortcodes: `{{< ref "page" >}}`
- Custom shortcodes in `layouts/shortcodes/`

### HTML Guidelines
- Use semantic HTML5: `<header>`, `<main>`, `<article>`, `<footer>`
- Alt text for all images: `<img src="..." alt="Descriptive text">`
- Accessible forms: Labels, ARIA attributes if needed
- No deprecated tags: Avoid `<center>`, `<font>`, use CSS instead

### CSS Guidelines
- **Methodology**: BEM (Block Element Modifier)
  - `.block__element--modifier`
  - Example: `.navbar__link--active`
- **Units**: Use `rem` for fonts, `%`/`vw` for responsive layouts
- **Variables**: Use CSS custom properties: `--primary-color: #007bff;`
- **Organization**: Group by component, then utilities
- **Responsive**: Mobile-first with media queries
- **Performance**: Avoid `@import`, use `<link>` for external CSS

### JavaScript Guidelines
- **ES6+**: Use modern syntax: `const`, `let`, arrow functions
- **Modules**: Prefer ES modules over globals
- **Events**: Use event delegation: `document.addEventListener('click', handler)`
- **DOM Manipulation**: Use `querySelector` over `getElementById`
- **Error Handling**: Wrap risky code in try-catch
- **Performance**: Debounce/throttle event handlers, avoid DOM queries in loops

### Naming Conventions
- **Files**: kebab-case for Hugo (`my-post.md`), camelCase for JS (`myFunction.js`)
- **Classes/ID**: kebab-case for CSS (`.main-content`), camelCase for JS variables
- **Hugo Variables**: camelCase (`{{ .Site.Title }}`)
- **Constants**: UPPER_SNAKE_CASE for JS constants

### Error Handling
- Hugo: Use `{{ with .Params.error }}...{{ end }}` for conditional content
- JS: Use try-catch for async operations
- Graceful degradation: Ensure site works without JS

### Imports and Dependencies
- Hugo: No imports needed; use built-in functions
- CSS: Import via `@import` in main stylesheet
- JS: Use `<script src="...">` for external libs; inline small scripts

### Comments
- Hugo templates: `{{/* Comment */}}`
- CSS: `/* Comment */`
- JS: `// Comment` or `/* Block */`
- HTML: `<!-- Comment -->`

### Git and Commit Messages
- **Never push directly to master**: Always create a new branch or use an existing non-master branch for updates.
- Branches: `feature/add-blog`, `fix/css-bug`
- Commits: `Add blog section to homepage` (imperative mood)
- PRs: Descriptive titles, link issues
- **Always ask before git push**: Confirm with user before pushing changes to remote.

### Security
- No secrets in code
- Validate user inputs (if forms added later)
- Use HTTPS links
- Avoid inline scripts with user data

### Performance
- Optimize images: Use WebP, lazy load
- Minimize HTTP requests: Combine CSS/JS
- Use Hugo's asset pipeline for minification
- Cache static assets with long expiry

### Accessibility
- Color contrast: 4.5:1 minimum
- Keyboard navigation: Tab order, focus indicators
- Screen readers: Proper headings, ARIA labels
- Alt text: Descriptive for images
- Forms: Associated labels, error messages

### Browser Support
- Modern browsers: Chrome, Firefox, Safari, Edge
- Graceful degradation for IE11 (if needed)

### Documentation
- Update this AGENTS.md for new conventions
- Comment complex logic in code
- Use README.md for setup instructions

### Tools and Editors
- Editor: VS Code with Hugo extensions
- Theme: PaperMod (lightweight, blog-focused)
- Version Control: Git with GitHub

### Deployment
- GitHub Pages: Push to master triggers build
- Workflow: `.github/workflows/hugo.yml` builds and deploys
- Manual: `hugo && git add blog/ && git commit -m "Update blog"`

This AGENTS.md should be updated as the codebase evolves. Aim for clarity and consistency to ensure smooth collaboration.