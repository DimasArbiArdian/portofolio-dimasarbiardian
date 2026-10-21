'use client';

import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'w-4 h-4' }: TechIconProps) {
  const normalized = name.toLowerCase();

  // 1. Python (Official dual snake in Blue #3776AB and Yellow #FFD438)
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.91 2c-5.07 0-4.75 2.2-4.75 2.2l.01 2.28h4.82v.69H5.21S2 6.8 2 11.92c0 5.11 2.8 4.93 2.8 4.93h1.67v-2.34s-.09-2.8 2.75-2.8h4.72s2.66.04 2.66-2.61V4.65S16.98 2 11.91 2zm-2.6 1.54a.88.88 0 110 1.77.88.88 0 010-1.77z"
          fill="#3776AB"
        />
        <path
          d="M12.09 22c5.07 0 4.75-2.2 4.75-2.2l-.01-2.28h-4.82v-.69h6.78s3.21.37 3.21-4.75c0-5.11-2.8-4.93-2.8-4.93h-1.67v2.34s.09 2.8-2.75 2.8H10.07s-2.66-.04-2.66 2.61v4.45S7.02 22 12.09 22zm2.6-1.54a.88.88 0 110-1.77.88.88 0 010 1.77z"
          fill="#FFD438"
        />
      </svg>
    );
  }

  // 2. TypeScript (Official Blue #3178C6 with white TS)
  if (normalized.includes('typescript')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.5 9.5H6.5v2h1.8V19h2.4v-7.5h1.8v-2zm4.1 4.7c0-.7.3-1.1.9-1.4.6-.3 1.4-.6 2.5-.9 1.1-.3 1.9-.7 2.4-1.2.5-.5.7-1.1.7-1.9 0-.9-.4-1.7-1.1-2.2-.7-.5-1.7-.8-2.9-.8-1.2 0-2.2.3-3 .9-.8.6-1.2 1.4-1.3 2.5h2.2c.1-.5.3-.9.7-1.2.4-.3 1-.4 1.7-.4.6 0 1.1.1 1.5.4.4.3.6.7.6 1.2 0 .4-.2.8-.5 1-.3.3-.9.5-1.8.8-1.2.3-2.1.7-2.7 1.2-.6.5-.9 1.2-.9 2.1 0 .9.4 1.7 1.1 2.2.7.5 1.7.8 3 .8 1.3 0 2.4-.3 3.2-1 .8-.7 1.3-1.6 1.3-2.7h-2.3c0 .6-.2 1.1-.6 1.4-.4.3-1 .5-1.8.5-.7 0-1.2-.1-1.6-.4-.4-.3-.6-.7-.6-1.2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 3. JavaScript (Official Yellow #F7DF1E with black JS)
  if (normalized.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7.5 18.5c-.8 0-1.5-.3-2-.8-.5-.5-.7-1.2-.7-2h2.2c0 .4.1.7.3.9.2.2.5.3.9.3.4 0 .7-.1.9-.3.2-.2.3-.5.3-.9V9.5h2.4v6.2c0 1-.3 1.8-.9 2.3-.6.5-1.4.8-2.4.8zm9.2-.1c-1.3 0-2.3-.4-3.1-1.1-.8-.7-1.2-1.7-1.3-2.9h2.3c.1.7.3 1.2.7 1.5.4.3 1 .5 1.7.5.6 0 1.1-.1 1.5-.4.4-.3.6-.7.6-1.1 0-.4-.2-.7-.5-1-.3-.2-.8-.5-1.7-.7-1.3-.4-2.2-.8-2.8-1.3-.6-.5-.9-1.2-.9-2.1 0-.9.4-1.7 1.1-2.3.7-.6 1.7-.9 2.9-.9 1.2 0 2.2.3 2.9.9.7.6 1.1 1.5 1.2 2.5h-2.3c-.1-.5-.3-.9-.6-1.2-.3-.3-.8-.4-1.4-.4-.5 0-1 .1-1.4.4-.4.3-.5.6-.5 1 0 .3.1.6.4.8.3.2.8.4 1.6.7 1.4.4 2.3.9 2.9 1.4.6.5.9 1.2.9 2.1 0 1-.4 1.8-1.1 2.4-.7.6-1.7.9-2.9.9z"
          fill="#000000"
        />
      </svg>
    );
  }

  // 4. PHP (Official Purple #777BB4 oval badge)
  if (normalized.includes('php')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4" />
        <text
          x="12"
          y="15"
          fill="#FFFFFF"
          fontSize="8.5"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          php
        </text>
      </svg>
    );
  }

  // 5. SQL (Relational database stack cylinders)
  if (normalized === 'sql') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5" rx="8" ry="3" fill="#00758F" />
        <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#00758F" strokeWidth="2" fill="none" />
        <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#00758F" strokeWidth="2" fill="none" />
        <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke="#00758F" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // 6. HTML5 (Official Orange Shield #E34F26)
  if (normalized.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#E34F26" />
        <path d="M12 3.8v16.4l5.9-1.5 1.3-14.9H12z" fill="#EF652A" />
        <path
          d="M12 7.7H7.7l.2 2.3h4.1V7.7zm0 4.6H7.9l.2 2.3h3.9v-2.3zm0 4.7l-2.6-.7-.2-1.9H7.3l.3 3.6 4.4 1.2V17z"
          fill="#EBEBEB"
        />
        <path
          d="M12 7.7v2.3h4.1l-.4 4.6-3.7 1v2.3l6.3-1.7.5-6.2.2-2.3H12zm0 4.6v-2.3h4.1l-.2 2.3H12z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 7. CSS3 (Official Blue Shield #1572B6)
  if (normalized.includes('css')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3z" fill="#1572B6" />
        <path d="M12 3.8v16.4l5.9-1.5 1.3-14.9H12z" fill="#33A9DC" />
        <path
          d="M12 7.7H7.7l.4 4.6h3.9V7.7zm0 6.9H9.9l-.2-1.9H7.8l.4 4.2 3.8 1v-3.3z"
          fill="#EBEBEB"
        />
        <path
          d="M12 7.7v2.3h4.1l-.2 2.3H12v2.3h3.7l-.4 4.2-3.3.9v2.3l5.8-1.6.8-8.1.2-2.3H12z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 8. Next.js (Official stylized monochrome "N")
  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="11" fill="currentColor" fillOpacity="0.1" />
        <path
          d="M18.8 19.5L9.6 7.5H7.5v9h2v-6.3l8.3 10.8c.3-.5.7-1 1-1.5zM14.5 7.5h2v6.2l-2-2.6V7.5z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // 9. React (Official Cyan #61DAFB Atom)
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="3.5" ry="3.5" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.3" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }

  // 10. Tailwind CSS (Official Twin Cyan Waves #06B6D4)
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    );
  }

  // 11. Framer Motion (Official Blue Triangular Prism #0055FF)
  if (normalized.includes('framer')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#0055FF">
        <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2zm0 14h8l-8 7v-7z" />
      </svg>
    );
  }

  // 12. Zustand (Official Cute Bear)
  if (normalized.includes('zustand')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="7" r="3" fill="#8B5A2B" />
        <circle cx="18" cy="7" r="3" fill="#8B5A2B" />
        <ellipse cx="12" cy="14" rx="8" ry="7" fill="#A0522D" />
        <ellipse cx="12" cy="16" rx="4" ry="3" fill="#D2B48C" />
        <circle cx="9.5" cy="12.5" r="1.2" fill="#000000" />
        <circle cx="14.5" cy="12.5" r="1.2" fill="#000000" />
        <ellipse cx="12" cy="15" rx="1.5" ry="1" fill="#000000" />
      </svg>
    );
  }

  // 13. TanStack Query (Official Red/Orange Wheel #FF4154)
  if (normalized.includes('tanstack') || normalized.includes('query')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#FF4154" />
        <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="2.5" fill="#FFB703" />
      </svg>
    );
  }

  // 14. Recharts (Official Analytics Chart)
  if (normalized.includes('recharts')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="14" width="3.5" height="7" rx="1" fill="#22C55E" />
        <rect x="8.5" y="9" width="3.5" height="12" rx="1" fill="#3B82F6" />
        <rect x="14" y="5" width="3.5" height="16" rx="1" fill="#8B5CF6" />
        <path d="M4 11l5-4 5 3 6-6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // 15. Leaflet.js (Official Green Leaf #199900)
  if (normalized.includes('leaflet')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#199900">
        <path d="M20.5 3.5C14.5 3 9 8 7 13.5c-1 2.8-.5 6.5.5 8 1.5.5 5 1 8-.5C21 19 25 13 20.5 3.5zM12 18c-1.5-2.5 0-7 5-11-3.5 5-5 9.5-5 11z" />
      </svg>
    );
  }

  // 16. NestJS (Official Red Cat/Falcon #E0234E)
  if (normalized.includes('nestjs')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E0234E">
        <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2zm6.5 13.8L12 19.3l-6.5-3.5V8.2L12 4.7l6.5 3.5v7.6z" />
        <path d="M12 7l-4 2.2v4.6l4 2.2 4-2.2V9.2L12 7z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 17. Node.js (Official Green Hexagon #5FA04E)
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#5FA04E">
        <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.4L5.2 8.3v7.4L12 19.6l6.8-3.9V8.3L12 4.4z" />
        <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
      </svg>
    );
  }

  // 18. Express.js (Official Minimalist Monochrome)
  if (normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#000000" />
        <text
          x="12"
          y="15.5"
          fill="#FFFFFF"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          ex
        </text>
      </svg>
    );
  }

  // 19. Laravel (Official Red Layered Prism #FF2D20)
  if (normalized.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF2D20">
        <path d="M3.5 6.5L12 2l8.5 4.5v11L12 22l-8.5-4.5v-11zm8.5 7.2l6.5-3.5-2.5-1.4-4 2.2-4-2.2-2.5 1.4 6.5 3.5z" />
      </svg>
    );
  }

  // 20. Prisma ORM (Official Diamond/Prism #2D3748)
  if (normalized.includes('prisma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 18.5L12 2l8 16.5-8 3.5-8-3.5z"
          stroke="#5A67D8"
          strokeWidth="2"
          fill="#2D3748"
        />
        <path d="M12 2v20" stroke="#5A67D8" strokeWidth="1.5" />
      </svg>
    );
  }

  // 21. PostgreSQL (Official Elephant Head #4169E1)
  if (normalized.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#4169E1">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.2-.1-.8-.1-2.1.2-3 .3-.9 1.8-4.5 1.8-4.5s-.5-.9-.5-2.3c0-2.2 1.3-3.8 2.8-3.8 1.3 0 2 .1 2 2.2 0 1.3-.9 3.3-1.3 5.2-.4 1.6.8 2.9 2.4 2.9 2.8 0 4.8-3.6 4.8-7.9 0-3.3-2.2-5.7-6.2-5.7-4.8 0-7.7 3.5-7.7 7.4 0 1.4.5 2.9 1.2 3.8.1.2.2.3.1.5-.1.5-.4 1.7-.5 1.9-.1.3-.3.4-.6.3-2.1-1-3.1-3.6-3.1-5.9 0-4.8 4.2-9.4 11.7-9.4 6.2 0 10.3 4.5 10.3 9.4 0 6.3-3.5 11.1-8.7 11.1-1.7 0-3.4-.9-3.9-2l-1.1 4.2c-.4 1.5-1.5 3.4-2.2 4.6 1.4.4 2.9.7 4.5.7 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
    );
  }

  // 22. MongoDB (Official Green Droplet Leaf #47A248)
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#47A248">
        <path d="M12 2C11.5 3 7 7.5 7 13.5c0 4.5 3.5 8 5 8.5 1.5-.5 5-4 5-8.5C17 7.5 12.5 3 12 2zm0 17.5v-15c2.5 3 3.5 6 3.5 9 0 3-1.5 5.5-3.5 6z" />
      </svg>
    );
  }

  // 23. MySQL & SQLite (Official MySQL Dolphin / Database)
  if (normalized.includes('mysql') || normalized.includes('sqlite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#00758F">
        <path d="M21.5 12c-.5-1.5-2-2.5-3.5-2.5-1 0-1.8.5-2.5 1.2C14 9.2 12 8 9.5 8c-3.6 0-6.5 2.7-6.5 6s2.9 6 6.5 6c2.5 0 4.7-1.4 5.7-3.5.7.5 1.5.8 2.3.8 2 0 3.8-1.5 4-3.5.1-.6 0-1.2-.5-1.8zm-12 6c-2.5 0-4.5-1.8-4.5-4s2-4 4.5-4 4.5 1.8 4.5 4-2 4-4.5 4z" />
      </svg>
    );
  }

  // 24. YOLOv8 (Official Ultralytics Aperture / AI Vision)
  if (normalized.includes('yolo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#00FFFF" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="#00FFFF" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="#00FFFF" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3" stroke="#00FFFF" strokeWidth="2" />
      </svg>
    );
  }

  // 25. VGG16 / CNN (Official Deep Learning / TensorFlow #FF6F00)
  if (normalized.includes('vgg') || normalized.includes('cnn')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6F00">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 3.2L5.8 8.8v6.4L12 18.8l6.2-3.6V8.8L12 5.2z" />
        <path d="M12 8l4 2.5v3L12 16l-4-2.5v-3L12 8z" fill="#FFA000" />
      </svg>
    );
  }

  // 26. Random Forest (Official Scikit-Learn Trees #F89939)
  if (normalized.includes('forest') || normalized.includes('random')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l4 7h-3v6h-2V9H8l4-7z" fill="#22C55E" />
        <path d="M6 10l3 5H7.5v5H6v-5H4.5l3-5z" fill="#15803D" />
        <path d="M18 10l3 5h-1.5v5H18v-5h-1.5l3-5z" fill="#15803D" />
      </svg>
    );
  }

  // 27. Gemini API (Official Google Gemini 4-Point Sparkle #4E75F6)
  if (normalized.includes('gemini')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
          fill="url(#gemini-grad)"
        />
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1BA1E3" />
            <stop offset="0.5" stopColor="#5E5CE6" />
            <stop offset="1" stopColor="#9C528B" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 28. AWS Cloud (Official AWS Smile #FF9900)
  if (normalized.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
        <path d="M18.8 15.6c-2.3 1.7-5.5 2.6-8.4 2.6-4 0-7.6-1.5-10.4-4-.2-.2 0-.5.3-.3 3 1.7 6.6 2.7 10.3 2.7 2.6 0 5.4-.7 7.9-2.1.4-.3.7.2.3.6z" />
        <path d="M19.7 14.3c-.3-.4-1.9-.2-2.8-.1-.3 0-.3-.2 0-.4 1.7-1.2 4.4-.8 4.7-.4.3.4-.3 3.1-2 4.4-.2.2-.4.1-.3-.1.4-.9.8-2.6.4-3.4z" />
        <text x="12" y="11" fill="currentColor" fontSize="7" fontWeight="bold" textAnchor="middle">
          AWS
        </text>
      </svg>
    );
  }

  // 29. Alibaba Cloud (Official Orange Loop #FF6A00)
  if (normalized.includes('alibaba')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#FF6A00">
        <path d="M4 8h5v8H4zm11 0h5v8h-5zM9 11h6v2H9z" />
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="#FF6A00" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  // 30. Salesforce LWC (Official Blue Cloud #00A1E0)
  if (normalized.includes('salesforce')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#00A1E0">
        <path d="M10 5.5c1.2-1 2.8-1.5 4.5-1.2 1.6.3 3 1.3 3.8 2.7 1.2.3 2.3 1 3 2 .8 1.1 1.2 2.5 1 3.9-.2 1.4-1 2.6-2.1 3.4-1.1.8-2.5 1.2-3.9 1.2H7c-1.6 0-3.1-.6-4.2-1.8C1.6 14.5 1 13 1 11.4c0-1.5.6-3 1.7-4.1C3.8 6.2 5.3 5.5 6.9 5.5c.3 0 .7 0 1 .1 1-1.3 2.5-2.1 4.1-2.1z" />
      </svg>
    );
  }

  // 31. Git & GitHub (Official Git Orange Diamond #F05032)
  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l2.6 2.6c.6-.2 1.3-.1 1.8.4.5.5.7 1.2.5 1.9l2.5 2.5c.7-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.4c.2.1.4.3.5.5.7.7.7 1.9 0 2.7-.7.7-1.9.7-2.7 0-.7-.7-.7-1.9 0-2.7.2-.2.4-.4.6-.5V8.8c-.2-.1-.4-.3-.6-.5-.6-.6-.7-1.4-.4-2.1L8 3.6 2.4 9.2c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.5.1-2.4z" />
      </svg>
    );
  }

  // Default fallback badge
  return (
    <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
  );
}
