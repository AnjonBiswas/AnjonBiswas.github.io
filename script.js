const projects = [
  {
    title: "Smart Cafe Management System",
    year: "2023",
    status: "Completed",
    type: "Console-Based Application",
    tech: ["C"],
    image: "assets/Smart%20Caf%C3%A9%20Management%20System.png",
    description:
      "A console-based cafe management system built in C that simulates daily cafe operations like order handling, billing, and menu management.",
    overview:
      "The Smart Cafe Management System is a console-based application built in C that simulates real cafe operations such as order handling, billing, and menu management.",
    featureGroups: [
      {
        title: "Features",
        items: [
          "Menu display and item selection",
          "Order processing system",
          "Automated bill generation",
          "Structured data handling",
          "Simple and user-friendly console interaction"
        ]
      }
    ],
    purpose:
      "To build strong programming fundamentals and apply logic to a real-world business scenario.",
    learning: [
      "Core C programming concepts",
      "Problem-solving and logic building",
      "File handling and structured programming"
    ],
    github: "https://github.com/AnjonBiswas/Smart-Cafe-Management-System",
    demo: "#"
  },
  {
    title: "Autonomous Fire Fighting Car",
    year: "2024",
    status: "Completed",
    type: "IoT",
    tech: ["Arduino", "ESP32-CAM", "Microprocessors"],
    components: [
      "Water Pump Motor",
      "Servo Motor",
      "RF Transceiver Radio",
      "Arduino Nano",
      "ESP32-CAM",
      "Gyroscope",
      "Flame Sensor",
      "etc."
    ],
    image: "assets/Autonomous Fire Fighting Car.png",
    description:
      "An autonomous fire-fighting robotic car that detects fire using flame sensors and immediately responds by spraying water.",
    overview:
      "An autonomous fire-fighting robotic car that detects fire using flame sensors and immediately responds by spraying water. The system combines sensor-based detection, wireless communication, and mechanical control to create a real-time emergency response prototype.",
    featureGroups: [
      {
        title: "Features",
        items: [
          "Automatic fire detection using flame sensors",
          "Water pump activation for fire suppression",
          "Camera support (ESP32-CAM) for monitoring",
          "Servo-controlled directional spraying system"
        ]
      }
    ],
    purpose:
      "To design a low-cost, real-time fire detection and response system using embedded electronics and IoT concepts.",
    learning: [
      "Microcontroller programming (Arduino)",
      "Wireless communication systems",
      "Hardware-software integration",
      "Building real-world safety solutions"
    ],
    github: "#",
    demo: "#"
  },
  {
    title: "SafetyNet - Mobile App",
    year: "2025",
    status: "Completed",
    type: "Full-Stack Mobile Safety System",
    tech: ["JavaScript", "React Native", "Laravel", "SQL"],
    image: "assets/SafetyNet-mobile app.png",
    description:
      "SafetyNet is a full-stack mobile safety and emergency response platform built to improve personal security through real-time reporting, tracking, and support.",
    overview:
      "SafetyNet is a comprehensive mobile safety and emergency response system designed to enhance personal security. It integrates real-time tracking, reporting, communication, and awareness features into a unified platform.",
    featureGroups: [
      {
        title: "Incident Reporting System",
        items: [
          "Anonymous reporting option",
          "Include location data, timestamps, and detailed descriptions",
          "Upload photos or audio evidence",
          "Categorization of harassment and assault types"
        ]
      },
      {
        title: "Real-Time SOS Tracking System",
        items: [
          "GPS-based live tracking when SOS is activated",
          "Emergency button to alert registered contacts and authorities",
          "Real-time location monitoring",
          "SMS and email alerts to authorities and NGOs"
        ]
      },
      {
        title: "Safety Resource Directory",
        items: [
          "Local emergency contacts database",
          "Legal aid resources",
          "Medical facilities and trauma centers",
          "Counseling and support groups"
        ]
      },
      {
        title: "Verified Safe Spaces Mapping",
        items: [
          "Safe location marking based on previous incidents",
          "Real-time availability updates",
          "Location-based reporting system"
        ]
      },
      {
        title: "Chat System",
        items: [
          "Guest-accessible communication channel for users and support"
        ]
      },
      {
        title: "Education Module",
        items: [
          "Legal rights awareness",
          "Self-defense techniques",
          "Recognition of warning signs"
        ]
      },
      {
        title: "SafetyFeed",
        items: [
          "Community-driven platform to share and connect",
          "Emergency updates auto-posted from system events"
        ]
      },
      {
        title: "Emergency Livestream and Auto Recording",
        items: [
          "Automatic audio and video recording during SOS",
          "Livestream to trusted contacts or control room"
        ]
      },
      {
        title: "Admin Panel",
        items: [
          "Monitor system activities",
          "Verify, edit, or delete reports",
          "Direct communication with victims"
        ]
      }
    ],
    purpose:
      "To build a scalable, real-world safety system that combines mobile technology, backend infrastructure, and community awareness.",
    learning: [
      "Full-stack mobile development",
      "API integration with Laravel backend",
      "Real-time systems design",
      "Security-focused application architecture"
    ],
    github: "https://github.com/AnjonBiswas/SafetyNet-Mobile-App",
    demo: "#"
  },
  {
    title: "HealthMatrix - Smart Diet Management System",
    year: "2026",
    status: "Completed",
    type: "Web Application",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    image: "assets/HealthMatrix.png",
    description:
      "HealthMatrix is a web platform for diet tracking, personalized meal planning, and dietitian collaboration.",
    overview:
      "HealthMatrix is a web-based system that helps users maintain a healthy lifestyle through diet tracking, personalized plans, and professional dietitian support.",
    featureGroups: [
      {
        title: "Features",
        items: [
          "User dashboard for food and calorie tracking",
          "Water intake monitoring",
          "Dietitian panel for meal planning",
          "Admin panel for system control",
          "Progress tracking and analytics",
          "Secure authentication system"
        ]
      }
    ],
    purpose:
      "To simplify health management by combining tracking, planning, and expert guidance in one platform.",
    learning: [
      "Full-stack development with PHP and MySQL",
      "Multi-role system architecture",
      "Dashboard UI and UX design",
      "Real-world data management"
    ],
    github: "https://github.com/AnjonBiswas/HealthMatrix---A-Smart-Diet-Management-System",
    demo: "#"
  },
  {
    title: "PocketSense BD - Student Money Management App",
    year: "2026",
    status: "Completed",
    type: "Web Application / PWA",
    tech: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "SWR"],
    image: "assets/PocketSense.png",
    description:
      "PocketSense BD is a student money management app for Bangladesh that helps track expenses, income, savings goals, and group spending.",
    overview:
      "PocketSense BD is a student money management app for Bangladesh, built with Next.js and Supabase. It helps users track daily expenses and monthly income, manage budget goals, split group expenses, and review spending insights in Bangla or English.",
    featureGroups: [
      {
        title: "Features",
        items: [
          "Track daily expenses and monthly income",
          "Monitor daily spending limits and budget progress",
          "Set savings goals and emergency reserve amounts",
          "Manage group expenses with squad-based bill splitting",
          "View reports, charts, category breakdowns, and insights",
          "Use the app in Bangla and English with PWA support"
        ]
      }
    ],
    purpose:
      "To help students manage money more clearly with simple budgeting, savings, and shared expense tools tailored for Bangladesh.",
    learning: [
      "Next.js application architecture",
      "Supabase-backed data handling",
      "State management with Zustand",
      "User-focused budgeting and insight design"
    ],
    github: "https://github.com/AnjonBiswas/pocketsense-bd",
    demo: "#"
  },
  {
    title: "Writing Archive Site",
    year: "2026",
    status: "Completed",
    type: "Static Website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "assets/Writing Archive Site.png",
    description:
      "A personal archive site created to preserve and publicly showcase my father's writings.",
    overview:
      "A personal archive website built to preserve and showcase my father's writings. It serves as a digital platform for long-term storage and public access.",
    featureGroups: [
      {
        title: "Features",
        items: [
          "Clean reading-focused interface",
          "Organized content structure",
          "Easy navigation between writings",
          "Fully responsive design",
          "Public accessibility"
        ]
      }
    ],
    purpose:
      "To preserve meaningful literary work and make it accessible for future generations.",
    learning: [
      "Content-focused UI and UX design",
      "Static website structuring",
      "Building projects with emotional and real-world value"
    ],
    github: "https://github.com/AnjonBiswas/writing_archive_site",
    demo: "#"
  },
  {
    title: "SafetyNet-Wearable - IoT-Based Women Safety System",
    year: "2026",
    status: "Running / In Progress",
    type: "IoT + Mobile System",
    tech: ["Flutter", "Firebase", "Microprocessors"],
    components: [
      "Arduino Nano",
      "ESP32-CAM",
      "GPS Module",
      "OLED Display",
      "SOS Push Button",
      "Sound Sensor",
      "Active Buzzer",
      "Coin Vibration Motor",
      "etc."
    ],
    image: "assets/SafetyNet-Wearable.jpg",
    description:
      "An IoT-based wearable safety system designed to provide real-time emergency assistance through wearable hardware and mobile connectivity.",
    overview:
      "SafetyNet-Wearable is an IoT-based safety system designed to provide real-time emergency assistance using wearable technology integrated with a mobile application.",
    featureGroups: [
      {
        title: "Planned and In-Progress Features",
        items: [
          "Wearable emergency trigger system",
          "Flutter-based mobile app",
          "Firebase real-time database",
          "Emergency alert notifications",
          "GPS-based location tracking"
        ]
      }
    ],
    purpose:
      "To create a practical safety solution that can provide immediate help in critical situations.",
    learning: [
      "IoT system development",
      "Hardware-software integration",
      "Real-time cloud systems with Firebase",
      "Building impactful real-world solutions"
    ],
    github: "#",
    demo: "#"
  }
];
const certificates = [
  { title: "Advanced Object-Oriented Programming Excellence Award", issuer: "United International University", date: "May 2026", instructor: "Tanmoy Saha", image: "assets/Award%20Certificate%20AOOP.jpg" },
  { title: "Sharpen Your Interview Skills", issuer: "GP Academy", date: "Mar 2026", instructor: "Asif Raihan Fahim", image: "assets/certificate-sharpen-your-interview-skills.jpg" },
  { title: "LinkedIn 101", issuer: "GP Academy", date: "Mar 2026", instructor: "Mahir Hossain", image: "assets/certificate-linkedin-101.jpg" },
  { title: "Corporate Presentation Skills", issuer: "GP Academy", date: "Mar 2026", instructor: "Lubab Bin Abdullah", image: "assets/certificate-corporate-presentation-skills.jpg" },
  { title: "Art of Communication", issuer: "GP Academy", date: "Apr 2026", instructor: "Shoumen Barua", image: "assets/certificate-art-of-communication.jpg" },
  { title: "Smart CV", issuer: "GP Academy", date: "Apr 2026", instructor: "Arian Mehjabin", image: "assets/certificate-smart-cv.jpg" },
  { title: "Master HTML and CSS by Building Real World Projects", issuer: "Udemy", date: "Mar 2025", instructor: "Anisul Islam", image: "assets/Master%20HTML%20and%20CSS%20by%20building%20real%20world%20projects.jpg" },
  { title: "Deep Dive into OpenAI Models: Master o3, o4-mini & Beyond", issuer: "Udemy", date: "Sep 2025", instructor: "Anton Voroniuk", image: "assets/Deep%20Dive%20into%20OpenAI%20Models.jfif" }
];

