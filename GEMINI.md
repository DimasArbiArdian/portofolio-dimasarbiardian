# ROLE & OBJECTIVE
You are a Principal Full-Stack Engineer and DevSecOps Architect. Your task is to build a complete, production-ready, interactive developer portfolio website for **Dimas Arbi Ardian** using **Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion**, with a **100% Server-Side Supabase** backend for the Guestbook and Contact Form.

The visual aesthetic, layout structure, and physics-inspired motion must take inspiration from `styfensagala.vercel.app` ("Bold, Purposeful, & Physics-Inspired"), while elevating the content to showcase Dimas's three core pillars:
1. **Full-Stack Software Engineer** (Next.js, NestJS, MERN Stack, Laravel)
2. **AI & Computer Vision Researcher** (Published Author in SINTA 2 JUTIF, SOCIETY Journal, & SENTIMETER)
3. **Technical Instructor & Speaker** (Mentored 1,000+ students & university lecturers nationwide)

---

# 🚨 CRITICAL SECURITY & DEVSECOPS RULES (NON-NEGOTIABLE)
1. **NO `NEXT_PUBLIC_` ENVIRONMENT VARIABLES:** Never use the `NEXT_PUBLIC_` prefix for any Supabase URL, Supabase Key, or API secret. Zero credentials may be bundled into client-side JavaScript.
2. **SERVER-ONLY SUPABASE CLIENT:** Create `src/lib/supabase-server.ts` importing `server-only`. Initialize `@supabase/supabase-js` using `process.env.SUPABASE_URL` and `process.env.SUPABASE_SERVICE_ROLE_KEY` (or server-side `SUPABASE_ANON_KEY`) strictly inside Next.js Server Route Handlers (`src/app/api/guestbook/route.ts` and `src/app/api/contact/route.ts`).
3. **STRICT `.gitignore` FIRST:** Before or during project initialization, ensure `.gitignore` explicitly blocks `.env`, `.env.local`, `.env.development`, `.env.production`, and `.env.*`, while allowing `!.env.example`.
4. **INPUT SANITIZATION & ANTI-SPAM:**
   - Validate all incoming POST payloads in `/api/guestbook` and `/api/contact` using **Zod**.
   - Strip HTML/script tags from inputs to prevent Stored XSS in the Guestbook.
   - Include a hidden `honeypot` field (`website_url`) in both forms; if filled by a bot, silently reject the submission with a 200 OK fake response.
   - Implement an in-memory IP rate-limiter helper (max 3 requests per minute per IP) on POST endpoints.
   - **Graceful Fallback Mode:** If `SUPABASE_URL` is not yet configured in `.env.local` during local UI preview, the `/api/guestbook` GET route must gracefully return realistic initial seed messages so the UI never crashes.
5. **HTTP SECURITY HEADERS:** Configure `next.config.ts` to inject `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy: strict-origin-when-cross-origin`.

---

# 🛠️ TECH STACK & DEPENDENCIES
- **Framework:** Next.js 15 (App Router), React 19, TypeScript (Strict Mode)
- **Styling:** Tailwind CSS, `lucide-react` icons, `clsx`, `tailwind-merge`
- **Fonts:** `Plus Jakarta Sans` (UI/Headings) & `JetBrains Mono` (Code blocks, metrics, badges)
- **Animation:** `framer-motion` (smooth scroll reveals, spring cards, interactive folder archive, floating mascot)
- **Backend & Validation:** `@supabase/supabase-js`, `zod`, `server-only`

---

# 📐 APPLICATION ARCHITECTURE & SECTIONS TO BUILD

## 1. Global UI & Navigation (`Navbar.tsx` & `FloatingMascot.tsx`)
- **Sticky Glassmorphism Navbar:** Links to `#home`, `#about`, `#projects`, `#research`, `#journey`, `#guestbook`, `#contact`.
- **Bilingual Toggle (🇺🇸 EN / 🇮🇩 ID):** State-driven language switcher using a clean local dictionary (`src/data/dictionaries.ts`) with instant UI translation.
- **Top Status Bar:** Pulsing emerald indicator `"Open to Work"` | `"Based in Sukabumi, ID"` | Dynamic real-time date `"TODAY: [DD MMM YYYY]"`.
- **Interactive Floating Widget (Bottom-Right):** Physics-inspired floating badge/mascot cycling states: idle (`z Z`), hover (`!`), and click (`🖐` with a friendly toast greeting).

