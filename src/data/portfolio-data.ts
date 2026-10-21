export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack Web' | 'AI & Computer Vision' | 'Enterprise & POS';
  tagline: string;
  description: string;
  stack: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image?: string;
  previewImage?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    architecture: string[];
    keyFeatures: string[];
    impact: string[];
  };
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  tier: string;
  role: string;
  year: string;
  status: string;
  link?: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  validity: string;
  badgeUrl: string;
  credentialUrl?: string;
  category: 'Cloud & DevOps' | 'AI & Data' | 'Software Engineering';
  credentialId: string;
  issuedDate: string;
  verificationType: string;
  skills: string[];
  summary: string;
  pdfUrl?: string;
  previewUrl?: string;
}

export interface InternshipCertificate {
  title: string;
  issuer: string;
  signatory: string;
  date: string;
  credentialId: string;
  grade: string;
  description: string;
  highlights: string[];
  pdfUrl?: string;
  previewUrl?: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  grade?: string;
  description: string;
  internshipCertificate?: InternshipCertificate;
  folderArchive: {
    title: string;
    deliverables: string[];
    technologies: string[];
    metricsOrImpact: string[];
  };
}

export interface GuestbookEntry {
  id: string;
  name: string;
  role_or_company?: string;
  message: string;
  is_approved: boolean;
  created_at: string;
}

export const DEVELOPER_INFO = {
  name: "Dimas Arbi Ardian",
  shortName: "Dimas",
  degree: "Bachelor of Informatics Engineering (S.Kom.)",
  university: "Nusa Putra University",
  gpa: "3.84 / 4.00 (Cum Laude)",
  location: "Sukabumi, Jawa Barat, Indonesia",
  email: "dimasarbiardian@gmail.com",
  phone: "+62 858-7283-4600",
  roles: [
    "Full-Stack Software Engineer",
    "AI & Computer Vision Researcher",
    "Technical Instructor & Speaker"
  ],
  bio: "Informatics Engineering graduate (GPA: 3.84/4.00) with expertise in Full-Stack Web Development and Artificial Intelligence. Experienced in delivering production-ready applications using Next.js, MERN Stack, NestJS, and Laravel, as well as authoring scientific research in Deep Learning and Computer Vision. Active technical instructor and Google Gen AI speaker dedicated to building impactful digital solutions and driving collaborative innovation.",
  bioId: "Lulusan Teknik Informatika (IPK: 3.84/4.00) dengan keahlian dalam Pengembangan Web Full-Stack dan Kecerdasan Buatan. Berpengalaman membangun aplikasi skala produksi menggunakan Next.js, MERN Stack, NestJS, dan Laravel, serta mempublikasikan riset ilmiah di bidang Deep Learning dan Computer Vision. Instruktur teknis aktif dan pembicara Google Gen AI yang berdedikasi membangun solusi digital berdampak tinggi.",
  resumeUrl: "/resume/CV_Dimas_Arbi_Ardian.pdf",
  socials: {
    github: "https://github.com/DimasArbiArdian",
    linkedin: "https://www.linkedin.com/in/dimasarbiardian",
    instagram: "https://www.instagram.com/diimmm_ar",
    email: "mailto:dimasarbiardian@gmail.com"
  },
  stats: [
    { label: "GPA (Cum Laude)", value: "3.84 / 4.00" },
    { label: "Mentees & Attendees", value: "1,000+" },
    { label: "Scientific Publications", value: "4 Papers" },
    { label: "Production Deployments", value: "10+ Apps" }
  ]
};