const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const backToTop = document.querySelector(".back-to-top");
const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
const modalMeta = document.querySelector("#modalMeta");
const modalContent = document.querySelector("#modalContent");
const modalActions = document.querySelector("#modalActions");
const modalMedia = document.querySelector(".modal-media");
const screenshotModal = document.querySelector("#screenshotModal");
const screenshotEyebrow = document.querySelector("#screenshotEyebrow");
const screenshotTitle = document.querySelector("#screenshotTitle");
const screenshotImage = document.querySelector("#screenshotImage");
const screenshotPrevBtn = document.querySelector("#screenshotPrevBtn");
const screenshotNextBtn = document.querySelector("#screenshotNextBtn");
const screenshotCounter = document.querySelector("#screenshotCounter");
const cvModal = document.querySelector("#cvModal");
const viewCvBtn = document.querySelector("#viewCvBtn");
const cvView = cvModal?.querySelector(".cv-view");
const cvFrame = document.querySelector("#cvFrame");
const cvMobilePages = document.querySelector("#cvMobilePages");
const cvStatus = document.querySelector("#cvStatus");
const cvDownloadLink = document.querySelector("#cvDownloadLink");
const downloadFrame = document.querySelector("#downloadFrame");
const typingText = document.querySelector("#typingText");
const customCursor = document.querySelector(".custom-cursor");
const scrollProgressBar = document.querySelector(".scroll-progress-bar");
const heroSection = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const heroContent = document.querySelector(".hero-content");
const heroCopy = document.querySelector(".hero-copy");
const heroVisual = document.querySelector(".hero-visual");
const heroActions = document.querySelector(".hero-actions");
const interactiveMotionCards = document.querySelectorAll(".skill-card, .project-card, .certificate-card, .achievement-card");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const clickableSelector = "a, button, [role='button'], .project-card, .certificate-card, .gallery-item, .btn, .filter-btn, .text-btn, .nav-link, .theme-toggle, .nav-toggle, .back-to-top, .modal-close, #screenshotTitle";
const roles = [
  "CSE Undergraduate",
  "Web & Mobile App Developer",
  "Problem Solver",
  "HCI & AI Literacy Explorer",
  
];

