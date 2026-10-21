# Product Requirements Document (PRD)
## Project: Dimas Arbi Ardian - Production Interactive Developer Portfolio

### 1. Product Overview & Vision
A state-of-the-art, high-performance personal developer portfolio for **Dimas Arbi Ardian** matching the design aesthetic of `styfensagala.vercel.app` (Bold, Purposeful, Grotesque Typography, High-Contrast Black & White Bento layout, and Interactive Physics Motion).

The portfolio highlights Dimas's three core pillars:
1. **Full-Stack Software Engineer** (Next.js 15, NestJS, MERN Stack, Laravel, TypeScript)
2. **AI & Computer Vision Researcher** (Published in SINTA 2 JUTIF, SOCIETY Journal, SENTIMETER)
3. **Technical Instructor & Speaker** (Mentored 1,000+ students & lecturers across Indonesia, Google Gen AI Speaker)

---

### 2. Core Functional Requirements & New Features

#### 2.1 Navigation & Global Controls (`Navbar.tsx`)
- Geometric hexagon monogram icon (`[D]`).
- Nav links: `HOME`, `ABOUT`, `PROJECTS`, `JOURNEY`, `GUESTBOOK`, `CONTACT` in bold uppercase font with underline indicator.
- Top control buttons:
  - Audio sound effects toggle (`🔊` / `🔇`) powered by zero-dependency Web Audio API synthesizer.
  - Dark / Light mode toggle (`🌙` / `☀️`).
  - Bilingual switcher pill (`US` / `ID`) for instant locale translation.

#### 2.2 Hero Section (`Hero.tsx`)
- Physics-inspired pill badges:
  - `[ FULL-STACK ENGINEER ]`
  - `[ AI RESEARCHER ]`
  - `[ INFORMATICS (CUM LAUDE) ]`
  - `[ TECHNICAL INSTRUCTOR ]`
  - Rotated sticker pill: `[ DIMAS ↗ ]`
  - Code icon pill: `[ </> ]`
  - Asterisk pill: `[ ✱ ]`
- Giant uppercase condensed grotesque title: **`DIMAS ARBI ARDIAN`** (spanning full viewport).
- Faint monospace system code underneath (`const INITIALIZE_SYSTEM = async () => { ... }`).
- 4-column border-divided bottom ticker bar:
  - `● OPEN TO WORK`
  - `BASED IN SUKABUMI, ID`
  - `TODAY: [DD MMM YYYY]`
  - `SCROLL DOWN ↓`

#### 2.3 About Me Bento Grid (`About.tsx`)
- Section heading: `ABOUT ME`.
- Bento Card 1: `👋 HI, I'M DIMAS ARBI ARDIAN.` with summary bio and `[ ⬇ DOWNLOAD RESUME ]` black pill button.
- Bento Card 2: Halftone dot pattern profile card with `@dimasarbiardian • ONLINE` pill and `[ HIRE ME ]` button.
- Bento Card 3: Education card with graduation cap, `GRADUATED 2026`, `UNIVERSITAS NUSA PUTRA`, `INFORMATICS ENGINEERING`, coursework pills, and huge `3.84 HIGHLY SATISFACTORY / 4.00 GPA (CUM LAUDE)`.
- Bento Card 4: `>_ TECH STACK` with categories (`CORE LANGUAGES`, `FRAMEWORKS & UI`, `BACKEND & DATABASES`, `AI, CLOUD & TOOLS`).
- Bento Card 5: Inverted solid black card `MY FOCUS` with `Full-Stack Systems` and `AI & Computer Vision` badges.

#### 2.4 Selected Works & Case Study Modal (`Projects.tsx` & `CaseStudyModal.tsx`)
- Section heading: `SELECTED WORKS`.
- Filter tabs: `ALL`, `FULL-STACK WEB`, `AI & VISION`, `ENTERPRISE & POS`.
- 6 Detailed Projects with interactive **"Read Case Study"** modal:
  1. **SahabatBK**: School Counseling & Anti-Bullying Platform.
  2. **Dompet Tracker**: Personal Finance & Wealth Management System.
  3. **CPMI Process Management System**: Indonesian Migrant Worker Monorepo.
  4. **Web-Based Attendance & Geofencing System**: BPS Kota Sukabumi.
  5. **MBG Nutrition Detection**: AI Free Nutritious Meal Classifier (SINTA 2 JUTIF).
  6. **AI Fruit Ripeness Classifier & Kios Beras FIFO POS**: VGG16 SENTIMETER & FIFO POS.

#### 2.5 Research & Full Certificate Viewer Modal (`Research.tsx` & `CertificateModal.tsx`)
- 4 Scientific Publications (JUTIF SINTA 2, SOCIETY Journal, SENTIMETER 2025, Jurnal Pengabdian Masyarakat).
- Verified Credentials Grid:
  - **"VIEW CERTIFICATE"** interactive button on each credential card.
  - Opens `CertificateModal.tsx` showing the full official certificate with guilloche border, recipient name, issuer, credential ID, validated skills, and direct Credly verification link.

#### 2.6 Interactive Journey & Internship Certificate Archive (`Journey.tsx`)
- Reverse chronological timeline (2026 down to 2022).
- Each milestone node includes:
  - **"VIEW INTERNSHIP CERTIFICATE"** button: Opens `CertificateModal` displaying the official internship certificate (e.g., SmartBridge Instructor Certificate, PT Dwitunggal Jaya Abadi Internship Certificate, BPS Kota Sukabumi PKL Certificate, SENTIMETER Presentation Certificate, Nusa Putra Cum Laude Degree).
  - **"OPEN PROJECT ARCHIVE"** expandable drawer showing key deliverables, technologies, and measurable impact.

#### 2.7 Interactive Evasive Mascot Creature (`InteractiveMascot.tsx`)
- Animated solid black rounded pill creature with two white circular eyes and black pupils.
- Lives along the bottom edge of the screen.
- Cursor avoidance: When the cursor approaches within ~140px, the mascot scurries away in the opposite direction!
- Cornered / Dizzy behavior: When the mascot reaches the viewport boundaries and has nowhere to run, it enters a confused/dizzy spinning state (`rotate: 360deg`, dizzy `@_@` eyes, question marks `? ? ?`, and confused audio wobble).

#### 2.8 Floating Guestbook Button (`FloatingGuestbookBadge.tsx`) & Section (`Guestbook.tsx`)
- Floating pill in bottom right: `[ ✍️ GUESTBOOK (Count) ]` with thick black border and solid shadow.
- Clicking smoothly scrolls to the `#guestbook` section.
- Anti-spam honeypot (`website_url`), in-memory IP rate limiter, and XSS sanitization.
- Zero-Client-Key Server-Only Supabase integration with graceful fallback mode.

#### 2.9 Contact Form & Instagram Integration (`Contact.tsx` & `Footer.tsx`)
- Direct Instagram integration: Links directly to `https://instagram.com/dimasarbiardian`.
- Direct channels: Email, WhatsApp, Location, Instagram, LinkedIn, GitHub.
- Server-side validated message form with Zod and Supabase `contact_messages`.

---

### 3. DevSecOps & Security Requirements (Non-Negotiable)
1. **Zero Client-Side Credentials**: No `NEXT_PUBLIC_` for Supabase credentials. All database interactions occur in `/api/guestbook` and `/api/contact` using `server-only`.
2. **Strict `.gitignore`**: Block all `.env*` except `!.env.example`.
3. **Anti-Spam & Sanitization**: Hidden honeypot `website_url` field, rate limiting, and HTML stripping.
4. **Security HTTP Headers**: Injected via `next.config.ts`.
