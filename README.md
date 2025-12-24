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

Initially, the application fetched product data from a public API (FakeStore). While this worked reliably in local development, the API proved unstable in a serverless SSR environment, frequently returning non-JSON or failed responses during deployment. This caused inconsistent server-rendered output without reflecting issues in the application logic itself.

To ensure deterministic and reliable SSR, the product data was moved to a local dataset and injected into the page using getServerSideProps. This approach guarantees that data is available at render time and allows the focus to remain on SSR behavior, layout logic, filtering, and sorting—core aspects of the assignment. Importantly, the data is still rendered on the server, preserving the SSR requirement. Only the data source changed, not the rendering strategy.