const skillResourceLinks = {
  c: "https://en.cppreference.com/w/c",
  javascript: "https://developer.mozilla.org/docs/Web/JavaScript",
  php: "https://www.php.net/",
  python: "https://www.python.org/",
  java: "https://www.java.com/",
  html: "https://developer.mozilla.org/docs/Web/HTML",
  css: "https://developer.mozilla.org/docs/Web/CSS",
  bootstrap: "https://getbootstrap.com/",
  flutter: "https://flutter.dev/",
  "react native": "https://reactnative.dev/",
  laravel: "https://laravel.com/",
  firebase: "https://firebase.google.com/",
  sql: "https://www.mysql.com/what-is-sql/",
  "spring boot": "https://spring.io/projects/spring-boot",
  sqlite: "https://www.sqlite.org/",
  "data structure and algorithm": "https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/",
  "computer networks": "https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/",
  "operating systems": "https://en.wikipedia.org/wiki/Operating_system",
  microprocessors: "https://en.wikipedia.org/wiki/Microprocessor",
  git: "https://git-scm.com/",
  github: "https://github.com/",
  powerpoint: "https://www.microsoft.com/microsoft-365/powerpoint",
  "adobe photoshop": "https://www.adobe.com/products/photoshop.html",
  figma: "https://www.figma.com/",
  canva: "https://www.canva.com/",
  communication: "https://en.wikipedia.org/wiki/Communication",
  presentation: "https://en.wikipedia.org/wiki/Presentation",
  "problem solving": "https://en.wikipedia.org/wiki/Problem_solving",
  teamwork: "https://en.wikipedia.org/wiki/Teamwork"
};

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;
let cvPdfJsPromise = null;
let cvMobileRendered = false;
let heroActionsPlaceholder = null;
let screenshotSlides = [];
let screenshotCurrentIndex = 0;

document.querySelector("#year").textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
themeIcon.textContent = savedTheme === "dark" ? "☾" : "☀";

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("portfolioTheme", nextTheme);
  themeIcon.textContent = nextTheme === "dark" ? "☾" : "☀";
});

navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("show");
  body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

function closeNavMenu() {
  navPanel.classList.remove("show");
  body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNavMenu);
});

navPanel.addEventListener("click", (event) => {
  if (event.target.closest(".nav-link")) {
    closeNavMenu();
  }
});

function typeRole() {
  const currentRole = roles[roleIndex];
  const visibleText = currentRole.slice(0, characterIndex);
  typingText.textContent = visibleText;

  if (!isDeleting && characterIndex < currentRole.length) {
    characterIndex += 1;
    setTimeout(typeRole, 65);
    return;
  }

  if (!isDeleting && characterIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeRole, 1000);
    return;
  }

  if (isDeleting && characterIndex > 0) {
    characterIndex -= 1;
    setTimeout(typeRole, 46);
    return;
  }

  isDeleting = false;
  roleIndex = (roleIndex + 1) % roles.length;
  setTimeout(typeRole, 260);
}

typeRole();
applyStaggeredReveal();
initSkillBadgeLinks();

function normalizeSkillLabel(label = "") {
  return label.trim().toLowerCase().replace(/\s+/g, " ");
}

function initSkillBadgeLinks() {
  const skillBadges = document.querySelectorAll(".skills-grid .skill-badge");
  skillBadges.forEach((badge) => {
    const label = badge.querySelector("span")?.textContent?.trim() || badge.textContent.trim();
    const url = skillResourceLinks[normalizeSkillLabel(label)];
    if (!url) return;

    const openLink = () => window.open(url, "_blank", "noopener,noreferrer");
    badge.classList.add("skill-badge-link");
    badge.setAttribute("role", "link");
    badge.setAttribute("tabindex", "0");
    badge.setAttribute("title", `Open ${label}`);
    badge.setAttribute("aria-label", `Open ${label} resource website`);

    badge.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLink();
    });

    badge.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openLink();
    });
  });
}

