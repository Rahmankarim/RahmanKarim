# Rahman Karim

A modern personal portfolio built with Next.js and Tailwind CSS showcasing projects, skills, and contact information for Rahman Karim.

Preview
- Sections: Hero, About, Selected Work, Experience, Education, Certifications, Testimonials, Contact
- Theme: Clean, typographic-forward, accent color for emphasis

Tech stack
- Next.js 16 (Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- Motion (motion/react) for fine-grained animations
- Lenis for smooth scrolling

Getting started
1. Install dependencies

```bash
pnpm install
# or
npm install
```

2. Run the development server

```bash
pnpm dev
# or
npm run dev
```

3. Build for production

```bash
pnpm build
# or
npm run build
```

Folder structure (important files)
- `app/layout.tsx` — root layout and global imports
- `app/globals.css` — main site styles
- `app/work.css` — SELECTED WORK section styles
- `components/portfolio.tsx` — main portfolio UI and sections
- `public/` — static assets and images

Styling decisions
- Uses a typographic scale with accent highlights for emphasis
- Project images are sized to a consistent container to avoid layout shifts
- Tag chips, subtle watermark project titles, and responsive breakpoints are implemented

Deploy
- Recommended: Vercel (automatic Next.js support). Connect this repository and set the build command to `pnpm build` and output to the default Next.js target.

Contributing
- Fork and open a PR. For style changes, prefer minimal, theme-consistent edits.

Contact
- Email: rahmankarim2468@gmail.com

License
- No license specified. Add a license file if you want this repository to have one.