## 2. Hero Section (`#home`)
- **Headline:** `DIMAS ARBI ARDIAN` with subtitle badges: `Full-Stack Software Engineer` • `AI Researcher` • `Technical Instructor`.
- **Decorative IDE Code Window (`INITIALIZE_SYSTEM`):**
  Render a sleek dark-mode macOS/VSCode style terminal card with syntax highlighting:
  ```typescript
  const INITIALIZE_SYSTEM = async () => {
    const Developer = {
      ID: "DIMAS_ARBI_ARDIAN",
      Degree: "B.CompSc_Informatics (GPA: 3.84/4.00_Cum_Laude)",
      Origin: "Sukabumi_Indonesia",
      Role: "Full_Stack_Engineer & AI_Researcher",
      Impact: "Mentored_1000+_Students_&_Lecturers"
    };
    await System.load("Next.js_15", "NestJS", "MERN_Stack", "TypeScript", "YOLOv8_AI");
    if (Project.isComplex) return Developer.solveWith(CleanArchitecture + AI + Agile);
    return Developer.deploy({ clarity: true, security: "Strict", motion: "Physics_Inspired" });
  }; // Status: ONLINE | Mode: OPEN_TO_WORK <END_OF_SCRIPT>
  ```
- **Infinite Marquee Strip:** `FULL-STACK WEB DEVELOPER ✦ AI & COMPUTER VISION RESEARCHER ✦ TECHNICAL INSTRUCTOR ✦ GOOGLE GEN AI SPEAKER ✦ S.KOM (CUM LAUDE)`

## 3. About Me, Education & Tech Stack (`#about`)
- **Summary Bio:**
  "Informatics Engineering graduate (GPA: 3.84/4.00) with expertise in Full-Stack Web Development and Artificial Intelligence. Experienced in delivering production-ready applications using Next.js, MERN Stack, NestJS, and Laravel, as well as authoring scientific research in Deep Learning and Computer Vision. Active technical instructor and Google Gen AI speaker dedicated to building impactful digital solutions and driving collaborative innovation."
- **CTAs:**
  - `Download Resume` button linking to `/resume/CV-Dimas-Arbi-Ardian.pdf`.
  - `Hire Me` button scrolling to `#contact`.
- **Education Bento Card:**
  - **Nusa Putra University** – Sukabumi, Indonesia (*September 2022 – September 2026*)
  - *Bachelor of Informatics Engineering (S.Kom.)* — **GPA: 3.84 / 4.00 (Cum Laude)**
  - **Coursework Tags:** Full-Stack Web Engineering, AI & Deep Learning, Database Architecture, Cloud Computing, Software Engineering (Agile/SDLC).
  - **Academic Highlights:** First Author & Presenter at SENTIMETER (2025); Co-Author of SINTA 2 Accepted Journal at JUTIF UNSOED (2026); Participant at ICITACS International Conference (NTU Singapore, 2024) & ICANDIT (2026).
- **Categorized Tech Stack Grid:**
  - *Core Languages:* Python, TypeScript, JavaScript (ES6+), PHP, SQL, HTML5, CSS3
  - *Frontend & UI:* Next.js 15 (App Router), React 19, Tailwind CSS, Zustand, TanStack Query, Framer Motion, Recharts, Leaflet.js
  - *Backend & Databases:* NestJS, Node.js, Express.js, Laravel, Prisma ORM 6, PostgreSQL, MongoDB Atlas, MySQL, SQLite, Swagger (OpenAPI)
  - *AI, Cloud & Ecosystem:* YOLOv8, CNN (VGG16), Random Forest, Gemini API / Vertex AI, AWS, Alibaba Cloud, Salesforce (Apex/LWC), Git/GitHub, npm workspaces (Monorepo), Google Apps Script

## 4. Selected Works / Projects (`#projects`)
Include category filter tabs (`All`, `Full-Stack Web`, `AI & Computer Vision`, `Enterprise & POS`) and an interactive **Case Study Modal** when clicking `"Read Case Study"`. Populate `src/data/portfolio-data.ts` with these 6 projects:
1. **SahabatBK – School Counseling & Anti-Bullying Platform**
   - *Category:* Full-Stack Web App | *Stack:* Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma ORM 6, PostgreSQL, JWT (`jose`, `bcryptjs`)
   - *Metrics:* `3 Role Portals` | `100% Anonymous Whistleblower` | `RIASEC Assessment`
   - *Details:* Multi-portal digital counseling ecosystem (Student, Counselor, Admin), anonymous bullying reporting with status tracking, Holland RIASEC career test, mood tracker, WhatsApp consultation, and 1-click CSV export.
   - *Links:* Live (`https://sahabat-bk.vercel.app/`) | GitHub (`https://github.com/DimasArbiArdian/sahabat-bk`)
