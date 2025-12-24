🛍️ Product Listing Page – Next.js Assignment

This project is a responsive Product Listing Page (PLP) built using Next.js.
It focuses on clean UI, proper component structure, and real-world frontend patterns like filtering, sorting, and server-side data fetching.

The UI and interactions are inspired by modern e-commerce platforms.

✨ Features

⚡ Built with Next.js (Pages Router)
📦 Server-side data fetching using getServerSideProps
🧭 Header with logo, icons, and centered navigation
🗂️ Left filter sidebar with accordion sections
🔄 Show / Hide filters with smooth slide animation
🔃 Product sorting (Recommended, Price, etc.)
📱 Fully responsive (desktop, tablet, mobile)
🎨 Custom CSS (no Tailwind or UI libraries)
🔐 Environment variables using .env.local

🛠️ Tech Stack
#Next.js
#React
#JavaScript
#CSS Modules
#Lucide Icons
#Google Fonts (Inter)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Deploy on Vercel

This project demonstrates Server-Side Rendering (SSR) using Next.js through getServerSideProps.
Because of this, the project is deployed on Vercel, which provides native and first-class support for SSR in Next.js.

Platforms like Netlify are static-first and do not execute getServerSideProps at runtime without additional adapters or configuration. Since the goal of this assignment is to showcase SSR knowledge and correct architectural decisions, Vercel was the appropriate choice.

Live Link: 
