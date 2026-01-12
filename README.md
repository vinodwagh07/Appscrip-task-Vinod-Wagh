# Product Listing Page (PLP)

A server-side rendered, SEO-optimized Product Listing Page built using **Next.js**.  
The project focuses on **performance, accessibility, responsiveness, SEO best practices, and clean frontend architecture**.



## 🚀 Live Demo

🔗 **Deployed URL:**  
https://appscrip-task-vinod-wagh.vercel.app/

🔗 **GitHub Repository:**  
https://github.com/vinodwagh07/Appscrip-task-Vinod-Wagh



## 🧠 Overview

This project implements a **responsive and SEO-friendly Product Listing Page (PLP)** inspired by a modern e-commerce layout.  
It demonstrates:

- Server-side rendering for improved performance and SEO
- Scalable and maintainable React architecture
- Minimal and efficient DOM structure
- Production-ready frontend practices



## 🛠️ Tech Stack

- **Framework:** Next.js (React)
- **Rendering Strategy:** Server-Side Rendering (SSR)
- **Styling:** CSS
- **Data Source:** FakeStore API (mock data)
- **Deployment:** Netlify

> Lightweight, no heavy UI libraries or unnecessary dependencies to keep the bundle minimal.



## ✨ Key Features

- ✅ Server-side rendering for SEO-friendly HTML  
- ✅ Fully responsive layout (mobile, tablet, desktop)  
- ✅ SEO-focused implementation: meta tags, semantic HTML, proper heading hierarchy, alt text, structured data (Schema.org)  
- ✅ Optimized images  
- ✅ Clean, maintainable, and scalable codebase  
- ✅ Minimal DOM nesting and lightweight CSS  
- ✅ Accessible user interface  
- ✅ Loading skeletons for better UX

---

## 🧩 Project Structure
The project follows a feature-oriented structure with Next.js App Router, keeping routing, UI components, and business logic clearly separated for scalability and maintainability.


```bash
src/
├── app/                    # Next.js App Router
│   ├── about/              # About page route
│   │   └── page.js
│   ├── contact-us/         # Contact page route
│   │   └── page.js
│   ├── skills/             # Skills page route
│   │   └── page.js
│   ├── stories/            # Stories page route
│   │   └── page.js
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Home / PLP page
│
├── components/             # Reusable UI components
│   ├── Breadcrumbs/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   └── ProductListing/     # PLP feature components
│
├── constants/              # Static configuration & constants
├── lib/                    # API & external integrations
│   └── api.js
│
│
├── .env
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md

```
---
## 🌐 Performance, SSR & SEO

- Data is server-rendered for faster FCP and SEO-friendly HTML  
- Semantic HTML with proper heading hierarchy  
- SEO-friendly image naming and alt text for all images  
- Structured data to improve search visibility  
- Minimal DOM nesting and lightweight CSS for performance  
- Well-defined component boundaries to avoid unnecessary re-renders

## 🧪 Running Locally

Clone the repository:

```bash
git clone https://github.com/vinodwagh07/Appscrip-task-Vinod-Wagh.git
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm start
```