2. **Dompet Tracker – Personal Finance & Wealth Management System**
   - *Category:* Full-Stack Web App (MERN) | *Stack:* React (Vite), Node.js, Express.js, MongoDB Atlas, Tailwind CSS, Recharts
   - *Metrics:* `0–100 Health Score Engine` | `Multi-Wallet` | `A4 PDF Executive Report`
   - *Details:* Editorial Warm-Modern UI (`#359FA0` Deep Teal & `#FFF0C5` Warm Cream), multi-wallet reconciliation, proprietary 0–100 Financial Health Score & Burn Rate projection, debt/loan installment tracker, recurring billing calendar, and privacy balance masking (`H` shortcut).
   - *Links:* Live (`https://dompet-tracker.vercel.app/`) | GitHub (`https://github.com/DimasArbiArdian/dompet-tracker`)
3. **CPMI Process Management System (PT Dwitunggal Jaya Abadi)**
   - *Category:* Enterprise & POS | *Stack:* Next.js (App Router), NestJS (REST API), Prisma ORM, SQLite, Zustand, TanStack Query, Swagger, npm workspaces
   - *Metrics:* `800+ Candidate Records` | `300+ Worker Departures` | `4-Role RBAC`
   - *Details:* End-to-end full-stack monorepo managing Indonesian migrant worker placements to Japan, Germany, Turkey, Kuwait, and Saudi Arabia. Features 4-Role RBAC (Super Admin, Officer, Manager, Candidate), audit trails, and document verification workflows.
4. **Web-Based Attendance & Geofencing System – BPS Kota Sukabumi**
   - *Category:* Full-Stack Web App | *Stack:* MERN Stack (MongoDB Atlas, Express, React, Node.js), Laravel, Tailwind CSS, Haversine Geofencing, Leaflet.js, Webcam API
   - *Metrics:* `80% Faster Recap` | `50+ Active Users` | `100% Audit Compliance`
   - *Details:* GPS Geofencing attendance using Haversine formula, live webcam selfie snapshot, dual responsive layout (desktop analytics & mobile bottom-nav), daily activity reports, and official BPS letterhead Excel/PDF exports. Published in SOCIETY Journal (2026).
   - *Links:* Live (`https://presensi-bps.vercel.app/`) | GitHub (`https://github.com/DimasArbiArdian/presensi-bps`)
5. **MBG Nutrition Detection – AI Free Nutritious Meal Classifier**
   - *Category:* AI & Computer Vision | *Stack:* Python, YOLOv8n, Random Forest, OpenCV, Google Colab
   - *Metrics:* `SINTA 2 Accepted (JUTIF)` | `YOLOv8n + Random Forest` | `Multi-Item Food AI`
   - *Details:* AI dietary assessment pipeline combining YOLOv8n object detection for multi-item food localization with a Random Forest classifier to evaluate macro-nutrient adequacy under Indonesia's Free Nutritious Meal (*Makan Bergizi Gratis*) initiative.
   - *Links:* Notebook (`https://colab.research.google.com/drive/17DVRpy8BUgTsWbJ9hcOS2M7yf8q55pLo?usp=sharing`) | GitHub (`https://github.com/DimasArbiArdian/mbg_web`)
6. **AI Fruit Ripeness Classifier & Kios Beras FIFO POS**
   - *Category:* AI & Computer Vision / Enterprise & POS
   - *AI Fruit Classifier:* VGG16 CNN in Python/TensorFlow; boosted accuracy from `56.35% to 95.91%` and reduced loss from `0.9285 to 0.1721`. Published & presented as First Author at SENTIMETER 2025 (`https://colab.research.google.com/drive/1KNY4-pzPRRWvCxLl6MFYdkpI4dl20ECJ?usp=sharing`).
   - *Kios Beras FIFO POS:* Cloud POS using Google Apps Script & Google Sheets DB with a serialized JSON First-In, First-Out (FIFO) stock queue engine for automated COGS/HPP calculation and multi-unit conversion.

## 5. Publications, Certifications & Languages (`#research`)
- **Scientific Publications Showcase (4 Cards):**
  1. *JUTIF (SINTA 2 Accredited, Vol. 8 No. 3, Forthcoming Jun 2027 — LoA Jul 2026)*: "YOLOv8n and Random Forest for Nutritional Adequacy Classification of Indonesian Free Nutritious Meal Images" — **Second Author**.
  2. *SOCIETY: Jurnal Pengabdian Masyarakat (Vol. 5 No. 2, Mar 2026, pp. 308–313)*: "Implementation of a Web-Based Attendance System for Internship Monitoring in a Public Institution" — **First Author & Lead Software Engineer**.
  3. *Prosiding Seminar Nasional SENTIMETER (May 2025)*: "Klasifikasi Tingkat Kematangan Buah Jeruk Menggunakan Arsitektur VGG16" — **First Author & Presenter**.
  4. *Jurnal Pengabdian Masyarakat Nusa Putra (2024)*: "Upaya Peningkatan Pengetahuan dan Keterampilan Masyarakat Berbasis Pemberdayaan Sumber Daya Lokal Melalui Kegiatan KKN Tematik" — **Co-Author**.