function syncHeroActionsPlacement() {
  if (!heroContent || !heroCopy || !heroVisual || !heroActions) return;
  const isMobileLayout = window.matchMedia("(max-width: 980px)").matches;

  if (!heroActionsPlaceholder) {
    heroActionsPlaceholder = document.createComment("hero-actions-placeholder");
    heroCopy.insertBefore(heroActionsPlaceholder, heroActions);
  }

  if (isMobileLayout) {
    if (heroActions.parentElement !== heroContent) {
      heroContent.appendChild(heroActions);
    }
    return;
  }

  if (heroActions.parentElement !== heroCopy) {
    heroActionsPlaceholder.parentNode?.insertBefore(heroActions, heroActionsPlaceholder.nextSibling);
  }
}

syncHeroActionsPlacement();
initButtonHoverTracking();
initCardSpotlight();
initGlobalSpotlight();
initHeroParallax();
initBackgroundParallax();

function initButtonHoverTracking() {
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reducedMotionQuery.matches || !supportsFinePointer) return;

  const buttonLikeElements = document.querySelectorAll("button, .btn, .filter-btn, .text-btn");
  if (!buttonLikeElements.length) return;

  buttonLikeElements.forEach((element) => {
    element.classList.add("mouse-hover-button");

    const updatePointer = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      const rect = element.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
      element.style.setProperty("--btn-hover-x", `${x}px`);
      element.style.setProperty("--btn-hover-y", `${y}px`);
    };

    element.addEventListener("pointerenter", (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      updatePointer(event);
      element.style.setProperty("--btn-hover-opacity", "0.42");
    });

    element.addEventListener("pointermove", updatePointer);

    element.addEventListener("pointerleave", () => {
      element.style.setProperty("--btn-hover-opacity", "0");
    });

    element.addEventListener("blur", () => {
      element.style.setProperty("--btn-hover-opacity", "0");
    });
  });
}

function initExpressiveCursor() {
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!customCursor || !supportsFinePointer || prefersReducedMotion) {
    body.classList.remove("custom-cursor-ready");
    if (!customCursor) return;
    customCursor.classList.remove("is-visible", "is-hovering", "is-clicking");
    customCursor.style.display = "none";
    return;
  }

  body.classList.add("custom-cursor-ready");
  customCursor.style.display = "";
  customCursor.style.transform = "translate3d(-50px, -50px, 0)";

  window.addEventListener("pointermove", (event) => {
    customCursor.style.transform = `translate3d(${event.clientX - 2}px, ${event.clientY - 1}px, 0)`;
    const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
    const clickableTarget = hoveredElement?.closest?.(clickableSelector);
    customCursor.classList.add("is-visible");
    customCursor.classList.toggle("is-hovering", Boolean(clickableTarget));
  });

  document.addEventListener("mouseleave", () => {
    customCursor.classList.remove("is-visible", "is-hovering", "is-clicking");
  });

  document.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(clickableSelector);
    if (!target) return;
    customCursor.classList.add("is-clicking");
  });

  document.addEventListener("pointerup", () => {
    customCursor.classList.remove("is-clicking");
  });
}

initExpressiveCursor();

