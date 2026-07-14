# NextJS Blog Site

<img width="1257" height="692" alt="Image" src="https://github.com/user-attachments/assets/234dd1fe-e34c-40d5-956f-d880c9dd3b59" />

A modern blog template built with **Next.js**, **Tailwind CSS**, and **Sanity CMS**. This repo includes a responsive blog website, dynamic post pages, archive layout, contact page, and a Sanity Studio setup for content editing.

## Overview

This project is a ready-to-use blog template designed for developers and content creators. It supports fast page rendering, SEO-friendly structure, and a flexible CMS backend powered by Sanity.

## Preview

- Responsive homepage with featured posts
- Archive page for browsing all posts
- Blog post pages with author metadata
- Contact page UI
- Local Sanity Studio for content management

## Features

- Responsive design with Tailwind CSS
- Next.js App Router structure
- Dynamic blog post routing
- Sanity CMS v3 integration
- SEO and sitemap support
- Reusable component architecture
- Dark/light mode UI support
- Contact page layout
- Local development environment ready

## Tech Stack

- **Next.js 14**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Sanity CMS v3**
- **next-sitemap**
- **next-seo**
- **styled-components**
- **SWR**
- **@headlessui/react**
- **@heroicons/react**

## Project Structure

- `app/` – application routes, pages, and Sanity Studio wrapper
- `components/` – reusable UI and layout components
- `lib/` – Sanity client, config, queries, and schema definitions
- `public/` – static assets, images, and fonts
- `styles/` – global Tailwind and Prism styles
- `utils/` – utility functions

## Screenshots

Below are screenshots from the project preview:

- Home Page
<img width="1265" height="689" alt="Image" src="https://github.com/user-attachments/assets/6254c12c-3bd0-4375-852f-25683fd1ac2c" />

- Archive Page
<img width="1257" height="692" alt="Image" src="https://github.com/user-attachments/assets/c77f6b06-ccc0-4f46-ab50-b237c0df3142" />

- Contact page
<img width="1256" height="692" alt="Image" src="https://github.com/user-attachments/assets/0f13c796-3098-4f21-81b1-3394f50e08e3" />



## Getting Started

### Prerequisites

- Node.js 18 or newer
- `pnpm` package manager

### Clone the repository

```bash
git clone https://github.com/bharatlal124/Next-blog-s.git
cd Next-blog-s
```

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.local.example .env.local
```

Then open `.env.local` and add your Sanity project settings.

### Run locally

```bash
pnpm dev
```

Open your browser at:

```text
http://localhost:3000
```

### Start Sanity Studio

```bash
pnpm sanity
```

Then open the local Studio URL shown in the terminal.

## Optional: Import Demo Content

If sample content is available in `lib/sanity/data/production.tar.gz`, import it with:

```bash
pnpm sanity-import
```

## Build for production

```bash
pnpm build
pnpm start
```

## Notes

- This repository is configured for `pnpm` by default.
- You can also use `npm` or `yarn` if preferred:
  - `npm install`
  - `npm run dev`
  - `yarn install`
  - `yarn dev`
- Make sure `.env.local` contains valid Sanity credentials before running the app.

## Contribution

Feel free to customize styles, add new pages, or extend Sanity schemas. Pull requests and issues are welcome.

---

## License

This repository is provided as a starter template. Update the license section if you choose a specific license for your project.
