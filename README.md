# FlexSpace

FlexSpace is a production-ready, highly polished Full Stack Workspace Marketplace built with **Next.js**, **TypeScript**, and **MongoDB**. The platform allows professionals to effortlessly explore, filter, and discover available office spaces, desks, and executive suites, while providing authorized hosts an ecosystem to list and manage real estate inventory in real-time.

---

## 🚀 Key Features & Architectural Overview

### 1. Unified Next.js Full Stack Architecture
* **Frontend Ecosystem:** Powering server-side rendering (SSR), dynamic metadata routing, and client hydration utilizing clean React functional loops.
* **Backend Foundations:** Engineered entirely with secure Next.js API Routes (`/api/spaces/*`), featuring standalone handlers mapped directly to database logic.
* **Database Management:** Powered by MongoDB Atlas leveraging structural Mongoose Schemas with strict field validation pipelines (`availableDate`, validation checks, schema controls).

### 2. Live Core Market Capabilities
* **Interactive Landing Framework:** Features a sticky dynamic context Navbar changing route availability based on authorization status (3 routes logged out vs. 5 routes logged in), a bounded structural Hero canvas, and a cohesive multi-sectional ecosystem (Features, Highlights, Statistics, Testimonials, FAQ, Newsletter, Footer).
* **Granular Explore Engine:** Advanced text-matching query pipeline supporting deep database regex lookups across locations, pricing bounds, sorting orders, and dynamic infinite-pagination.
* **Protected Dashboards:** Private layout assets safeguarded with Client Guard validation filters (`localStorage`), giving authenticated hosts a secure portal to **Add Workspaces** and **Manage Live Inventory** through responsive analytical tables complete with instant UI row state adjustments upon resource deletion.

---

## 🛠️ Technology Stack & Dependencies

### Core Framework & Runtime
* **Next.js 14/15 (App Router)** - Full Stack Framework
* **React.js** - UI Component Library
* **TypeScript** - Static Type Safety

### Main Dependencies Installed
* **mongoose** - MongoDB Object Modeling (ODM) for database connectivity and validation hooks
* **lucide-react** - Clean, modern SVG icon kit used throughout forms and dashboards
* **recharts** (or **chart.js**) - Composited charting library for dashboard analytical components

### DevDependencies & Styling
* **tailwindcss** - Utility-first CSS framework for responsive design implementation
* **postcss / autoprefixer** - CSS compilation tools
* **@types/node / @types/react** - Comprehensive TypeScript definitions

---

## 🎨 Global UI & Unified Design Blueprint

FlexSpace adheres strictly to consistent professional UI/UX standards across all micro-layouts:
* **Cohesive Palette:** Governed by a strict 3-primary color layout architecture (Indigo base, Slate text neutral accents, Crisp clean canvas backdrops).
* **Component Uniformity:** Cards, textareas, dynamic text inputs, and listing blocks follow identical structural sizing metrics, hover transitions, and rounded (`rounded-2xl` / `rounded-xl`) borders.
* **Break-Free Mobile Layouts:** Fully responsive viewport grids scaling automatically from large high-definition desktops down to compact mobile phones (<576px).
* **Production Context Content:** Zero placeholder content or `lorem ipsum` strings. All space listings, reviews, descriptions, and data cards feature realistic real estate and workspace operational context.

---

## 📁 Repository Directory Map

```text
flexspace/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── spaces/
│   │   │       ├── route.ts          # Global GET (Search/Filter) & POST (Create) handlers
│   │   │       └── [id]/
│   │   │           └── route.ts      # Dynamic target GET (Detail) & DELETE handlers
│   │   ├── spaces/
│   │   │   ├── add/
│   │   │   │   └── page.tsx      # Protected listing submission workspace form
│   │   │   ├── manage/
│   │   │   │   └── page.tsx      # Secure inventory management dashboard grid
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Dynamic workspace details view with related suggestions
│   │   ├── explore/
│   │   │   └── page.tsx          # Real-time search marketplace feed
│   │   ├── privacy/
│   │   │   └── page.tsx          # Compliance page
│   │   └── contact/
│   │       └── page.tsx          # Communications additional node page
│   ├── lib/
│   │   └── db.ts                 # Database singleton connection wrapper
│   ├── models/
│   │   └── Space.ts              # Core Mongoose Schema blueprint validator
└── public/                       # Static resource application assets