function applyStaggeredReveal() {
  const staggerGroups = [
    ".stats-grid .reveal",
    ".skills-grid .reveal",
    ".project-grid .reveal",
    ".certificate-grid .reveal",
    ".timeline .reveal",
    ".achievement-grid .reveal",
    ".gallery-grid .reveal",
    ".contact-layout .reveal"
  ];

  staggerGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 490)}ms`);
    });
  });
}

function initCardSpotlight() {
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!interactiveMotionCards.length || reducedMotionQuery.matches) return;

  interactiveMotionCards.forEach((card) => {
    card.classList.add("motion-card");

    let hideTimer = null;

    const paintSpotlight = (event, opacityValue = "0.3") => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--spotlight-x", `${Math.min(rect.width, Math.max(0, x))}px`);
      card.style.setProperty("--spotlight-y", `${Math.min(rect.height, Math.max(0, y))}px`);
      card.style.setProperty("--spotlight-opacity", opacityValue);
    };

    const clearSpotlight = (delayMs = 0) => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      if (delayMs > 0) {
        hideTimer = setTimeout(() => {
          card.style.setProperty("--spotlight-opacity", "0");
        }, delayMs);
        return;
      }
      card.style.setProperty("--spotlight-opacity", "0");
    };

    if (supportsFinePointer) {
      card.addEventListener("pointerenter", (event) => {
        paintSpotlight(event, "0.3");
      });

      card.addEventListener("pointermove", (event) => {
        paintSpotlight(event, "0.3");
      });

      card.addEventListener("pointerleave", () => clearSpotlight());
      card.addEventListener("blur", () => clearSpotlight());
      return;
    }

    card.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "touch" && event.pointerType !== "pen") return;
      paintSpotlight(event, "0.45");
    }, { passive: true });

    card.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "touch" && event.pointerType !== "pen") return;
      paintSpotlight(event, "0.45");
    }, { passive: true });

    card.addEventListener("pointerup", () => clearSpotlight(140), { passive: true });
    card.addEventListener("pointercancel", () => clearSpotlight(), { passive: true });
    card.addEventListener("blur", () => clearSpotlight());
  });
}

function initGlobalSpotlight() {
  if (reducedMotionQuery.matches) return;
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const spotlight = document.createElement("div");
  spotlight.className = "site-spotlight";
  spotlight.setAttribute("aria-hidden", "true");
  body.appendChild(spotlight);
  let touchPointerId = null;
  let hideTimer = null;

  const setSpotlightPosition = (x, y) => {
    spotlight.style.setProperty("--global-spotlight-x", `${x}px`);
    spotlight.style.setProperty("--global-spotlight-y", `${y}px`);
  };

  const showSpotlight = (isTouch = false) => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    spotlight.classList.add("is-visible");
    spotlight.classList.toggle("is-touch", isTouch);
  };

  const hideSpotlight = (delayMs = 0) => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    const hide = () => {
      spotlight.classList.remove("is-visible", "is-touch");
    };
    if (delayMs > 0) {
      hideTimer = setTimeout(hide, delayMs);
      return;
    }
    hide();
  };

  setSpotlightPosition(window.innerWidth / 2, window.innerHeight / 2);

  if (supportsFinePointer) {
    window.addEventListener("pointermove", (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      setSpotlightPosition(event.clientX, event.clientY);
      showSpotlight(false);
    });

    document.addEventListener("pointerout", (event) => {
      if (event.relatedTarget) return;
      hideSpotlight();
    });

    window.addEventListener("blur", () => {
      hideSpotlight();
    });
  }

  const isTouchLikePointer = (event) => event.pointerType === "touch" || event.pointerType === "pen";

  window.addEventListener("pointerdown", (event) => {
    if (!isTouchLikePointer(event)) return;
    touchPointerId = event.pointerId;
    setSpotlightPosition(event.clientX, event.clientY);
    showSpotlight(true);
  }, { passive: true });

  window.addEventListener("pointermove", (event) => {
    if (!isTouchLikePointer(event)) return;
    if (touchPointerId !== null && event.pointerId !== touchPointerId) return;
    setSpotlightPosition(event.clientX, event.clientY);
    showSpotlight(true);
  }, { passive: true });

  const stopTouchSpotlight = (event) => {
    if (!isTouchLikePointer(event)) return;
    if (touchPointerId !== null && event.pointerId !== touchPointerId) return;
    touchPointerId = null;
    hideSpotlight(90);
  };

  window.addEventListener("pointerup", stopTouchSpotlight, { passive: true });
  window.addEventListener("pointercancel", stopTouchSpotlight, { passive: true });
}

function initHeroParallax() {
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!heroSection || !heroCopy || !heroVisual || reducedMotionQuery.matches || !supportsFinePointer) return;

  const targets = [
    { element: heroCopy, xFactor: -14, yFactor: -10 },
    { element: heroVisual, xFactor: 12, yFactor: 10 }
  ];

  const resetParallax = () => {
    targets.forEach(({ element }) => {
      element.style.transform = "";
    });
  };

  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    targets.forEach(({ element, xFactor, yFactor }) => {
      const x = offsetX * xFactor;
      const y = offsetY * yFactor;
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  });

  heroSection.addEventListener("pointerleave", resetParallax);
}

function initBackgroundParallax() {
  if (!heroBg || reducedMotionQuery.matches) return;

  let rafId = null;

  const update = () => {
    const isMobile = window.matchMedia("(max-width: 980px)").matches;
    const factor = isMobile ? 0.035 : 0.06;
    const maxShift = isMobile ? 36 : 58;
    const shift = Math.min(maxShift, window.scrollY * factor);
    heroBg.style.transform = `translate3d(0, ${-shift}px, 0)`;
    rafId = null;
  };

  const requestTick = () => {
    if (rafId !== null) return;
    rafId = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -6% 0px"
  }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.dataset.counter);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 36));

      const updateCounter = () => {
        current += step;
        if (current >= target) {
          counter.textContent = `${target}+`;
          return;
        }
        counter.textContent = `${current}+`;
        requestAnimationFrame(updateCounter);
      };

      updateCounter();
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.65 }
);

document.querySelectorAll("[data-counter]").forEach((counter) => counterObserver.observe(counter));

const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 640);
  updateScrollProgress();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateScrollProgress() {
  if (!scrollProgressBar) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

updateScrollProgress();

document.querySelectorAll("[data-project-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.projectFilter;
    document.querySelectorAll("[data-project-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".project-card").forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

document.querySelectorAll("[data-certificate-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.certificateFilter;
    document.querySelectorAll("[data-certificate-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".certificate-card").forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.issuer !== filter);
    });
  });
});

function linkLabel(url, fallback) {
  return url === "#" ? fallback : url;
}

function openModal({ title, meta, imageSrc, imageAlt, imageLabel, content, actions }) {
  modalTitle.textContent = title;
  modalMeta.textContent = meta;
  if (imageSrc) {
    modalMedia.innerHTML = `<img src="${imageSrc}" alt="${imageAlt || title}">`;
  } else {
    modalMedia.innerHTML = `<span>${imageLabel || "[Project Image]"}</span>`;
  }
  modalContent.innerHTML = content;
  modalActions.innerHTML = actions;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function renderFeatureGroups(groups = []) {
  return groups
    .map(
      (group) => `
        <section class="modal-section">
          <h3>${group.title}</h3>
          <ul class="modal-list">
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </section>
      `
    )
    .join("");
}

function renderChipSection(title, items = []) {
  if (!items.length) return "";
  return `
    <section class="modal-section">
      <h3>${title}</h3>
      <div class="badge-list">${items.map((item) => `<span>${item}</span>`).join("")}</div>
    </section>
  `;
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  body.style.overflow = "";
  delete modal.dataset.activeProjectIndex;
  modalMedia.removeAttribute("role");
  modalMedia.removeAttribute("tabindex");
  modalMedia.removeAttribute("aria-label");
}

function updateScreenshotViewer() {
  if (!screenshotImage || !screenshotSlides.length) return;
  const activeSlide = screenshotSlides[screenshotCurrentIndex];
  screenshotImage.src = activeSlide.src;
  screenshotImage.alt = activeSlide.alt || `Screenshot of ${activeSlide.title}`;
  if (screenshotEyebrow) {
    screenshotEyebrow.textContent = activeSlide.label || "Project Image";
  }
  if (screenshotTitle) {
    screenshotTitle.textContent = activeSlide.title || "Screenshot";
    if (Number.isInteger(activeSlide.projectIndex)) {
      screenshotTitle.classList.add("screenshot-title-link");
      screenshotTitle.setAttribute("role", "button");
      screenshotTitle.setAttribute("tabindex", "0");
      screenshotTitle.setAttribute("aria-label", `Open project details for ${projects[activeSlide.projectIndex]?.title || "project"}`);
      screenshotTitle.dataset.projectIndex = String(activeSlide.projectIndex);
    } else {
      screenshotTitle.classList.remove("screenshot-title-link");
      screenshotTitle.removeAttribute("role");
      screenshotTitle.removeAttribute("tabindex");
      screenshotTitle.removeAttribute("aria-label");
      delete screenshotTitle.dataset.projectIndex;
    }
  }
  if (screenshotCounter) {
    screenshotCounter.textContent = `${screenshotCurrentIndex + 1} / ${screenshotSlides.length}`;
  }
  if (screenshotPrevBtn) {
    screenshotPrevBtn.disabled = screenshotSlides.length <= 1;
  }
  if (screenshotNextBtn) {
    screenshotNextBtn.disabled = screenshotSlides.length <= 1;
  }
}

function openScreenshotModal({ src, title, label = "Project Image", slides = null, startIndex = 0 }) {
  if (!screenshotModal || !screenshotImage || (!src && !slides?.length)) return;

  if (slides?.length) {
    screenshotSlides = slides;
    screenshotCurrentIndex = Math.min(Math.max(startIndex, 0), slides.length - 1);
  } else {
    screenshotSlides = [
      {
        src,
        title,
        alt: `Screenshot of ${title}`,
        label
      }
    ];
    screenshotCurrentIndex = 0;
  }

  updateScreenshotViewer();
  screenshotModal.classList.add("show");
  screenshotModal.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
}

function moveScreenshot(step) {
  if (screenshotSlides.length <= 1) return;
  screenshotCurrentIndex = (screenshotCurrentIndex + step + screenshotSlides.length) % screenshotSlides.length;
  updateScreenshotViewer();
}

function closeScreenshotModal() {
  if (!screenshotModal) return;
  screenshotModal.classList.remove("show");
  screenshotModal.setAttribute("aria-hidden", "true");
  if (screenshotTitle) {
    screenshotTitle.classList.remove("screenshot-title-link");
    screenshotTitle.removeAttribute("role");
    screenshotTitle.removeAttribute("tabindex");
    screenshotTitle.removeAttribute("aria-label");
    delete screenshotTitle.dataset.projectIndex;
  }
  body.style.overflow = modal.classList.contains("show") || cvModal?.classList.contains("show") ? "hidden" : "";
}

function setCvStatus(message) {
  if (!cvStatus) return;
  cvStatus.textContent = message;
}

function isMobileCvMode() {
  return window.matchMedia("(max-width: 900px)").matches;
}

function loadPdfJs() {
  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }

  if (cvPdfJsPromise) {
    return cvPdfJsPromise;
  }

  cvPdfJsPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.onload = () => resolve(window.pdfjsLib);
    script.onerror = () => reject(new Error("Unable to load PDF library."));
    document.head.appendChild(script);
  });

  return cvPdfJsPromise;
}

async function loadCvForMobile(pdfSrc) {
  if (!cvView || !cvMobilePages) return;
  cvView.classList.add("is-mobile-preview");
  if (cvMobileRendered) {
    setCvStatus("");
    return;
  }

  setCvStatus("Loading CV preview...");
  cvMobilePages.innerHTML = "";

  try {
    const pdfjsLib = await loadPdfJs();
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    const documentRef = await pdfjsLib.getDocument(pdfSrc).promise;

    for (let pageNumber = 1; pageNumber <= documentRef.numPages; pageNumber += 1) {
      const page = await documentRef.getPage(pageNumber);
      const baseViewport = page.getViewport({ scale: 1 });
      const containerWidth = Math.max(320, cvMobilePages.clientWidth - 2);
      const scale = containerWidth / baseViewport.width;
      const viewport = page.getViewport({ scale });
      const deviceScale = window.devicePixelRatio || 1;

      const pageWrap = document.createElement("div");
      pageWrap.className = "cv-mobile-page";
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = Math.floor(viewport.width * deviceScale);
      canvas.height = Math.floor(viewport.height * deviceScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;
      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);

      pageWrap.appendChild(canvas);
      cvMobilePages.appendChild(pageWrap);

      await page.render({ canvasContext: context, viewport }).promise;
    }

    cvMobileRendered = true;
    setCvStatus("");
  } catch (_error) {
    setCvStatus("Unable to load in-site mobile preview. Use Open PDF.");
  }
}

function ensureCvLoaded() {
  const pdfSrc = cvView?.dataset.pdfSrc;
  if (!pdfSrc || !cvFrame || !cvView) {
    setCvStatus("Unable to load CV preview here. Use Open PDF.");
    return;
  }

  if (isMobileCvMode()) {
    cvFrame.removeAttribute("src");
    loadCvForMobile(pdfSrc);
    return;
  }

  cvView.classList.remove("is-mobile-preview");
  setCvStatus("Loading CV preview...");
  cvFrame.src = `${pdfSrc}#view=FitH`;
  cvFrame.onload = () => setCvStatus("");
  cvFrame.onerror = () => setCvStatus("Unable to load CV preview here. Use Open PDF.");
}