- **Verified Certifications Grid (with Credly/Verification Links):**
  - MongoDB Certified Associate Developer (`https://www.credly.com/badges/2367f0b7-bf83-4b0f-a85b-3b54b1579738/public_url`)
  - Alibaba Cloud Certified Associate (ACA) – System Operator (Valid thru May 2027)
  - IT Specialist in Python – Certiport (`https://www.credly.com/badges/06e639ca-2304-4789-ba7f-647587a43671/public_url`)
  - AWS Academy Graduate – Machine Learning Foundations (`https://www.credly.com/badges/7164af4a-f5e2-4d14-8628-d99df5ffb891/public_url`)
  - Prompt Design in Vertex AI – Google Cloud (`https://www.credly.com/badges/5474cd71-d5a3-47e2-9074-e4d1cbb2b4a2/public_url`)
  - Salesforce Talent Accelerator Program (STAP) – SmartBridge & Salesforce Partner
  - Gemini Certified Educator Suite (Higher Education & General) – Google for Education (Valid thru June 2029)
  - LLM-Based Tools & Gemini API Integration for Data Scientists – Hacktiv8 & Google.org
  - HCIA-AI V3.5 – Huawei ICT Academy & Belajar Machine Learning (90 Hours) – Dicoding
  - Languages & Test Scores: **British Council EnglishScore: 305 (CEFR B1)** | **TPA Bappenas: 518.17** | **Public Speaking Certified (Grade B - EPDC)** | **Spanish (CEFR A1/A2)**.

## 6. My Journey / Interactive Timeline (`#journey`)
Vertical reverse-chronological timeline (`2026` down to `2022`). Each node includes an interactive **"Project Archive — Tap to Open Folder"** drawer/accordion that reveals key deliverables, certificates, and architectural highlights:
- **Jan 2026 – Present | Full Stack Development Instructor Intern @ SmartBridge** (600+ MERN students across UNTAR, Amikom, UPI; Key Speaker for 1,000+ Google Gen AI attendees; 60+ UNTAR faculty lecturers trained; 150+ Salesforce STAP mentees).
- **Oct 2025 – Feb 2026 | Full-Stack Developer & IT Support Intern @ PT Dwitunggal Jaya Abadi / Delta Abadi Internasional** (Predikat: *Sangat Baik* — Built CPMI Monorepo System for 800+ candidates & 300+ departures).
- **Feb 2025 – Jul 2025 | Full-Stack Web Developer Intern @ BPS Kota Sukabumi** (Predikat: *Sangat Baik* — 6 months Internship & PKL, cut recap time by 80% for 50+ interns, published in SOCIETY Journal).
- **May 2025 | First Author & Presenter @ SENTIMETER National Seminar** (VGG16 Citrus Ripeness Classification).
- **Aug 2024 | International Conference Participant @ ICITACS 2024 (NTU Singapore)** & Project Lead for SahabatBK.
- **Sep 2022 – Sep 2026 | Bachelor of Informatics Engineering @ Nusa Putra University** (Graduated Cum Laude, GPA 3.84/4.00).

## 7. Guestbook (`#guestbook`) & Contact Section (`#contact`)
- **Guestbook Section:**
  - Displays a live counter badge (e.g., `Guestbook [Count]`) and a scrollable wall of visitor messages fetched via `GET /api/guestbook`.
  - Form inputs: `name` (required, max 60 chars), `role_or_company` (optional, max 80 chars), `message` (required, max 280 chars), plus hidden `website_url` honeypot.
  - Submits via `POST /api/guestbook` with optimistic UI / loading state.
- **Contact Section:**
  - Direct Contact Info: `dimasarbiardian@gmail.com` | `+62 858-7283-4600` | Sukabumi, Jawa Barat, Indonesia.
  - Social Links: LinkedIn (`https://linkedin.com/in/dimasarbiardian`) & GitHub (`https://github.com/DimasArbiArdian`).
  - Form inputs: `name`, `email`, `subject` dropdown (`Job Opportunity`, `Project Collaboration`, `Speaking / Workshop Invitation`, `General Inquiry`), `message`, plus hidden `website_url` honeypot.
  - Submits via `POST /api/contact` which validates via Zod and inserts into the Supabase `contact_messages` table.

---

# DELIVERABLES & EXECUTION STEPS
1. Scaffold the project files, `package.json`, `.gitignore`, `.env.example`, and `next.config.ts`.
2. Create `src/data/portfolio-data.ts` and `src/data/dictionaries.ts` with 100% complete data (no `TODO` placeholders).
3. Build `src/lib/supabase-server.ts`, `src/lib/validations.ts`, and both `/api/guestbook/route.ts` and `/api/contact/route.ts`.
4. Build all modular UI components and assemble them in `src/app/page.tsx`.
5. Verify TypeScript compilation (`npm run build`) and ensure zero leaked keys in client bundles.
