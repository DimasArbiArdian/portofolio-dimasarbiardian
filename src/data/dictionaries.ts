export type Language = 'en' | 'id';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    research: string;
    journey: string;
    guestbook: string;
    contact: string;
    resume: string;
    statusOpen: string;
    basedIn: string;
    today: string;
    scrollDown: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleLast: string;
    pills: {
      fullstack: string;
      aiResearcher: string;
      cumLaude: string;
      dimasTag: string;
      instructor: string;
    };
    terminalCode: string;
  };
  about: {
    sectionTitle: string;
    introTitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    downloadCv: string;
    hireMe: string;
    statusOnline: string;
    educationTitle: string;
    university: string;
    degree: string;
    graduatedYear: string;
    courseworkLabel: string;
    coursework: string[];
    gpaScore: string;
    gpaScale: string;
    gpaDistinction: string;
    techStackTitle: string;
    categories: {
      languages: string;
      frontend: string;
      backend: string;
      aiCloud: string;
    };
    focusTitle: string;
    focusDesc: string;
    focusPills: {
      fullstack: string;
      aiVision: string;
    };
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    filters: {
      all: string;
      web: string;
      ai: string;
      enterprise: string;
    };
    featuredBadge: string;
    readCaseStudy: string;
    liveDemo: string;
    sourceCode: string;
    sysArch: string;
    coreDecisions: string;
    impactRating: string;
    prodReady: string;
    modal: {
      overview: string;
      challenge: string;
      solution: string;
      architecture: string;
      keyFeatures: string;
      impact: string;
      close: string;
    };
  };
  research: {
    sectionTitle: string;
    sectionSubtitle: string;
    publicationsTitle: string;
    certificationsTitle: string;
    testScoresTitle: string;
    verifiedOnCredly: string;
    viewCertificate: string;
    statusLabel: string;
  };
  journey: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewCertificate: string;
    openArchive: string;
    closeArchive: string;
    deliverables: string;
    technologies: string;
    metrics: string;
  };
  guestbook: {
    sectionTitle: string;
    totalSignatures: string;
    leaveNote: string;
    visitorNotes: string;
    liveBadge: string;
    nameLabel: string;
    namePlaceholder: string;
    roleLabel: string;
    rolePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    drawerTitle: string;
    signInPrompt: string;
    signInGithub: string;
    signInGoogle: string;
    devReply: string;
    replyLabel: string;
    closeDrawer: string;
    footerNote: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    directTitle: string;
    emailLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    connectSocials: string;
    sendInquiryTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjects: {
      job: string;
      collab: string;
      speaking: string;
      general: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  footer: {
    builtWith: string;
    rights: string;
    backToTop: string;
  };
  mascot: {
    idle: string;
    hover: string;
    greeting: string;
  };
}

export const DICTIONARIES: Record<Language, Dictionary> = {
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      projects: "PROJECTS",
      research: "RESEARCH",
      journey: "JOURNEY",
      guestbook: "GUESTBOOK",
      contact: "CONTACT",
      resume: "RESUME",
      statusOpen: "OPEN TO WORK",
      basedIn: "BASED IN SUKABUMI, ID",
      today: "TODAY",
      scrollDown: "SCROLL DOWN"
    },
    hero: {
      badge: "ENGINEERING • RESEARCH • PEDAGOGY",
      titleFirst: "DIMAS ARBI",
      titleLast: "ARDIAN",
      pills: {
        fullstack: "Full-Stack Engineer",
        aiResearcher: "AI Researcher",
        cumLaude: "Informatics (CumLaude)",
        dimasTag: "DIMAS",
        instructor: "Technical Instructor"
      },
      terminalCode: 'const INITIALIZE_SYSTEM = async () => { const Developer = { ID: "DIMAS_ARBI_ARDIAN", Origin: "Sukabumi_Indonesia", Role: "Full_Stack_Engineer & AI_Researcher", Mindset: "Systematic_Thinking_With_AI_Precision" }; await System.load("Next.js_15", "React_19", "NestJS", "MERN", "YOLOv8"); if (Project.isComplex) return Developer.solveWith(Physics + Logic + Experience); const Mission = "Crafting digital experiences that feel alive, intentional, and scalable."; return Developer.create({ clarity: true, aesthetics: "Bold_and_Purposeful", security: "Strict" }); };'
    },
    about: {
      sectionTitle: "ABOUT ME",
      introTitle: "HI, I'M DIMAS ARBI ARDIAN.",
      bioParagraph1: "Informatics Engineering graduate (GPA: 3.84 / 4.00 Cum Laude) specializing in Full-Stack Web Development, Deep Learning, and Artificial Intelligence. Experienced in architecting production web platforms using Next.js 15, MERN Stack, NestJS, and Laravel.",
      bioParagraph2: "Published author in SINTA 2 Accredited Journal (JUTIF) and SOCIETY Journal. Active technical instructor and Google Gen AI speaker dedicated to mentoring over 1,000+ students and university lecturers nationwide.",
      downloadCv: "DOWNLOAD RESUME",
      hireMe: "HIRE ME",
      statusOnline: "ONLINE",
      educationTitle: "INFORMATICS ENGINEERING",
      university: "🏛️ UNIVERSITAS NUSA PUTRA",
      degree: "Bachelor of Informatics (S.Kom.)",
      graduatedYear: "GRADUATED 2026",
      courseworkLabel: "RELEVANT COURSEWORK:",
      coursework: [
        "Web Engineering",
        "AI & Deep Learning",
        "Database Systems",
        "Software Architecture",
        "Computer Vision",
        "Cloud Systems"
      ],
      gpaScore: "3.84",
      gpaScale: "/ 4.00 GPA (CUM LAUDE)",
      gpaDistinction: "HIGHLY SATISFACTORY",
      techStackTitle: "TECH STACK",
      categories: {
        languages: "CORE LANGUAGES",
        frontend: "FRAMEWORKS & UI",
        backend: "BACKEND & DATABASES",
        aiCloud: "AI, CLOUD & TOOLS"
      },
      focusTitle: "MY FOCUS",
      focusDesc: "Combining Deep Learning Research with robust Full-Stack Systems. I focus on building resilient, user-centric web applications and deploying real-world computer vision models from conception to cloud deployment.",
      focusPills: {
        fullstack: "Full-Stack Systems",
        aiVision: "AI & Computer Vision"
      }
    },
    projects: {
      sectionTitle: "SELECTED WORKS",
      sectionSubtitle: "A showcase of functional engineering solutions focused on data integrity, AI research, and scalable user experience.",
      filters: {
        all: "ALL",
        web: "FULL-STACK WEB",
        ai: "AI & VISION",
        enterprise: "ENTERPRISE & POS"
      },
      featuredBadge: "★ FEATURED",
      readCaseStudy: "READ CASE STUDY",
      liveDemo: "LIVE DEMO",
      sourceCode: "SOURCE CODE",
      sysArch: "SYS_ARCHITECTURE",
      coreDecisions: "Core Technical Decisions:",
      impactRating: "IMPACT_RATING:",
      prodReady: "PROD_READY",
      modal: {
        overview: "Project Overview",
        challenge: "Engineering Challenge",
        solution: "Engineered Solution",
        architecture: "System Architecture",
        keyFeatures: "Key Capabilities",
        impact: "Measured Impact",
        close: "Close Case Study"
      }
    },
    research: {
      sectionTitle: "RESEARCH & CERTS",
      sectionSubtitle: "Peer-reviewed scientific publications, conference proceedings, and verified industry accreditations.",
      publicationsTitle: "SCIENTIFIC PUBLICATIONS (4 PAPERS)",
      certificationsTitle: "VERIFIED CREDENTIALS (CLICK TO VIEW FULL CERTIFICATE)",
      testScoresTitle: "STANDARDIZED TEST BENCHMARKS & LANGUAGES",
      verifiedOnCredly: "Verify on Credly",
      viewCertificate: "VIEW CERTIFICATE",
      statusLabel: "Status"
    },
    journey: {
      sectionTitle: "JOURNEY",
      sectionSubtitle: "Chronological progression across software engineering roles, academic honors, research, and documented internships.",
      viewCertificate: "VIEW INTERNSHIP CERTIFICATE",
      openArchive: "OPEN PROJECT ARCHIVE",
      closeArchive: "CLOSE ARCHIVE",
      deliverables: "KEY DELIVERABLES:",
      technologies: "TECH & TOOLS:",
      metrics: "MEASURED IMPACT:"
    },
    guestbook: {
      sectionTitle: "GUESTBOOK",
      totalSignatures: "TOTAL SIGNATURES",
      leaveNote: "LEAVE A NOTE",
      visitorNotes: "VISITOR NOTES",
      liveBadge: "LIVE",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Alex Morgan",
      roleLabel: "Role or Organization",
      rolePlaceholder: "e.g. Software Engineer @ TechCorp",
      messageLabel: "Message *",
      messagePlaceholder: "Leave a friendly message, greeting, or feedback...",
      submit: "SIGN GUESTBOOK",
      submitting: "SIGNING...",
      success: "Thank you! Your message has been pinned to the guestbook.",
      error: "Could not submit your note. Please try again.",
      drawerTitle: "~/guestbook.log",
      signInPrompt: "Sign In to Leave a Note",
      signInGithub: "GitHub",
      signInGoogle: "Google",
      devReply: "makasi udah mampiir 🤩",
      replyLabel: "Reply",
      closeDrawer: "ESC ✕",
      footerNote: "Please sign in with GitHub or Google above, or leave a quick note below."
    },
    contact: {
      sectionTitle: "CONTACT",
      sectionSubtitle: "Open for software engineering opportunities, AI research collaborations, and speaking invitations.",
      directTitle: "DIRECT CHANNELS",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp / Tel",
      locationLabel: "Location",
      connectSocials: "CONNECT ON SOCIALS:",
      sendInquiryTitle: "SEND DIRECT INQUIRY",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Sarah Jenkins",
      emailPlaceholder: "sarah@company.com",
      subjectLabel: "Subject *",
      subjects: {
        job: "💼 Job Opportunity (Full-Time / Contract)",
        collab: "🚀 Project Collaboration / Freelance",
        speaking: "🎤 Speaking / Workshop Invitation",
        general: "☕ General Inquiry / Say Hello"
      },
      messageLabel: "Your Message *",
      messagePlaceholder: "Describe your inquiry, project scope, or opportunity...",
      submit: "DISPATCH MESSAGE",
      submitting: "SENDING INQUIRY...",
      success: "Your message has been securely dispatched. I will reply within 24 hours!",
      error: "Failed to dispatch message. Please try reaching out directly via email."
    },
    footer: {
      builtWith: "Engineered with Next.js 15, React 19, Tailwind CSS, & Supabase Server.",
      rights: "Dimas Arbi Ardian. All rights reserved.",
      backToTop: "Back to Top"
    },
    mascot: {
      idle: "z Z (Idle Mode)",
      hover: "! (Ready to Assist)",
      greeting: "Hello there! Thanks for visiting Dimas's portfolio 🚀"
    }
  },
  id: {
    nav: {
      home: "BERANDA",
      about: "TENTANG",
      projects: "PROYEK",
      research: "RISET",
      journey: "PENGALAMAN",
      guestbook: "BUKU TAMU",
      contact: "KONTAK",
      resume: "RESUME",
      statusOpen: "SIAP BEKERJA",
      basedIn: "TINGGAL DI SUKABUMI, INDONESIA",
      today: "HARI INI",
      scrollDown: "GULIR KE BAWAH"
    },
    hero: {
      badge: "REKAYASA • RISET • PEDAGOGI",
      titleFirst: "DIMAS ARBI",
      titleLast: "ARDIAN",
      pills: {
        fullstack: "Rekayasa Web Full-Stack",
        aiResearcher: "Peneliti Kecerdasan Buatan (AI)",
        cumLaude: "Teknik Informatika (Cum Laude)",
        dimasTag: "DIMAS",
        instructor: "Instruktur Teknis"
      },
      terminalCode: 'const INISIALISASI_SISTEM = async () => { const Pengembang = { ID: "DIMAS_ARBI_ARDIAN", Asal: "Sukabumi_Indonesia", Peran: "Full_Stack_Engineer & Peneliti_AI", PolaPikir: "Berpikir_Sistematis_Dengan_Presisi_AI" }; await Sistem.muat("Next.js_15", "React_19", "NestJS", "MERN", "YOLOv8"); if (Proyek.kompleks) return Pengembang.selesaikanDengan(Fisika + Logika + Pengalaman); const Misi = "Membangun pengalaman digital yang hidup, terarah, dan terukur."; return Pengembang.buat({ kejelasan: true, estetika: "Tegas_dan_Bermakna", keamanan: "Ketat" }); };'
    },
    about: {
      sectionTitle: "TENTANG SAYA",
      introTitle: "HALO, SAYA DIMAS ARBI ARDIAN.",
      bioParagraph1: "Lulusan Sarjana Komputer - Teknik Informatika (IPK: 3.84 / 4.00 Cum Laude) dengan spesialisasi Pengembangan Web Full-Stack, Deep Learning, dan Kecerdasan Buatan. Berpengalaman membangun platform web produksi menggunakan Next.js 15, MERN Stack, NestJS, dan Laravel.",
      bioParagraph2: "Penulis artikel ilmiah di Jurnal Terakreditasi SINTA 2 (JUTIF) dan Jurnal SOCIETY. Instruktur teknis aktif dan pembicara Google Gen AI yang telah membimbing lebih dari 1.000+ mahasiswa serta dosen di seluruh Indonesia.",
      downloadCv: "UNDUH RESUME (CV)",
      hireMe: "REKRUT SAYA",
      statusOnline: "ONLINE",
      educationTitle: "TEKNIK INFORMATIKA",
      university: "🏛️ UNIVERSITAS NUSA PUTRA",
      degree: "Sarjana Komputer (S.Kom.)",
      graduatedYear: "LULUS 2026",
      courseworkLabel: "MATA KULIAH RELEVAN:",
      coursework: [
        "Rekayasa Web",
        "AI & Deep Learning",
        "Sistem Basis Data",
        "Arsitektur Perangkat Lunak",
        "Computer Vision",
        "Sistem Komputasi Awan"
      ],
      gpaScore: "3.84",
      gpaScale: "/ 4.00 IPK (CUM LAUDE)",
      gpaDistinction: "DENGAN PUJIAN TINGGI",
      techStackTitle: "KEAHLIAN TEKNOLOGI",
      categories: {
        languages: "BAHASA UTAMA",
        frontend: "FRAMEWORK & UI",
        backend: "BACKEND & DATABASE",
        aiCloud: "AI, CLOUD & TOOLS"
      },
      focusTitle: "FOKUS SAYA",
      focusDesc: "Menggabungkan Riset Deep Learning dengan Sistem Full-Stack yang tangguh. Saya berfokus membangun aplikasi web yang tahan banting, mengutamakan pengguna, dan mengimplementasikan model computer vision dari riset hingga siap produksi di cloud.",
      focusPills: {
        fullstack: "Sistem Full-Stack",
        aiVision: "AI & Computer Vision"
      }
    },
    projects: {
      sectionTitle: "KARYA TERPILIH",
      sectionSubtitle: "Portofolio solusi rekayasa fungsional yang berfokus pada integritas data, riset AI, dan performa tinggi.",
      filters: {
        all: "SEMUA",
        web: "WEB FULL-STACK",
        ai: "AI & VISION",
        enterprise: "ENTERPRISE & POS"
      },
      featuredBadge: "★ UNGGULAN",
      readCaseStudy: "BACA STUDI KASUS",
      liveDemo: "DEMO LANGSUNG",
      sourceCode: "KODE SUMBER",
      sysArch: "ARSITEKTUR_SISTEM",
      coreDecisions: "Keputusan Teknis Utama:",
      impactRating: "PENILAIAN_DAMPAK:",
      prodReady: "SIAP_PRODUKSI",
      modal: {
        overview: "Ringkasan Proyek",
        challenge: "Tantangan Rekayasa",
        solution: "Solusi yang Diterapkan",
        architecture: "Arsitektur Sistem",
        keyFeatures: "Fitur Utama",
        impact: "Dampak Terukur",
        close: "Tutup Studi Kasus"
      }
    },
    research: {
      sectionTitle: "RISET & SERTIFIKASI",
      sectionSubtitle: "Publikasi ilmiah terakreditasi, prosiding konferensi, dan sertifikasi industri terverifikasi.",
      publicationsTitle: "PUBLIKASI ILMIAH (4 KARYA)",
      certificationsTitle: "SERTIFIKASI TERVERIFIKASI (KLIK UNTUK LIHAT SERTIFIKAT)",
      testScoresTitle: "SKOR UJIAN STANDAR & BAHASA",
      verifiedOnCredly: "Verifikasi di Credly",
      viewCertificate: "LIHAT SERTIFIKAT",
      statusLabel: "Status"
    },
    journey: {
      sectionTitle: "PERJALANAN KARIR",
      sectionSubtitle: "Linimasa terbalik peran rekayasa perangkat lunak, penghargaan akademis, riset, dan dokumentasi magang.",
      viewCertificate: "LIHAT SERTIFIKAT MAGANG",
      openArchive: "BUKA ARSIP PROYEK",
      closeArchive: "TUTUP ARSIP",
      deliverables: "HASIL KERJA UTAMA:",
      technologies: "TEKNOLOGI & ALAT:",
      metrics: "DAMPAK TERUKUR:"
    },
    guestbook: {
      sectionTitle: "BUKU TAMU",
      totalSignatures: "TOTAL TANDA TANGAN",
      leaveNote: "TINGGALKAN PESAN",
      visitorNotes: "PESAN PENGUNJUNG",
      liveBadge: "AKTIF",
      nameLabel: "Nama Anda *",
      namePlaceholder: "contoh: Budi Pratama",
      roleLabel: "Peran / Perusahaan",
      rolePlaceholder: "contoh: Lead Developer @ Startup",
      messageLabel: "Pesan *",
      messagePlaceholder: "Tuliskan salam, pesan penyemangat, atau saran...",
      submit: "KIRIM PESAN",
      submitting: "MENGIRIM...",
      success: "Terima kasih! Pesan Anda telah disematkan di buku tamu.",
      error: "Gagal mengirimkan pesan. Silakan coba lagi.",
      drawerTitle: "~/guestbook.log",
      signInPrompt: "Masuk untuk Meninggalkan Catatan",
      signInGithub: "GitHub",
      signInGoogle: "Google",
      devReply: "makasi udah mampiir 🤩",
      replyLabel: "Balas",
      closeDrawer: "ESC ✕",
      footerNote: "Masuk menggunakan GitHub atau Google di atas, atau isi pesan instan di bawah."
    },
    contact: {
      sectionTitle: "HUBUNGI SAYA",
      sectionSubtitle: "Terbuka untuk peluang rekayasa perangkat lunak, kolaborasi riset AI, dan undangan pembicara teknis.",
      directTitle: "KANAL LANGSUNG",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp / Tel",
      locationLabel: "Lokasi",
      connectSocials: "TERHUBUNG DI SOSIAL MEDIA:",
      sendInquiryTitle: "KIRIM PESAN LANGSUNG",
      nameLabel: "Nama Lengkap *",
      namePlaceholder: "contoh: Sarah Kartika",
      emailPlaceholder: "sarah@perusahaan.com",
      subjectLabel: "Subjek *",
      subjects: {
        job: "💼 Peluang Karir (Full-Time / Kontrak)",
        collab: "🚀 Kolaborasi Proyek / Freelance",
        speaking: "🎤 Undangan Pembicara / Workshop",
        general: "☕ Pertanyaan Umum / Menyapa"
      },
      messageLabel: "Pesan Anda *",
      messagePlaceholder: "Jelaskan secara singkat proyek, lini masa, atau kebutuhan Anda...",
      submit: "KIRIM PESAN SEKARANG",
      submitting: "MENGIRIMKAN...",
      success: "Pesan Anda telah terkirim secara aman. Saya akan merespons dalam 24 jam!",
      error: "Gagal mengirim pesan. Silakan hubungi langsung melalui email."
    },
    footer: {
      builtWith: "Direkayasa dengan Next.js 15, React 19, Tailwind CSS, & Supabase Server.",
      rights: "Dimas Arbi Ardian. Hak cipta dilindungi.",
      backToTop: "Kembali ke Atas"
    },
    mascot: {
      idle: "z Z (Mode Santai)",
      hover: "! (Siap Membantu)",
      greeting: "Halo! Terima kasih telah berkunjung ke portofolio Dimas 🚀"
    }
  }
};