function openCvModal() {
  if (!cvModal) return;
  cvModal.classList.add("show");
  cvModal.setAttribute("aria-hidden", "false");
  body.style.overflow = "hidden";
  ensureCvLoaded();
}

function closeCvModal() {
  if (!cvModal) return;
  cvModal.classList.remove("show");
  cvModal.setAttribute("aria-hidden", "true");
  body.style.overflow = modal.classList.contains("show") || screenshotModal?.classList.contains("show") ? "hidden" : "";
}

async function forceDownloadCv(event) {
  event?.preventDefault();
  const pdfSrc = cvView?.dataset.pdfSrc;
  if (!pdfSrc) return;
  const fileName = "Anjon-Biswas-CV.pdf";
  const resolvedPdfUrl = new URL(pdfSrc, window.location.href).href;
  const isFileProtocol = window.location.protocol === "file:";

  const triggerDirectDownload = (url, downloadName) => {
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.download = downloadName;
    tempLink.rel = "noopener";
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();
  };

  const triggerFrameDownload = (url) => {
    if (!downloadFrame) return false;
    downloadFrame.setAttribute("src", url);
    return true;
  };

  const tryBlobDownload = async (blob, name) => {
    if (window.navigator?.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, name);
      return true;
    }

    const blobUrl = URL.createObjectURL(blob);
    triggerDirectDownload(blobUrl, name);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    return true;
  };

  const originalLabel = cvDownloadLink?.textContent;
  if (cvDownloadLink) {
    cvDownloadLink.textContent = "Downloading...";
    cvDownloadLink.setAttribute("aria-disabled", "true");
    cvDownloadLink.style.pointerEvents = "none";
  }

  if (isFileProtocol) {
    setCvStatus("Direct download is blocked on file:// preview. Run with localhost to enable one-click download.");
    if (cvDownloadLink) {
      cvDownloadLink.textContent = originalLabel || "Download CV";
      cvDownloadLink.removeAttribute("aria-disabled");
      cvDownloadLink.style.pointerEvents = "";
    }
    return;
  }

  try {
    const response = await fetch(resolvedPdfUrl, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Download request failed");
    }

    const fileBlob = await response.blob();
    await tryBlobDownload(fileBlob, fileName);
    setCvStatus("CV download started.");
  } catch (_error) {
    try {
      const xhrBlob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", resolvedPdfUrl, true);
        xhr.responseType = "blob";
        xhr.onload = () => (xhr.status >= 200 && xhr.status < 300 ? resolve(xhr.response) : reject(new Error("XHR failed")));
        xhr.onerror = () => reject(new Error("XHR network error"));
        xhr.send();
      });

      await tryBlobDownload(xhrBlob, fileName);
      setCvStatus("CV download started.");
    } catch (_xhrError) {
      const fallbackLink = document.createElement("a");
      fallbackLink.href = resolvedPdfUrl;
      fallbackLink.download = fileName;
      fallbackLink.target = "downloadFrame";
      fallbackLink.rel = "noopener";
      fallbackLink.style.display = "none";
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      fallbackLink.remove();
      triggerFrameDownload(resolvedPdfUrl);
      setCvStatus("Browser blocked direct download. Try from localhost/hosting for reliable one-click download.");
    }
  } finally {
    if (cvDownloadLink) {
      cvDownloadLink.textContent = originalLabel || "Download CV";
      cvDownloadLink.removeAttribute("aria-disabled");
      cvDownloadLink.style.pointerEvents = "";
    }
  }
}

