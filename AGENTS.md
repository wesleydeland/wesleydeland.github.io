# AGENTS.md

This file provides guidelines and commands for agentic coding assistants working on this personal website repository. The site is a static HTML/CSS/JS website hosted on GitHub Pages.

## Repository Overview

- **Framework**: Static HTML with Bootstrap, no SSG
- **Hosting**: GitHub Pages
- **Key Directories**:
  - `css/`: Stylesheets
  - `js/`: JavaScript files
  - `Images/`: Image assets
  - `assets/`: Additional assets
- **No build tools**: Direct HTML/CSS/JS editing

## Build Commands

No build process; files are served directly.

### Local Development
- Open `index.html` in browser for testing
- Use a local server: `python -m http.server 8000` or `npx serve`

## Test Commands

No automated tests. Manual testing:

### Single Page Testing
- Open specific HTML file in browser: `open delandfamily.html`

### Cross-Browser Testing
- Test on Chrome, Firefox, Safari manually

### Performance Testing
- Use browser dev tools or online tools like Google PageSpeed

## Lint Commands

Run manually:

### HTML Linting
- `tidy -q -e index.html`: Check HTML validity
- `htmlhint index.html`: Lint HTML

### CSS Linting
- `stylelint "css/**/*.css"`: Lint CSS
- `csslint css/styles.css`: Alternative

### JavaScript Linting
- `eslint js/scripts.js`: Lint JS
- `jshint js/scripts.js`: Simple linting

## Code Style Guidelines

### General Principles
- **Consistency**: Follow existing patterns
- **Simplicity**: Keep code clean and minimal
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimize images, minimize scripts

### HTML Guidelines
- Use semantic HTML5: `<header>`, `<main>`, `<article>`, `<footer>`
- Alt text for images: `<img src="..." alt="Description">`
- Accessible forms: Labels and ARIA
- No deprecated tags

### CSS Guidelines
- **Methodology**: BEM naming: `.block__element--modifier`
- **Units**: `rem` for fonts, `%` for layouts
- **Variables**: CSS custom properties: `--color: #000;`
- **Organization**: Group by component
- **Responsive**: Mobile-first media queries

### JavaScript Guidelines
- **ES6+**: `const`, `let`, arrow functions
- **Events**: `addEventListener`
- **DOM**: `querySelector`
- **Error Handling**: try-catch
- **Performance**: Avoid loops with DOM queries

### Naming Conventions
- **Files**: kebab-case for HTML (`my-page.html`), camelCase for JS
- **Classes/ID**: kebab-case for CSS, camelCase for JS variables
- **Constants**: UPPER_SNAKE_CASE

### Error Handling
- JS: try-catch for risky operations
- Graceful degradation without JS

### Imports and Dependencies
- CSS: `@import` in main stylesheet
- JS: `<script src="...">` for external libs

### Comments
- HTML: `<!-- Comment -->`
- CSS: `/* Comment */`
- JS: `// Comment`

### Git and Commit Messages
- **Never push directly to master**: Always create a new branch or use existing non-master branch for updates.
- Branches: `feature/add-section`, `fix/css-bug`
- Commits: `Add contact section` (imperative mood)
- PRs: Descriptive titles
- **Always ask before git push**: Confirm with user before pushing.

### Security
- No inline scripts with user data
- Validate inputs if forms added
- HTTPS links

### Performance
- Optimize images: Use WebP
- Minimize HTTP requests
- Cache assets

### Accessibility
- Color contrast 4.5:1
- Keyboard navigation
- Screen readers support
- Alt text

### Browser Support
- Modern browsers: Chrome, Firefox, Safari, Edge

### Documentation
- Update AGENTS.md for new conventions
- Comment complex code
- Use README.md for setup

### Tools and Editors
- Editor: VS Code
- Version Control: Git

### Deployment
- GitHub Pages: Push to master
- Manual: Commit and push

This AGENTS.md should evolve with the codebase.
