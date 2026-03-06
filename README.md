# CV Website

A modern, responsive CV website built with [Hugo](https://gohugo.io/), a fast and flexible static site generator.

## 🎯 Overview

This is a personal CV/portfolio website for Tajinder Singh, designed to showcase professional experience, skills, and accomplishments. The site is hosted on Netlify and deployed automatically from this repository.

**Live Site:** https://tajinder.cv/

## 🛠️ Tech Stack

- **Static Site Generator:** Hugo v0.157.0
- **Hosting:** Netlify
- **Theme:** Custom `taji-cv` theme
- **Language:** English (en-us)

## 📁 Project Structure

```
.
├── hugo.toml          # Hugo configuration
├── netlify.toml       # Netlify deployment configuration
├── themes/            # Hugo themes directory
│   └── taji-cv/       # Custom CV theme
├── content/           # Page content (disabled via disableKinds)
├── data/              # Data files for the CV
├── static/            # Static assets (CSS, images, etc.)
├── resources/         # Hugo resource cache
├── public/            # Build output (generated)
└── .gitignore         # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Hugo v0.157.0 or later
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd website
   ```

2. Start the Hugo development server:
   ```bash
   hugo server
   ```

3. Open your browser to `http://localhost:1313`

The site will automatically reload when you make changes to content or templates.

## 🎨 Customization

### Color Scheme

The website uses a customizable color palette defined in `hugo.toml`:

- **Primary Color:** #1e3a5f (dark blue)
- **Secondary Color:** #4a90d9 (medium blue)
- **Page Background:** #d6e4f0 (light blue)
- **Right Column Background:** #e8f1f8 (lighter blue)

Modify these values in the `[params]` section of `hugo.toml` to change the site's appearance.

### Configuration

Key settings in `hugo.toml`:

- `baseURL` - The base URL of your site
- `title` - Site title
- `swapColumns` - Toggle between two-column layouts
- `footerNote` - Footer copyright text

## 🔧 Build & Deployment

### Local Build

Generate the static site:
```bash
hugo --minify
```

Output is generated in the `public/` directory.

### Automatic Deployment

The site is configured to automatically deploy to Netlify on every push to the main branch. Netlify will:

1. Install Hugo v0.157.0
2. Run `hugo --minify`
3. Publish the `public/` directory

**Netlify Redirects:**
- Requests to `https://tajinder.cv/*` are redirected to `https://www.tajinder.cv/:splat` (301 permanent redirect)

## 📝 Content Management

Content is managed through:

- **Data files:** Store CV data in `data/` directory
- **Static files:** Store images and assets in `static/` directory
- **Theme templates:** Customize HTML in `themes/taji-cv/`

Standard Hugo page/section/taxonomy generation is disabled (`disableKinds`), allowing for a completely custom layout.

## 🔒 Features

- ✅ SEO optimized with meta tags
- ✅ Emoji support enabled
- ✅ Robots.txt auto-generation
- ✅ Responsive design
- ✅ Dark/light color scheme support

## 📦 Dependencies

- Hugo v0.157.0 (managed by Netlify)
- No external package dependencies

## 📄 License

See LICENSE file for details.

## 👤 Author

Tajinder Singh - [tajinder.cv](https://tajinder.cv/)