function openProjectDetails(index) {
  const project = projects[index];
  if (!project) return;

  openModal({
    title: project.title,
    meta: `${project.year} - ${project.type} - ${project.status}`,
    imageSrc: project.image,
    imageAlt: `Screenshot of ${project.title}`,
    content: `
      <section class="modal-section">
        <h3>Overview</h3>
        <p>${project.overview || project.description}</p>
      </section>
      <section class="modal-section">
        <h3>Tech Stack</h3>
        <div class="badge-list">${project.tech.map((item) => `<span>${item}</span>`).join("")}</div>
      </section>
      ${renderChipSection("Components Used", project.components)}
      ${renderFeatureGroups(project.featureGroups)}
      <section class="modal-section">
        <h3>Purpose</h3>
        <p>${project.purpose}</p>
      </section>
      <section class="modal-section">
        <h3>Learning Outcomes</h3>
        <ul class="modal-list">
          ${project.learning.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    `,
    actions: `
      <a href="${project.github}" ${project.github === "#" ? "" : 'target="_blank" rel="noreferrer"'}>GitHub ${project.github === "#" ? "[Add Later]" : ""}</a>
    `
  });

  modal.dataset.activeProjectIndex = String(index);
  modalMedia.setAttribute("role", "button");
  modalMedia.setAttribute("tabindex", "0");
  modalMedia.setAttribute("aria-label", `Open large screenshot for ${project.title}`);
}

const projectCards = document.querySelectorAll(".project-card");
const projectSlides = projects.map((project, index) => ({
  src: project.image,
  title: `${project.title}`,
  alt: `Screenshot of ${project.title}`,
  label: "Project Image",
  projectIndex: index
}));

projectCards.forEach((card, index) => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open details for ${projects[index]?.title || "project"}`);

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    openProjectDetails(index);
  });

  card.addEventListener("keydown", (event) => {
    if (event.target.closest("a, button")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openProjectDetails(index);
  });
});

document.querySelectorAll(".project-details").forEach((button, index) => {
  button.addEventListener("click", () => openProjectDetails(index));
});

document.querySelectorAll(".project-screenshot").forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const project = projects[index];
    openScreenshotModal({
      src: project?.image,
      title: `${project?.title || "Project"}`,
      label: "Project Image"
    });
  });
});

const openProjectModalImagePreview = () => {
  const activeProjectIndex = Number(modal.dataset.activeProjectIndex);
  if (Number.isNaN(activeProjectIndex) || !projects[activeProjectIndex]) return;
  openScreenshotModal({
    slides: projectSlides,
    startIndex: activeProjectIndex
  });
};

modalMedia.addEventListener("click", () => {
  if (!modal.classList.contains("show")) return;
  openProjectModalImagePreview();
});

modalMedia.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  if (!modal.classList.contains("show")) return;
  openProjectModalImagePreview();
});

const openProjectDetailsFromScreenshotTitle = () => {
  const projectIndex = Number(screenshotTitle?.dataset.projectIndex);
  if (Number.isNaN(projectIndex) || !projects[projectIndex]) return;
  closeScreenshotModal();
  openProjectDetails(projectIndex);
};

screenshotTitle?.addEventListener("click", () => {
  if (!screenshotModal.classList.contains("show")) return;
  openProjectDetailsFromScreenshotTitle();
});

screenshotTitle?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  if (!screenshotModal.classList.contains("show")) return;
  openProjectDetailsFromScreenshotTitle();
});

const certificateCards = document.querySelectorAll(".certificate-card");
const certificateSlides = certificates.map((certificate) => ({
  src: certificate.image,
  title: `${certificate.title} - ${certificate.issuer}`.trim(),
  alt: `${certificate.title} certificate`,
  label: "Certificate Preview"
}));

certificateCards.forEach((card, index) => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open certificate preview for ${certificates[index]?.title || "certificate"}`);

  const openCertificatePreview = () => {
    openScreenshotModal({
      slides: certificateSlides,
      startIndex: index
    });
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    openCertificatePreview();
  });

  card.addEventListener("keydown", (event) => {
    if (event.target.closest("a, button")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openCertificatePreview();
  });
});