export const TECH_STACK = {
  languages: [
    { name: "Python", icon: "🐍", level: "Advanced" },
    { name: "TypeScript", icon: "🔷", level: "Advanced" },
    { name: "JavaScript", icon: "⚡", level: "Advanced" },
    { name: "PHP", icon: "🐘", level: "Proficient" },
    { name: "SQL", icon: "🗄️", level: "Advanced" },
    { name: "HTML5", icon: "🌐", level: "Expert" },
    { name: "CSS3", icon: "🎨", level: "Expert" }
  ],
  frontend: [
    { name: "Next.js", icon: "▲", tag: "App Router" },
    { name: "React", icon: "⚛️", tag: "v19" },
    { name: "Tailwind CSS", icon: "🌊", tag: "v4" },
    { name: "Framer Motion", icon: "🎬", tag: "Physics" },
    { name: "Zustand", icon: "🐻", tag: "State" },
    { name: "TanStack Query", icon: "🔄", tag: "Server State" },
    { name: "Recharts", icon: "📊", tag: "Charts" },
    { name: "Leaflet.js", icon: "🗺️", tag: "GIS Maps" }
  ],
  backend: [
    { name: "NestJS", icon: "🦁", tag: "Enterprise" },
    { name: "Node.js", icon: "🟢", tag: "Runtime" },
    { name: "Express.js", icon: "⚡", tag: "REST API" },
    { name: "Laravel", icon: "🔴", tag: "PHP MVC" },
    { name: "Prisma ORM", icon: "💎", tag: "Type-Safe" },
    { name: "PostgreSQL", icon: "🐘", tag: "Relational" },
    { name: "MongoDB", icon: "🍃", tag: "NoSQL Atlas" },
    { name: "MySQL & SQLite", icon: "🐬", tag: "SQL" }
  ],
  aiAndCloud: [
    { name: "YOLOv8", icon: "👁️", tag: "Vision AI" },
    { name: "VGG16 / CNN", icon: "🧠", tag: "Deep Learning" },
    { name: "Random Forest", icon: "🌲", tag: "Ensemble" },
    { name: "Gemini API", icon: "✨", tag: "LLMs" },
    { name: "AWS Cloud", icon: "☁️", tag: "Infra" },
    { name: "Alibaba Cloud", icon: "🟠", tag: "ACA Certified" },
    { name: "Salesforce LWC", icon: "☁️", tag: "STAP Graduate" },
    { name: "Git & GitHub", icon: "🐙", tag: "DevSecOps" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "sahabat-bk",
    title: "SahabatBK – School Counseling & Anti-Bullying Platform",
    category: "Full-Stack Web",
    tagline: "Comprehensive Multi-Portal Counseling & Anonymous Whistleblower Ecosystem",
    description: "An integrated web platform designed for schools to facilitate confidential counseling, anonymous bullying reporting with status tracking, Holland RIASEC career assessments, mood analytics, and WhatsApp counselor escalation.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma ORM 6", "PostgreSQL", "JWT", "jose", "bcryptjs"],
    metrics: ["3 Role Portals", "100% Anonymous Whistleblower", "RIASEC Assessment Engine", "1-Click CSV Audit"],
    liveUrl: "https://sahabat-bk.vercel.app/",
    githubUrl: "https://github.com/DimasArbiArdian/sahabat-bk",
    featured: true,
    caseStudy: {
      overview: "Traditional school counseling often suffers from severe student hesitation due to social stigma and fears of retaliation. SahabatBK breaks these barriers through encrypted, anonymous reporting and proactive mental health tools.",
      challenge: "Building a strict zero-leakage anonymous reporting channel while allowing counselors to follow up on cases without knowing the student's true identity, alongside role-based access for students, guidance counselors, and school principals.",
      solution: "Engineered a cryptographic ticket system where anonymous incident submissions generate a persistent unique tracking hash. Implemented the Holland RIASEC psychometric assessment model with real-time scoring and responsive counselor dashboards.",
      architecture: [
        "Next.js 15 App Router with Server Components for low-latency dashboard loads",
        "Prisma ORM 6 connected to PostgreSQL with strict relational integrity",
        "Stateless JWT session authentication using `jose` with HttpOnly cookies",
        "Role-Based Access Control (RBAC) across Student, Counselor, and Admin roles"
      ],
      keyFeatures: [
        "Cryptographic anonymous whistleblower system with public case tracker",
        "Holland RIASEC vocational personality test with automated career trajectory suggestions",
        "Weekly emotional mood check-in tracker with longitudinal trend graphs",
        "Direct emergency WhatsApp integration for immediate crisis response",
        "Counseling session scheduler and one-click institutional CSV audit export"
      ],
      impact: [
        "Adopted as flagship project showcased at ICITACS 2024 (NTU Singapore)",
        "Zero-compromise identity protection enabled 100% candid student feedback",
        "Reduced counseling appointment coordination overhead by 75%"
      ]
    }
  },
  {
    id: "dompet-tracker",
    title: "Dompet Tracker – Personal Finance & Wealth Management System",
    category: "Full-Stack Web",
    tagline: "Editorial Warm-Modern Financial Health Engine & Multi-Wallet Reconciliation",
    description: "Full-stack personal finance and wealth intelligence suite built with MERN stack, featuring a proprietary 0–100 Financial Health Score algorithm, multi-wallet tracking, debt amortization projections, and automated A4 executive PDF reports.",
    stack: ["React (Vite)", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "Recharts", "jsPDF"],
    metrics: ["0–100 Health Engine", "Multi-Wallet Balance", "A4 PDF Executive Export", "Privacy Balance Masking"],
    liveUrl: "https://dompet-tracker.vercel.app/",
    githubUrl: "https://github.com/DimasArbiArdian/dompet-tracker",
    featured: true,
    caseStudy: {
      overview: "Most personal budgeting tools are either overly simplistic spreadsheets or intimidating corporate software. Dompet Tracker balances warmth, editorial design aesthetics (#359FA0 Deep Teal & #FFF0C5 Warm Cream), and rigorous financial math.",
      challenge: "Providing real-time multi-currency and multi-account reconciliation with custom burn-rate calculations while preserving snappy client-side interactions and strict user privacy.",
      solution: "Devised a proprietary weighted 0–100 Financial Health scoring engine factoring savings ratios, emergency buffer depth, and debt-to-income benchmarks. Implemented keyboard shortcut 'H' for instant client-side balance obscuration.",
      architecture: [
        "React SPA with Vite optimized for sub-100ms client transitions",
        "Express.js RESTful API with modular service/controller abstraction",
        "MongoDB Atlas with indexed aggregation pipelines for instant trend analytics",
        "Custom Canvas and Recharts visualization engine for cash-flow heatmaps"
      ],
      keyFeatures: [
        "Proprietary 0–100 Financial Health algorithm with actionable remediation tips",
        "Multi-wallet ledger (Bank Accounts, E-Wallets, Cash, Investment Portfolios)",
        "Debt & installment amortization calculator with remaining tenure projections",
        "Recurring bills calendar with proactive due-date indicators",
        "Print-ready A4 executive monthly PDF report generator"
      ],
      impact: [
        "Over 500+ active personal budget logs maintained without calculation drift",
        "Accelerated monthly financial review routines from 2 hours to under 5 minutes"
      ]
    }
  },
  {
    id: "sistem-cpmi",
    title: "CPMI Process Management System (PT Dwitunggal Jaya Abadi)",
    category: "Enterprise & POS",
    tagline: "Mission-Critical Monorepo Platform for Indonesian Migrant Worker Placements",
    description: "Comprehensive enterprise monorepo platform managing end-to-end recruitment, health screening, passport/visa documentation, flight logistics, and country deployment workflows for 800+ candidates across Japan, Germany, Turkey, and GCC states.",
    stack: ["Next.js (App Router)", "NestJS (REST API)", "Prisma ORM", "SQLite", "Zustand", "TanStack Query", "Swagger", "npm workspaces"],
    metrics: ["800+ Candidate Records", "300+ Worker Departures", "4-Role Strict RBAC", "100% Audit Compliance"],
    featured: true,
    caseStudy: {
      overview: "PT Dwitunggal Jaya Abadi (Delta Abadi Internasional) handles hundreds of Indonesian migrant workers (CPMI) bound for international destinations. Legacy manual paperwork caused bottlenecks, delayed visa processing, and communication silos.",
      challenge: "Consolidating 5 disparate departments (Recruitment, Medical, Legal/Visa, Flight Logistics, and Post-Departure Care) into a unified, secure platform with strict document integrity.",
      solution: "Architected a type-safe npm workspace monorepo pairing a Next.js App Router admin interface with a NestJS backend featuring Swagger documentation, automated document expiry alerts, and comprehensive audit logs.",
      architecture: [
        "Monorepo managed with npm workspaces for shared TypeScript types and DTOs",
        "NestJS backend following Clean Architecture with Guards, Interceptors, and DTO validation",
        "Prisma ORM with relational schema enforcing status state machines",
        "TanStack Query for optimistic UI state synchronization and cache invalidation"
      ],
      keyFeatures: [
        "4-Role RBAC: Super Admin, Placement Officer, Branch Manager, Candidate",
        "Step-by-step Kanban pipeline tracking each worker's deployment phase",
        "Medical check-up expiry alerts and automated visa timeline warnings",
        "Batch export of official government embassy documentation packs",
        "Granular audit trails tracking every status change and document upload"
      ],
      impact: [
        "Processed 800+ candidate dossiers and facilitated 300+ worker departures",
        "Eliminated paperwork processing errors by 90% across 5 global destination countries",
        "Awarded 'Sangat Baik' (Outstanding) internship performance rating"
      ]
    }
  },
  {
    id: "bps-presensi",
    title: "Web-Based Attendance & Haversine Geofencing System – BPS Kota Sukabumi",
    category: "Full-Stack Web",
    tagline: "High-Precision GPS Geofenced Attendance & Webcam Verification for Public Interns",
    description: "Production web application serving the Central Bureau of Statistics (BPS) Kota Sukabumi to monitor student internship attendance using Haversine GPS geofencing (100m radius), live webcam snapshots, daily work logging, and automated official reporting.",
    stack: ["MERN Stack (MongoDB, Express, React, Node)", "Laravel", "Tailwind CSS", "Haversine Algorithm", "Leaflet.js", "Webcam API"],
    metrics: ["80% Faster Recap", "50+ Active Interns", "100m Radius Precision", "Published in SOCIETY Journal"],
    liveUrl: "https://presensi-bps.vercel.app/",
    githubUrl: "https://github.com/DimasArbiArdian/presensi-bps",
    featured: true,
    caseStudy: {
      overview: "BPS Kota Sukabumi hosts dozens of university interns every semester. The previous physical paper logbooks led to fraudulent attendance, slow manual recaps, and lacked verification.",
      challenge: "Preventing location spoofing while ensuring reliable check-ins across varying mobile devices, network speeds, and low-light camera environments without requiring app store installations.",
      solution: "Built a responsive PWA-ready web application incorporating client-side Haversine geodesic distance calculation, live biometric webcam snapshots with timestamp watermarking, and dual desktop/mobile UI layouts.",
      architecture: [
        "MERN and Laravel hybrid micro-architecture for high-throughput reporting",
        "Leaflet.js integration with real-time GPS coordinate triangulation",
        "HTML5 MediaDevices Webcam API capturing compressed base64 verification photos",
        "Automated Excel / PDF export generator formatted to official BPS bureau standards"
      ],
      keyFeatures: [
        "Haversine geofence lock enforcing clock-in strictly within 100m of BPS headquarters",
        "Live camera anti-spoof selfie capture preventing gallery photo uploads",
        "Dual responsive interface: Desktop supervisory analytics & Mobile bottom-nav app",
        "Daily intern activity logbook with supervisor approval workflows",
        "One-click monthly recapitulation reports saving days of manual data entry"
      ],
      impact: [
        "Reduced administrative recap duration by 80% for 50+ university interns",
        "Formally published in SINTA indexed journal 'SOCIETY: Jurnal Pengabdian Masyarakat' (2026)",
        "Earned 'Sangat Baik' formal commendation from BPS Kota Sukabumi leadership"
      ]
    }
  },
  {
    id: "mbg-nutrition-ai",
    title: "MBG Nutrition Detection – AI Free Nutritious Meal Classifier",
    category: "AI & Computer Vision",
    tagline: "Computer Vision & Ensemble Machine Learning for Dietary Adequacy Assessment",
    description: "An advanced Deep Learning and Machine Learning pipeline combining YOLOv8n object detection for multi-item food localization with a Random Forest classifier to evaluate macro-nutrient adequacy in alignment with Indonesia's national Free Nutritious Meal program.",
    stack: ["Python", "YOLOv8n", "Random Forest", "OpenCV", "Google Colab", "Scikit-Learn"],
    metrics: ["SINTA 2 Accepted (JUTIF)", "YOLOv8n + Random Forest", "Multi-Food Localization", "LoA Jul 2026"],
    liveUrl: "https://colab.research.google.com/drive/17DVRpy8BUgTsWbJ9hcOS2M7yf8q55pLo?usp=sharing",
    githubUrl: "https://github.com/DimasArbiArdian/mbg_web",
    featured: true,
    caseStudy: {
      overview: "Indonesia's national Free Nutritious Meal (Makan Bergizi Gratis - MBG) program requires objective, scalable quality control to verify that served school lunches satisfy balanced nutritional standards.",
      challenge: "Detecting overlapping, heterogeneous food portions (rice, proteins, vegetables, fruits, dairy) under varied cafeteria lighting and classifying overall nutritional compliance from single smartphone photos.",
      solution: "Trained an optimized YOLOv8 nano model on an annotated Indonesian school lunch dataset, followed by feature extraction feeding an ensemble Random Forest classifier predicting balanced nutritional adequacy.",
      architecture: [
        "YOLOv8n backbone fine-tuned for dense multi-class food item bounding box detection",
        "OpenCV spatial portion estimation and geometric ratio extraction",
        "Random Forest classifier modeling non-linear nutrient balance combinations",
        "Python inference pipeline deployed for web and mobile edge integration"
      ],
      keyFeatures: [
        "Simultaneous multi-item food detection (carbohydrates, proteins, fiber, vitamins)",
        "Proportional plate coverage calculation using bounding box polygon areas",
        "Automated nutritional adequacy score (Adequate vs. Inadequate balance)",
        "Robustness against partial occlusions and varied Indonesian culinary presentations"
      ],
      impact: [
        "Scientific paper accepted for publication in JUTIF (SINTA 2 Accredited, Vol. 8 No. 3)",
        "Co-authored as Second Author with University Computer Science research faculty",
        "Established a viable open-source AI benchmark for national public health monitoring"
      ]
    }
  },
  {
    id: "ai-fruit-ripeness",
    title: "AI Fruit Ripeness Classifier (VGG16 Transfer Learning)",
    category: "AI & Computer Vision",
    tagline: "Deep Learning Computer Vision Model for Automated Citrus Ripeness Sorting",
    description: "A fine-tuned Transfer Learning VGG16 Convolutional Neural Network boosting citrus fruit ripeness classification accuracy from 56.35% to 95.91% with categorical cross-entropy loss reduction from 0.9285 to 0.1721. Formally presented as First Author at the SENTIMETER 2025 National Seminar.",
    stack: ["Python", "TensorFlow", "Keras", "VGG16 CNN", "OpenCV", "Google Colab", "Matplotlib"],
    metrics: ["95.91% VGG16 Accuracy", "Loss 0.9285 → 0.1721", "SENTIMETER First Author", "Transfer Learning"],
    liveUrl: "https://colab.research.google.com/drive/1KNY4-pzPRRWvCxLl6MFYdkpI4dl20ECJ?usp=sharing",
    featured: false,
    previewImage: "/images/projects/ai-fruit-ripeness.png",
    caseStudy: {
      overview: "Agricultural automation relies on non-destructive fruit quality sorting. Standard CNN architectures struggle with raw citrus imagery due to surface scratches, mottled coloring, and subtle peel pigmentation shifts.",
      challenge: "Overcoming severe model overfitting and poor generalization on raw agricultural photo datasets where baseline CNNs scored only 56.35% validation accuracy.",
      solution: "Engineered a transfer learning pipeline leveraging ImageNet-pretrained VGG16 features, augmented with customized global average pooling, dropout regularization (0.5), and dense classification blocks fine-tuned across 3 ripeness categories (Unripe, Semi-Ripe, Fully Ripe).",
      architecture: [
        "Pre-trained VGG16 convolutional base with frozen early layer feature extractors",
        "Custom dense top head with batch normalization, global pooling, and dropout layers",
        "TensorFlow real-time data augmentation (rotations, zoom, shear, channel shifting)",
        "Categorical cross-entropy loss optimization using Adam optimizer (lr=1e-4)"
      ],
      keyFeatures: [
        "3-Tier classification distinguishing Unripe, Semi-Ripe, and Fully Ripe citrus",
        "Dramatic accuracy surge from 56.35% baseline to 95.91% validation accuracy",
        "Loss reduction from 0.9285 down to 0.1721 on unseen validation test sets",
        "Confusion matrix and ROC-AUC curve visualization verifying robust precision"
      ],
      impact: [
        "Presented as First Author & Sole Presenter at SENTIMETER 2025 National Seminar",
        "Published in official SENTIMETER 2025 National Proceedings with ISBN certification",
        "Demonstrated viable transfer learning methodologies for regional fruit farmers"
      ]
    }
  },
  {
    id: "kios-beras-lgs",
    title: "Kios Beras LGS – Cloud POS & Serialized FIFO Inventory System",
    category: "Enterprise & POS",
    tagline: "Automated First-In, First-Out (FIFO) Grain Inventory Tracking & Retail POS",
    description: "Cloud-native Point of Sale (POS) and inventory management platform designed for agricultural grain retail (Kios Beras LGS). Features a serialized JSON FIFO stock queue engine that dynamically computes exact Cost of Goods Sold (COGS / HPP) per batch, preventing grain spoilage and eliminating accounting drift.",
    stack: ["JavaScript", "Google Apps Script", "Google Sheets DB", "HTML5", "CSS3", "JSON Queue Engine"],
    metrics: ["100% Automated FIFO COGS", "Batch Expiry Control", "Real-Time Stock Audit", "Instant Digital Receipt"],
    liveUrl: "https://kios-beras-lgs.vercel.app/",
    githubUrl: "https://github.com/DimasArbiArdian/kios-beras-lgs",
    featured: false,
    previewImage: "/images/projects/kios-beras-lgs.png",
    caseStudy: {
      overview: "Traditional grain retail businesses operate with razor-thin margins and volatile wholesale sack prices. Without strict FIFO batch tracking, older rice stocks spoil and owners miscalculate true net profit.",
      challenge: "Tracking multiple incoming grain batches at fluctuating wholesale purchase costs while calculating precise cost-of-goods-sold (HPP) in real time during rapid checkout counter transactions.",
      solution: "Engineered a cloud-based web POS powered by a serialized JSON FIFO queue engine on Google Apps Script and Google Sheets, automatically depleting inventory from the oldest stock batch first and logging precise weighted margins.",
      architecture: [
        "Google Apps Script REST API engine communicating with cloud Google Sheets database",
        "Serialized JSON FIFO queue structure maintaining batch IDs, purchase costs, and stock counts",
        "Responsive checkout counter interface optimized for touchscreens and barcode/SKU input",
        "Automated cash-flow ledger and digital receipt generator with QRIS payment integration"
      ],
      keyFeatures: [
        "Automated First-In, First-Out (FIFO) queue guaranteeing oldest grain stock is sold first",
        "Real-time COGS / HPP margin calculation per sack and per kilogram transaction",
        "Cash and QRIS digital payment registration with instant printable thermal receipts",
        "Proactive low-stock warnings and batch aging alerts to minimize grain wastage",
        "Cloud-synced daily turnover and gross/net profit margin dashboards"
      ],
      impact: [
        "Successfully deployed in active retail operation at Kios Beras LGS",
        "Eliminated inventory reconciliation discrepancies and grain batch spoilage",
        "Saved store owners 10+ hours per week of manual receipt bookkeeping"
      ]
    }
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "jutif-2027",
    title: "YOLOv8n and Random Forest for Nutritional Adequacy Classification of Indonesian Free Nutritious Meal Images",
    journal: "JUTIF (Jurnal Teknik Informatika)",
    tier: "SINTA 2 Accredited",
    role: "Second Author",
    year: "Forthcoming Jun 2027 (LoA Jul 2026)",
    status: "Accepted / In Press",
    description: "Evaluates the efficacy of integrating real-time YOLOv8n object detection with an ensemble Random Forest classifier to automatically assess the balanced nutritional adequacy of school lunch meals under the national MBG initiative.",
    highlights: [
      "SINTA 2 Nationally Accredited Journal",
      "Official Letter of Acceptance (LoA) granted July 2026",
      "Combines computer vision localization with dietary compliance machine learning"
    ]
  },
  {
    id: "society-2026",
    title: "Implementation of a Web-Based Attendance System for Internship Monitoring in a Public Institution",
    journal: "SOCIETY: Jurnal Pengabdian Masyarakat",
    tier: "Nationally Accredited Journal",
    role: "First Author & Lead Software Engineer",
    year: "Vol. 5 No. 2, Mar 2026, pp. 308–313",
    status: "Published",
    description: "Documents the technical design, deployment, and institutional impact of a geofenced, biometric webcam attendance tracking system developed for student interns at BPS Kota Sukabumi.",
    highlights: [
      "First Author and primary software architect",
      "Evaluates Haversine geofencing algorithm accuracy in dense urban settings",
      "Proves 80% reduction in administrative timesheet processing"
    ]
  },
  {
    id: "sentimeter-2025",
    title: "Klasifikasi Tingkat Kematangan Buah Jeruk Menggunakan Arsitektur VGG16",
    journal: "Prosiding Seminar Nasional SENTIMETER",
    tier: "National Seminar Proceedings",
    role: "First Author & Presenter",
    year: "May 2025",
    status: "Published & Presented",
    description: "Presents empirical results of applying transfer learning with the VGG16 Convolutional Neural Network to categorize citrus ripeness, achieving 95.91% validation accuracy over standard baseline models.",
    highlights: [
      "Presented live as First Author to national computer science researchers",
      "Demonstrated dramatic error reduction from 0.9285 to 0.1721 loss",
      "Provided open-access Google Colab reproduction benchmark"
    ]
  },
  {
    id: "kkn-2024",
    title: "Upaya Peningkatan Pengetahuan dan Keterampilan Masyarakat Berbasis Pemberdayaan Sumber Daya Lokal Melalui Kegiatan KKN Tematik",
    journal: "Jurnal Pengabdian Masyarakat Nusa Putra",
    tier: "University Community Service Journal",
    role: "Co-Author",
    year: "2024",
    status: "Published",
    description: "Details technological literacy and local economic empowerment initiatives carried out during university thematic community service in West Java villages.",
    highlights: [
      "Co-authored community empowerment impact assessment",
      "Conducted digital workshops for micro-business owners"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-mongodb",
    name: "MongoDB Certified Associate Developer",
    issuer: "MongoDB Inc.",
    validity: "Permanent Credential",
    badgeUrl: "🍃",
    credentialUrl: "https://www.credly.com/badges/2367f0b7-bf83-4b0f-a85b-3b54b1579738/public_url",
    category: "Software Engineering",
    credentialId: "2367f0b7-bf83-4b0f-a85b-3b54b1579738",
    issuedDate: "2024",
    verificationType: "Credly Official Digital Badge",
    skills: ["MongoDB Atlas", "Data Modeling", "Aggregation Framework", "CRUD Operations", "Indexes & Performance"],
    summary: "Demonstrates comprehensive proficiency in designing data models, executing optimized aggregation pipelines, and deploying robust NoSQL document databases on MongoDB Atlas.",
    pdfUrl: "/certificates/MongoDBAssociateDeveloper_DimasArbiArdian.pdf",
    previewUrl: "/certificates/previews/MongoDBAssociateDeveloper_DimasArbiArdian.png"
  },
  {
    id: "cert-alibaba",
    name: "Alibaba Cloud Certified Associate (ACA) - System Operator",
    issuer: "Alibaba Cloud",
    validity: "Valid through May 2027",
    badgeUrl: "🟠",
    category: "Cloud & DevOps",
    credentialId: "ACA-SO-ID-2024-5519",
    issuedDate: "May 2024",
    verificationType: "Alibaba Cloud Certified",
    skills: ["ECS Compute", "Server Load Balancer (SLB)", "OSS Storage", "Virtual Private Cloud (VPC)", "Cloud Security"],
    summary: "Certifies architectural and operational knowledge for enterprise cloud infrastructure, networking isolation, and automated cloud deployments on Alibaba Cloud.",
    pdfUrl: "/certificates/Sertifikat Alibaba SysOps.pdf",
    previewUrl: "/certificates/previews/Sertifikat Alibaba SysOps.png"
  },
  {
    id: "cert-python",
    name: "IT Specialist in Python",
    issuer: "Certiport (Pearson VUE)",
    validity: "Permanent Credential",
    badgeUrl: "🐍",
    credentialUrl: "https://www.credly.com/badges/06e639ca-2304-4789-ba7f-647587a43671/public_url",
    category: "Software Engineering",
    credentialId: "/certificates/Python.pdf",
    issuedDate: "2024",
    verificationType: "Certiport Pearson VUE Digital Transcript",
    skills: ["Python Core Syntax", "Data Structures", "Algorithms", "Object-Oriented Programming", "File I/O & Exception Handling"],
    summary: "Validates technical mastery of Python fundamentals, algorithm optimization, and software development methodologies recognized by international IT industry standards.",
    pdfUrl: "/certificates/Python.pdf",
    previewUrl: "/certificates/previews/Python.png"
  },
  {
    id: "cert-aws",
    name: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    validity: "Permanent Credential",
    badgeUrl: "☁️",
    credentialUrl: "https://www.credly.com/badges/7164af4a-f5e2-4d14-8628-d99df5ffb891/public_url",
    category: "AI & Data",
    credentialId: "7164af4a-f5e2-4d14-8628-d99df5ffb891",
    issuedDate: "2024",
    verificationType: "Credly Official Digital Badge",
    skills: ["AWS SageMaker", "Machine Learning Pipeline", "Supervised Learning", "Deep Learning", "Model Evaluation"],
    summary: "Comprehensive training in cloud-based machine learning workflows, exploratory data analysis, and model training using Amazon SageMaker.",
    pdfUrl: "/certificates/AWS_Academy_Machine_Learning_Foundations.pdf",
    previewUrl: "/certificates/previews/AWS_Academy_Machine_Learning_Foundations.png"
  },
  {
    id: "cert-vertex-ai",
    name: "Prompt Design in Vertex AI & Gemini",
    issuer: "Google Cloud",
    validity: "Permanent Credential",
    badgeUrl: "✨",
    credentialUrl: "https://www.credly.com/badges/5474cd71-d5a3-47e2-9074-e4d1cbb2b4a2/public_url",
    category: "AI & Data",
    credentialId: "5474cd71-d5a3-47e2-9074-e4d1cbb2b4a2",
    issuedDate: "2024",
    verificationType: "Google Cloud Credly Credential",
    skills: ["Vertex AI Studio", "Gemini 1.5 Pro/Flash", "Few-Shot Prompting", "System Instructions", "Temperature & Safety Filters"],
    summary: "Validates generative AI engineering capabilities on Google Cloud Vertex AI, advanced multimodal prompt crafting, and LLM tuning.",
    pdfUrl: "/certificates/Gemini AI for Student Certification.pdf",
    previewUrl: "/certificates/previews/Gemini AI for Student Certification.png"
  },
  {
    id: "cert-stap",
    name: "Salesforce Talent Accelerator Program (STAP)",
    issuer: "SmartBridge & Salesforce Partner",
    validity: "Graduate Certified",
    badgeUrl: "☁️",
    category: "Software Engineering",
    credentialId: "STAP-SF-2024-0982",
    issuedDate: "2024",
    verificationType: "SmartBridge & Salesforce Partner Certificate",
    skills: ["Salesforce CRM", "Apex Programming", "Lightning Web Components (LWC)", "SOQL", "Process Automation"],
    summary: "Intensive Salesforce ecosystem acceleration covering CRM architecture, Apex backend controllers, and modern Lightning Web Components frontend engineering.",
    pdfUrl: "/certificates/Certificate STAP.pdf",
    previewUrl: "/certificates/previews/Certificate STAP.png"
  },
  {
    id: "cert-gemini",
    name: "Gemini Certified Educator Suite (Higher Ed & General)",
    issuer: "Google for Education",
    validity: "Valid through June 2029",
    badgeUrl: "🎓",
    category: "AI & Data",
    credentialId: "GEM-EDU-2024-7714",
    issuedDate: "June 2024",
    verificationType: "Google for Education Official Credential",
    skills: ["AI-Assisted Pedagogy", "Gemini Advanced Workflows", "Prompting for Academics", "Responsible AI Governance"],
    summary: "Authorizes the instructor to conduct structured artificial intelligence pedagogy and Google Gemini workshops for university faculty and students.",
    pdfUrl: "/certificates/Gemini Certified Educator.pdf",
    previewUrl: "/certificates/previews/Gemini Certified Educator.png"
  },
  {
    id: "cert-hacktiv8",
    name: "LLM-Based Tools & Gemini API Integration for Data Scientists",
    issuer: "Hacktiv8 & Google.org",
    validity: "Certified Specialist",
    badgeUrl: "🤖",
    category: "AI & Data",
    credentialId: "HACKTIV8-GGL-2024-310",
    issuedDate: "2024",
    verificationType: "Hacktiv8 & Google.org Program Certificate",
    skills: ["Gemini REST API", "Function Calling", "RAG Systems", "Vector Embeddings", "LangChain & Python"],
    summary: "Specialized accreditation in engineering real-world LLM applications, integrating the Google Gemini API with vector stores, and automated reasoning.",
    pdfUrl: "/certificates/LLM-Based Tools and Gemini API Integration for Data Scientist_Hactiv8.pdf",
    previewUrl: "/certificates/previews/LLM-Based Tools and Gemini API Integration for Data Scientist_Hactiv8.png"
  },
  {
    id: "cert-huawei",
    name: "HCIA-AI V3.5 & Belajar Machine Learning (90 Hours)",
    issuer: "Huawei ICT Academy & Dicoding Indonesia",
    validity: "Certified",
    badgeUrl: "📱",
    category: "AI & Data",
    credentialId: "DICODING-HCIA-2024-991",
    issuedDate: "2024",
    verificationType: "Huawei ICT Academy & Dicoding Accredited",
    skills: ["Computer Vision", "Convolutional Neural Networks", "TensorFlow", "Deep Learning Architectures", "Model Optimization"],
    summary: "90 hours of rigorous curriculum mastering neural network architectures, backpropagation mathematics, and computer vision deployment.",
    pdfUrl: "/certificates/DimasArbiArdian_HCIA-AI.pdf",
    previewUrl: "/certificates/previews/DimasArbiArdian_HCIA-AI.png"
  }
];

export const TEST_SCORES = [
  {
    test: "British Council EnglishScore",
    score: "305",
    level: "CEFR B1 (Intermediate)",
    detail: "Professional reading & listening proficiency",
    pdfUrl: "/certificates/EnglishScore_Certificate.pdf",
    previewUrl: "/certificates/previews/EnglishScore_Certificate.png"
  },
  {
    test: "TPA Bappenas",
    score: "518.17",
    level: "Above National Benchmark",
    detail: "Academic Potential Test (Standard > 500)",
    pdfUrl: "/certificates/TPA-BAPPENAS_DIMAS-ARBI.pdf",
    previewUrl: "/certificates/previews/TPA-BAPPENAS_DIMAS-ARBI.png"
  },
  {
    test: "Public Speaking Certified",
    score: "Grade B",
    level: "EPDC Certified",
    detail: "Technical presentation & auditorium instruction",
    pdfUrl: "/certificates/DIMAS-ARBI-ARDIAN_Public Speaking.pdf",
    previewUrl: "/certificates/previews/DIMAS-ARBI-ARDIAN_Public Speaking.png"
  },
  {
    test: "Spanish Language",
    score: "A1/A2",
    level: "Elementary Conversational",
    detail: "Basic reading & daily communication",
    pdfUrl: "/certificates/Spanish.pdf",
    previewUrl: "/certificates/previews/Spanish.png"
  }
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: "timeline-1",
    period: "Jan 2026 – Present",
    role: "Full Stack Development Instructor Intern",
    company: "SmartBridge",
    location: "Jakarta / Remote, Indonesia",
    description: "Mentoring 600+ university students across UNTAR, Amikom, and UPI in modern MERN stack architecture. Delivered keynote workshops for 1,000+ attendees on Google Gen AI & Vertex API integration. Trained 60+ university faculty lecturers on modern industry curriculums and mentored 150+ candidates in the Salesforce STAP initiative.",
    internshipCertificate: {
      title: "Certificate of Outstanding Instruction & Mentorship",
      issuer: "SmartBridge Indonesia & Salesforce Academic Alliance",
      signatory: "Director of Academic Partnerships, SmartBridge",
      date: "2026",
      credentialId: "SB-INST-2026-0041",
      grade: "Predikat: Sangat Baik (Outstanding / 96.5)",
      description: "Awarded in formal recognition of exemplary teaching performance, authoring the 16-week MERN curriculum, and delivering national keynote addresses on Generative AI.",
      highlights: [
        "Trained 60+ university faculty lecturers nationwide",
        "Keynote speaker for 1,000+ Google Gen AI attendees",
        "Mentored 600+ undergraduate MERN students with 98% course completion rating"
      ],
      pdfUrl: "/certificates/Certificate STAP.pdf",
      previewUrl: "/certificates/previews/Certificate STAP.png"
    },
    folderArchive: {
      title: "SmartBridge Teaching & Speaking Archive",
      deliverables: [
        "Curated comprehensive 16-week MERN full-stack syllabus and laboratory exercises",
        "Keynote speaker for 1,000+ attendees in national Google Gen AI webinar",
        "Delivered hands-on cloud AI training to 60+ UNTAR faculty professors",
        "Mentored 150+ Salesforce Talent Accelerator mentees in Apex & Lightning Web Components"
      ],
      technologies: ["MERN Stack", "Next.js", "Gemini API", "Vertex AI", "Salesforce LWC", "Git"],
      metricsOrImpact: [
        "1,000+ total workshop attendees",
        "600+ active university students mentored",
        "60+ university faculty professors trained",
        "98% student course satisfaction index"
      ]
    }
  },
  {
    id: "timeline-2",
    period: "Oct 2025 – Feb 2026",
    role: "Full-Stack Developer & IT Support Intern",
    company: "PT Dwitunggal Jaya Abadi / Delta Abadi Internasional",
    location: "Sukabumi, Indonesia",
    grade: "Predikat: Sangat Baik (Outstanding)",
    description: "Spearheaded the development of the CPMI Monorepo Platform to digitize end-to-end Indonesian migrant worker recruitment, legal dossiers, and international departures across 5 countries.",
    internshipCertificate: {
      title: "Surat Keterangan Selesai Magang & Penilaian Kinerja Industri",
      issuer: "PT Dwitunggal Jaya Abadi (Delta Abadi Internasional)",
      signatory: "Direktur Utama & Head of IT Operations",
      date: "Februari 2026",
      credentialId: "DJA-MAGANG-2026-012",
      grade: "Predikat: Sangat Baik (Grade A / 95.0)",
      description: "Diberikan atas kontribusi luar biasa dalam merancang dan mengimplementasikan Monorepo Sistem CPMI berbasis Next.js dan NestJS untuk digitalisasi 800+ berkas tenaga kerja migran.",
      highlights: [
        "Digitalisasi 800+ berkas kandidat & 300+ keberangkatan",
        "Penerapan 4-Role Strict RBAC dan audit log tamper-proof",
        "Pengurangan 90% waktu rekapitulasi berkas lintas divisi"
      ],
      pdfUrl: "/certificates/Sertifikat Magang Dwi Tunggal.pdf",
      previewUrl: "/certificates/previews/Sertifikat Magang Dwi Tunggal.png"
    },
    folderArchive: {
      title: "CPMI Monorepo Architecture Archive",
      deliverables: [
        "Engineered production monorepo connecting Next.js App Router and NestJS REST API",
        "Implemented 4-role RBAC security guarding candidate dossiers and medical files",
        "Automated flight departure logistics and passport expiry warning notifications",
        "Constructed custom audit trail logging every administrative record update"
      ],
      technologies: ["Next.js", "NestJS", "Prisma ORM", "SQLite", "Zustand", "Swagger", "npm workspaces"],
      metricsOrImpact: [
        "800+ total candidate dossiers digitized",
        "300+ successful migrant worker departures",
        "90% reduction in paper record lookups",
        "Rated 'Sangat Baik' in formal internship appraisal"
      ]
    }
  },
  {
    id: "timeline-3",
    period: "Feb 2025 – Jul 2025",
    role: "Full-Stack Web Developer Intern",
    company: "BPS (Badan Pusat Statistik) Kota Sukabumi",
    location: "Sukabumi, Indonesia",
    grade: "Predikat: Sangat Baik (Outstanding)",
    description: "6 months internship & PKL. Developed an automated GPS geofenced attendance monitoring system with biometric webcam verification, cutting monthly recap duration by 80% and publishing results in the SINTA-indexed SOCIETY Journal.",
    internshipCertificate: {
      title: "Sertifikat Praktik Kerja Lapangan (PKL) & Surat Apresiasi",
      issuer: "Badan Pusat Statistik (BPS) Kota Sukabumi",
      signatory: "Kepala Badan Pusat Statistik Kota Sukabumi",
      date: "Juli 2025",
      credentialId: "BPS-PKL-3272-2025-008",
      grade: "Predikat: Sangat Baik (Nilai: 94.8 / A)",
      description: "Diberikan atas keberhasilan membangun Sistem Presensi Geofencing Haversine & Webcam Snapshot untuk pemantauan 50+ mahasiswa magang, serta mempublikasikan hasil riset di Jurnal Ilmiah SOCIETY.",
      highlights: [
        "Efisiensi 80% proses rekapitulasi data bulanan",
        "Akurasi geofencing radius 100m tanpa kompromi",
        "Diterbitkan di SOCIETY: Jurnal Pengabdian Masyarakat (2026)"
      ],
      pdfUrl: "/certificates/Sertifikat Magang BPS.pdf",
      previewUrl: "/certificates/previews/Sertifikat Magang BPS.png"
    },
    folderArchive: {
      title: "BPS Kota Sukabumi Production Attendance Archive",
      deliverables: [
        "Integrated client-side Haversine geodesic geofence locked to 100m BPS perimeter",
        "Built instant webcam photo capture with timestamp metadata watermarks",
        "Developed administrative analytics dashboard with instant Excel/PDF exports",
        "Authored and published research paper in SOCIETY Journal (Vol. 5 No. 2, Mar 2026)"
      ],
      technologies: ["MERN Stack", "Laravel", "Tailwind CSS", "Haversine Formula", "Leaflet.js", "Webcam API"],
      metricsOrImpact: [
        "50+ active interns monitored simultaneously",
        "80% cut in monthly attendance consolidation time",
        "Published in national peer-reviewed scientific journal",
        "100% attendance audit trail compliance"
      ]
    }
  },
  {
    id: "timeline-4",
    period: "May 2025",
    role: "First Author & Presenter",
    company: "SENTIMETER 2025 National Seminar",
    location: "Sukabumi, Indonesia",
    description: "Presented research paper 'Klasifikasi Tingkat Kematangan Buah Jeruk Menggunakan Arsitektur VGG16' to a nationwide auditorium of computer science researchers.",
    internshipCertificate: {
      title: "Sertifikat Pemakalah & Penulis Utama (First Author)",
      issuer: "Seminar Nasional SENTIMETER 2025",
      signatory: "Ketua Panitia & Dekan Fakultas Ilmu Komputer",
      date: "Mei 2025",
      credentialId: "SENTIMETER-PRES-2025-104",
      grade: "Status: First Author & Sole Presenter",
      description: "Diberikan atas penyajian makalah ilmiah klasifikasi kematangan buah jeruk dengan akurasi 95.91% menggunakan arsitektur VGG16.",
      highlights: [
        "Presentasi lisan di hadapan dewan penguji dan peneliti nasional",
        "Peningkatan akurasi model dari 56.35% menjadi 95.91%",
        "Diterbitkan dalam Prosiding Seminar Nasional SENTIMETER"
      ]
    },
    folderArchive: {
      title: "SENTIMETER 2025 Conference Archive",
      deliverables: [
        "Fine-tuned VGG16 Transfer Learning CNN in TensorFlow / Keras",
        "Achieved 95.91% validation accuracy over baseline 56.35% models",
        "Delivered 20-minute live presentation and defended methodology during Q&A",
        "Published paper in official SENTIMETER 2025 National Proceedings"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "VGG16", "OpenCV", "Google Colab"],
      metricsOrImpact: [
        "95.91% classification accuracy achieved",
        "Categorical loss lowered to 0.1721",
        "First Author and sole presenter"
      ]
    }
  },
  {
    id: "timeline-5",
    period: "Aug 2024",
    role: "International Conference Participant & Lead Engineer",
    company: "ICITACS 2024 (NTU Singapore)",
    location: "Nanyang Technological University, Singapore",
    description: "Participated in the international conference on Information Technology and Advanced Computer Science at NTU Singapore, presenting technical findings on anti-bullying digital platforms (SahabatBK).",
    internshipCertificate: {
      title: "Certificate of International Conference Participation",
      issuer: "ICITACS 2024 & Nanyang Technological University (NTU Singapore)",
      signatory: "Conference General Chair, NTU Singapore",
      date: "August 2024",
      credentialId: "ICITACS-NTU-2024-077",
      grade: "International Delegation",
      description: "Recognizes active participation and presentation of the SahabatBK digital counseling architecture at Nanyang Technological University, Singapore.",
      highlights: [
        "International academic peer review representation",
        "Showcased zero-knowledge anonymous reporting model",
        "Commended by international software engineering delegates"
      ]
    },
    folderArchive: {
      title: "ICITACS 2024 International Conference Archive",
      deliverables: [
        "Authored technical architecture paper on digital counseling ecosystems",
        "Engineered SahabatBK platform with anonymous whistleblower encryption",
        "Represented Nusa Putra University delegation at NTU Singapore"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
      metricsOrImpact: [
        "Presented at premier Singapore engineering campus (NTU)",
        "Received positive review from international peer reviewers"
      ]
    }
  },
  {
    id: "timeline-6",
    period: "Sep 2022 – Sep 2026",
    role: "Bachelor of Informatics Engineering (S.Kom.)",
    company: "Nusa Putra University",
    location: "Sukabumi, Indonesia",
    grade: "GPA: 3.84 / 4.00 (Cum Laude)",
    description: "Four years of rigorous computing education encompassing advanced algorithms, deep learning, database systems, and modern software engineering architectures.",
    internshipCertificate: {
      title: "Ijazah & Transkrip Akademik Sarjana Komputer (Cum Laude)",
      issuer: "Universitas Nusa Putra",
      signatory: "Rektor & Dekan Fakultas Teknik & Ilmu Komputer",
      date: "September 2026",
      credentialId: "UNP-SKOM-2026-3841",
      grade: "Cum Laude (IPK: 3.84 / 4.00)",
      description: "Gelar Sarjana Komputer (S.Kom.) dengan predikat dengan pujian (Cum Laude) atas pencapaian akademik luar biasa dan kontribusi 4 publikasi ilmiah.",
      highlights: [
        "IPK Kumulatif: 3.84 / 4.00 (Cum Laude)",
        "4 karya publikasi ilmiah nasional dan internasional",
        "Top tier akademik di Fakultas Ilmu Komputer"
      ]
    },
    folderArchive: {
      title: "Undergraduate Academic Archive",
      deliverables: [
        "Graduated with Latin honors (Cum Laude) with a cumulative GPA of 3.84",
        "Authored 4 scientific papers across SINTA 2 journals and national seminars",
        "Active student leader in programming labs and community tech empowerment"
      ],
      technologies: ["Computer Science Fundamentals", "Data Structures", "AI & ML", "Web Engineering", "Cloud"],
      metricsOrImpact: [
        "GPA: 3.84 / 4.00 (Cum Laude)",
        "Top tier academic standing in Informatics Faculty"
      ]
    }
  }
];

export const INITIAL_GUESTBOOK_ENTRIES: GuestbookEntry[] = [];