const galleryImageItems = Array.from(document.querySelectorAll(".gallery-item img"));
const gallerySlides = galleryImageItems.map((image) => ({
  src: image.getAttribute("src"),
  title: image.getAttribute("alt") || "Gallery Image",
  alt: image.getAttribute("alt") || "Gallery image preview",
  label: "Gallery Preview"
}));

galleryImageItems.forEach((image, index) => {
  const card = image.closest(".gallery-item");
  if (!card) return;
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open gallery image ${index + 1}`);

  const openGalleryPreview = () => {
    openScreenshotModal({
      slides: gallerySlides,
      startIndex: index
    });
  };

  card.addEventListener("click", (event) => {
    if (!event.target.closest("img")) return;
    openGalleryPreview();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openGalleryPreview();
  });
});

screenshotPrevBtn?.addEventListener("click", () => moveScreenshot(-1));
screenshotNextBtn?.addEventListener("click", () => moveScreenshot(1));

modal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-modal")) {
    closeModal();
  }
});

screenshotModal?.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-screenshot-modal")) {
    closeScreenshotModal();
  }
});

cvModal?.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-cv-modal")) {
    closeCvModal();
  }
});

viewCvBtn?.addEventListener("click", () => {
  openCvModal();
});

cvDownloadLink?.addEventListener("click", forceDownloadCv);

window.addEventListener("resize", () => {
  syncHeroActionsPlacement();
  if (!cvModal?.classList.contains("show")) return;
  ensureCvLoaded();
});

window.addEventListener("keydown", (event) => {
  if (screenshotModal?.classList.contains("show")) {
    if (event.key === "ArrowLeft") {
      moveScreenshot(-1);
      return;
    }
    if (event.key === "ArrowRight") {
      moveScreenshot(1);
      return;
    }
  }
  if (event.key !== "Escape") return;
  if (cvModal?.classList.contains("show")) {
    closeCvModal();
    return;
  }
  if (screenshotModal?.classList.contains("show")) {
    closeScreenshotModal();
    return;
  }
  if (modal.classList.contains("show")) {
    closeModal();
  }
});

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const submitButton = contactForm?.querySelector('button[type="submit"]');

const EMAILJS_SERVICE_ID = "service_gn6vq0f";
const EMAILJS_TEMPLATE_ID = "template_rtpzt7p";
const EMAILJS_PUBLIC_KEY = "xFw-B5R76vr3HSqtl";

if (window.emailjs) {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendContactMessage();
});

async function sendContactMessage() {
  if (!contactForm || !formStatus) return;

  let isValid = true;
  const fields = contactForm.querySelectorAll("input, textarea");

  fields.forEach((field) => {
    const row = field.closest(".form-row");
    const invalidEmail = field.type === "email" && field.value.trim() && !field.validity.valid;
    const invalid = !field.value.trim() || invalidEmail;
    row.classList.toggle("is-invalid", invalid);
    if (invalid) isValid = false;
  });

  if (!isValid) {
    formStatus.textContent = "Please complete all fields with a valid email address.";
    formStatus.className = "form-status error";
    return;
  }

  if (!window.emailjs) {
    formStatus.textContent = "Email service is not available right now.";
    formStatus.className = "form-status error";
    return;
  }

  if (EMAILJS_PUBLIC_KEY === "YOUR_EMAILJS_PUBLIC_KEY") {
    formStatus.textContent = "Set your EmailJS Public Key in script.js to activate sending.";
    formStatus.className = "form-status error";
    return;
  }

  const payload = {
    from_name: contactForm.querySelector("#name").value.trim(),
    from_email: contactForm.querySelector("#email").value.trim(),
    subject: contactForm.querySelector("#subject").value.trim(),
    message: contactForm.querySelector("#message").value.trim(),
    to_name: "Anjon Biswas"
  };

  submitButton?.setAttribute("disabled", "disabled");
  submitButton?.setAttribute("aria-busy", "true");
  formStatus.textContent = "Sending message...";
  formStatus.className = "form-status";

  try {
    await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload);
    formStatus.textContent = "Message sent successfully.";
    formStatus.className = "form-status success";
    contactForm.reset();
  } catch (_error) {
    formStatus.textContent = "Failed to send message. Please try again.";
    formStatus.className = "form-status error";
  } finally {
    submitButton?.removeAttribute("disabled");
    submitButton?.removeAttribute("aria-busy");
  }
}

contactForm.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.closest(".form-row").classList.remove("is-invalid");
    formStatus.textContent = "";
    formStatus.className = "form-status";
  });
});

console.log("Portfolio ready:", {
  owner: "Anjon Biswas",
  github: linkLabel("https://github.com/AnjonBiswas", "[Add Later]")
});
