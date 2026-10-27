/**
 * ============================================================================
 * 4CONTROLLERS // TEAM PORTFOLIO
 * Application Logic, Cinematic Transitions, 3D Tilt & Audio Engine
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. TEAM MEMBERS DATA STORE
// ----------------------------------------------------------------------------
const teamData = {
  karthik: {
    key: "karthik",
    index: "01",
    name: "Karthik M S",
    role: "ECE Student",
    squadRole: "Hardware & AI Lead",
    degree: "B.Tech Electronics & Comm.",
    spec: "Vibecoding & Antigravity Systems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    githubHandle: "mskarthik260308-art",
    githubUrl: "https://github.com/mskarthik260308-art",
    bio: "ECE student passionate about high-speed prototype synthesis, vibecoding, and pushing embedded hardware into uncharted territory. Specializes in low-latency microcontrollers, ambient sensory feedback, and next-generation developer tooling like Antigravity.",
    
    // Core User-Specified Skills
    skills: [
      { name: "Vibecoding", level: 95, featured: true },
      { name: "Antigravity", level: 92, featured: true },
      { name: "Embedded Systems", level: 88, featured: false },
      { name: "IoT Architectures", level: 85, featured: false },
      { name: "C / C++ Embedded", level: 86, featured: false },
      { name: "Circuit Design & Sensors", level: 84, featured: false }
    ],

    // User-Specified Projects & Achievements
    projects: [
      {
        badge: "HEALTHCARE IOT",
        title: "Medbellcare",
        desc: "An intelligent healthcare assistance and patient adherence device integrating precise weight sensing, automated dose alarms, and cloud telemetry for remote caregivers.",
        tech: ["ESP32", "C++", "Sensors", "IoT Cloud", "WebSockets"],
        metric: "±0.1g DOSE ACCURACY",
        link: "https://github.com/mskarthik260308-art"
      },
      {
        badge: "HACKATHON FINALIST",
        title: "Odyssey Hackathon",
        desc: "Designed and engineered an end-to-end telemetry system under high-intensity 32-hour hackathon conditions, securing top finalist showcase placement with live hardware demos.",
        tech: ["Hardware Prototyping", "Firmware", "Rapid Coding", "Stage Pitch"],
        metric: "TOP FINALIST HONORS",
        link: "https://github.com/mskarthik260308-art"
      }
    ],

    timeline: [
      {
        year: "2026 // CURRENT",
        title: "Odyssey Hackathon Finalist",
        desc: "Spearheaded hardware-software pipeline and autonomous telemetry integration during the 32-hour sprint."
      },
      {
        year: "2025 // MILESTONE",
        title: "Medbellcare Prototype Launch",
        desc: "Developed physical sensor array and automated adherence notifications for elderly home care."
      },
      {
        year: "2024 // INITIATION",
        title: "ECE Foundations & Vibecoding",
        desc: "Mastered rapid coding paradigms, microcontroller registers, and Antigravity workflow acceleration."
      }
    ]
  },

  emil: {
    key: "emil",
    index: "02",
    name: "Emil",
    role: "First Year ECE Student | Game Dev & Graphics Enthusiast",
    squadRole: "Game Dev & Rapid Prototype Lead",
    degree: "First Year B.Tech ECE",
    spec: "Game Development & Python Engineering",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    githubHandle: "Emil7x",
    githubUrl: "https://github.com/Emil7x",
    bio: "First year ECE student with an intense drive for game engines, real-time graphics rendering, and lightning-fast software builds. Thrives in high-stakes hackathons, translating game physics and rapid code into functional prototypes.",
    
    // Core User-Specified Skills
    skills: [
      { name: "Python", level: 94, featured: true },
      { name: "SQL", level: 86, featured: true },
      { name: "Rapid Coding", level: 96, featured: true },
      { name: "Game Development", level: 90, featured: true },
      { name: "Graphics Programming", level: 85, featured: false },
      { name: "Arduino Interfacing", level: 82, featured: false }
    ],

    // User-Specified Projects & Achievements
    projects: [
      {
        badge: "EMBEDDED ROBOTICS",
        title: "Arduino RC Car",
        desc: "Engineered an agile remote-controlled vehicular platform driven by Arduino, dual motor controllers, RF/Bluetooth telemetry modules, and custom obstacle navigation firmware.",
        tech: ["Arduino", "C++", "Motor Drivers", "Bluetooth RF", "Sensors"],
        metric: "LOW-LATENCY RF CONTROL",
        link: "https://github.com/Emil7x"
      },
      {
        badge: "COMPETITIVE BUILDS",
        title: "Multiple Hackathons",
        desc: "Competed across multiple hackathon sprints delivering ultra-rapid prototypes, game mechanics, high-throughput Python backends, and responsive user experiences.",
        tech: ["Python", "SQL", "Game Engines", "Rapid Sprints", "Git"],
        metric: "RAPID 24H DELIVERY",
        link: "https://github.com/Emil7x"
      }
    ],

    timeline: [
      {
        year: "2026 // CURRENT",
        title: "Hackathon Sprint Veteran",
        desc: "Contributed rapid algorithmic logic, game dev mechanics, and full-stack integrations across multi-disciplinary builds."
      },
      {
        year: "2025 // ROBOTICS",
        title: "Arduino RC Car Build",
        desc: "Fabricated chassis, wired H-bridges, tuned PWM motor curves, and coded mobile Bluetooth transmitter interface."
      },
      {
        year: "2024 // INITIATION",
        title: "Game Engines & Python Mastery",
        desc: "Built 2D/3D physics mechanics, relational SQL architectures, and real-time graphics simulations."
      }
    ]
  },

  snigdhaa: {
    key: "snigdhaa",
    index: "03",
    name: "Snigdhaa P",
    role: "CSE Student | Data Science Enthusiast",
    squadRole: "Data Science & Analytics Lead",
    degree: "B.Tech Computer Science",
    spec: "Data Science & Predictive Analytics",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    githubHandle: "SnigdhaaP",
    githubUrl: "https://github.com/SnigdhaaP",
    bio: "Computer Science student driven by statistical models, actionable data narratives, and exploratory analytics. Blends clean software architecture with deep data comprehension to design smart tools that uncover hidden patterns.",
    
    // Core User-Specified Skills
    skills: [
      { name: "Data Science", level: 93, featured: true },
      { name: "Python / Analytics", level: 95, featured: true },
      { name: "Machine Learning", level: 86, featured: false },
      { name: "Data Visualization", level: 90, featured: false },
      { name: "SQL & Data Modeling", level: 88, featured: false },
      { name: "Statistical Analysis", level: 85, featured: false }
    ],

    // User-Specified Projects & Achievements
    projects: [
      {
        badge: "FULL-STACK ANALYTICS",
        title: "BookMark App",
        desc: "A modern reading tracker and knowledge curation web platform featuring reading trend analytics, dynamic book categorization, custom review metrics, and seamless personal library management.",
        tech: ["Python", "Flask", "JavaScript", "SQL", "Chart.js"],
        metric: "100% PERSONALIZED INSIGHTS",
        link: "https://github.com/SnigdhaaP"
      },
      {
        badge: "DATA PIPELINE",
        title: "Data Science & Exploratory Analytics",
        desc: "Comprehensive predictive modeling suites and exploratory data pipelines extracting insights, automating data cleaning, and generating publication-ready visual charts.",
        tech: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "Jupyter"],
        metric: "HIGH-ACCURACY PREDICTIONS",
        link: "https://github.com/SnigdhaaP"
      }
    ],

    timeline: [
      {
        year: "2026 // CURRENT",
        title: "BookMark App Deployment",
        desc: "Designed and launched complete book cataloging application with analytical reading velocity dashboards."
      },
      {
        year: "2025 // MILESTONE",
        title: "Data Analytics Specialization",
        desc: "Authored data processing pipelines, clustering models, and visual dashboard metrics for large datasets."
      },
      {
        year: "2024 // INITIATION",
        title: "Computer Science Foundations",
        desc: "Engineered core data structures, algorithms, and SQL database relational schemas."
      }
    ]
  },

  jeswin: {
    key: "jeswin",
    index: "04",
    name: "Jeswin",
    role: "Electronics Engineer | Hardware Meets Software",
    squadRole: "Systems & Embedded Bridge Lead",
    degree: "B.Tech Electronics Engineering",
    spec: "Hardware-Software Integration & IoT",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    githubHandle: "jeswinkmathew-creator5",
    githubUrl: "https://github.com/jeswinkmathew-creator5",
    bio: "Electronics engineer operating at the convergence of silicon and software. Enjoys wiring physical sensors, microcontrollers, and low-level C/C++ firmware to responsive JavaScript telemetry dashboards and cloud alerts.",
    
    // Core User-Specified Skills
    skills: [
      { name: "C / C++", level: 92, featured: true },
      { name: "JavaScript", level: 88, featured: true },
      { name: "Arduino", level: 94, featured: true },
      { name: "Hardware-Software Integration", level: 91, featured: true },
      { name: "Microcontroller Firmware", level: 87, featured: false },
      { name: "IoT Networking", level: 85, featured: false }
    ],

    // User-Specified Projects & Achievements
    projects: [
      {
        badge: "SMART AUTOMATION",
        title: "Home Monitoring System",
        desc: "An interconnected smart home telemetry ecosystem combining ambient temperature, gas detection, intrusion alarms, and Arduino microcontrollers connected to a live web surveillance dashboard.",
        tech: ["Arduino", "C++", "JavaScript", "Sensors", "WebSockets"],
        metric: "24/7 LIVE SENSOR STREAM",
        link: "https://github.com/jeswinkmathew-creator5"
      },
      {
        badge: "HACKATHONS & PROTOTYPES",
        title: "Multiple Hackathons",
        desc: "Demonstrated proven track record in fast-paced hackathons, bridging bare-metal hardware circuits with intuitive software controllers and cloud relays.",
        tech: ["C / C++", "Arduino", "JavaScript", "REST APIs", "Rapid Prototyping"],
        metric: "CROSS-DISCIPLINE SYNERGY",
        link: "https://github.com/jeswinkmathew-creator5"
      }
    ],

    timeline: [
      {
        year: "2026 // CURRENT",
        title: "Multiple Hackathon Prototypes",
        desc: "Built working proof-of-concept hardware devices wired to web dashboard relays within sprint constraints."
      },
      {
        year: "2025 // IOT HUB",
        title: "Home Monitoring System Launch",
        desc: "Engineered sensor nodes, calibration routines, and real-time JavaScript status console."
      },
      {
        year: "2024 // INITIATION",
        title: "Electronics Engineering Core",
        desc: "Deep-dive into digital logic, PCB layout analysis, Arduino firmware, and full-stack JavaScript."
      }
    ]
  }
};

// ----------------------------------------------------------------------------
// 2. AUDIO SYNTHESIZER (WEB AUDIO API)
// ----------------------------------------------------------------------------
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem("portfolio_sound") === "true";
    this.updateIcon();
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }

  playTone(freq, type, duration, gainVal = 0.04) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playHover() {
    this.playTone(840, "sine", 0.05, 0.02);
  }

  playOpen() {
    this.playTone(720, "triangle", 0.1, 0.04);
    setTimeout(() => this.playTone(1080, "sine", 0.15, 0.05), 50);
  }

  playClose() {
    this.playTone(900, "sine", 0.08, 0.04);
    setTimeout(() => this.playTone(600, "triangle", 0.12, 0.03), 50);
  }

  playSwitch() {
    this.playTone(960, "sine", 0.08, 0.03);
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("portfolio_sound", this.enabled);
    this.updateIcon();
    if (this.enabled) {
      this.playOpen();
      showToast("Audio feedback enabled");
    } else {
      showToast("Audio feedback muted");
    }
  }

  updateIcon() {
    const icon = document.getElementById("soundIcon");
    if (icon) {
      icon.textContent = this.enabled ? "🔊" : "🔇";
      icon.parentElement.title = this.enabled ? "Sound Feedback: Enabled (Click to mute)" : "Sound Feedback: Muted (Click to enable)";
    }
  }
}

const audio = new AudioEngine();

// ----------------------------------------------------------------------------
// 3. BACKGROUND CANVAS (CONSTELLATION & FLOATING PARTICLES)
// ----------------------------------------------------------------------------
function initBgCanvas() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 70;
  let mouse = { x: null, y: null, maxDist: 120 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.6 + 0.8;
      this.color = Math.random() > 0.6 ? "#00f0ff" : Math.random() > 0.5 ? "#9d4edd" : "#ffffff";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.maxDist) {
          const force = (mouse.maxDist - dist) / mouse.maxDist;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 100) {
          const alpha = (1 - dist / 100) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }

  render();
}

// ----------------------------------------------------------------------------
// 4. 3D TILT EFFECT ON CARDS
// ----------------------------------------------------------------------------
function initCardTilt() {
  const cards = document.querySelectorAll(".member-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      audio.playHover();
    });

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;

      const glow = card.querySelector(".card-glow");
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.16), transparent 70%)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)";
    });
  });
}

// ----------------------------------------------------------------------------
// 5. CINEMATIC VIEW TRANSITION CONTROLLER
// ----------------------------------------------------------------------------
let currentMember = null;

function openPortfolio(memberKey) {
  const data = teamData[memberKey];
  if (!data) return;

  currentMember = memberKey;
  audio.playOpen();

  const veil = document.getElementById("transitionVeil");
  const hubView = document.getElementById("teamHubView");
  const cvView = document.getElementById("portfolioView");

  if (!hubView || !cvView) return;

  // 1. Activate transition veil
  if (veil) {
    veil.classList.add("active");
  }

  // 2. Render dynamic content
  renderMemberContent(data);

  // 3. Swap views with smooth timing
  setTimeout(() => {
    hubView.classList.remove("active");
    cvView.classList.add("active");

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });

    // Update URL hash for sharing
    window.history.pushState(null, "", `#${memberKey}`);

    // Drop veil smoothly
    if (veil) {
      setTimeout(() => {
        veil.classList.remove("active");
        animateSkillBars();
      }, 100);
    }
  }, 250);
}

function closePortfolio() {
  if (!currentMember) {
    // If already in hub view, just scroll to team grid
    const target = document.getElementById("team-grid");
    if (target) target.scrollIntoView({ behavior: "smooth" });
    return;
  }

  audio.playClose();
  currentMember = null;

  const veil = document.getElementById("transitionVeil");
  const hubView = document.getElementById("teamHubView");
  const cvView = document.getElementById("portfolioView");

  if (veil) {
    veil.classList.add("active");
  }

  setTimeout(() => {
    if (cvView) cvView.classList.remove("active");
    if (hubView) hubView.classList.add("active");

    // Clear hash
    window.history.pushState(null, "", window.location.pathname);

    // Scroll smoothly to the 4-card grid
    const grid = document.getElementById("team-grid");
    if (grid) {
      grid.scrollIntoView({ behavior: "instant" });
    }

    if (veil) {
      setTimeout(() => {
        veil.classList.remove("active");
      }, 100);
    }
  }, 250);
}

function switchMember(memberKey) {
  if (currentMember === memberKey) return;
  const data = teamData[memberKey];
  if (!data) return;

  currentMember = memberKey;
  audio.playSwitch();

  const cvContainer = document.querySelector(".cv-container");
  if (cvContainer) {
    cvContainer.style.opacity = "0";
    cvContainer.style.transform = "translateY(15px)";
    cvContainer.style.transition = "opacity 0.25s ease, transform 0.25s ease";
  }

  setTimeout(() => {
    renderMemberContent(data);
    window.history.pushState(null, "", `#${memberKey}`);

    if (cvContainer) {
      cvContainer.style.opacity = "1";
      cvContainer.style.transform = "translateY(0)";
      animateSkillBars();
    }
  }, 250);
}

// ----------------------------------------------------------------------------
// 6. DYNAMIC CONTENT RENDERING (CV STYLE)
// ----------------------------------------------------------------------------
function renderMemberContent(data) {
  // 1. Sidebar Dossier Details
  const avatar = document.getElementById("cvAvatarImg");
  if (avatar) {
    avatar.src = data.avatar;
    avatar.alt = data.name;
  }

  const nameEl = document.getElementById("cvName");
  if (nameEl) nameEl.textContent = data.name;

  const roleEl = document.getElementById("cvRole");
  if (roleEl) roleEl.textContent = data.role;

  const bioEl = document.getElementById("cvBio");
  if (bioEl) bioEl.textContent = data.bio;

  const degreeEl = document.getElementById("cvDegree");
  if (degreeEl) degreeEl.textContent = data.degree;

  const specEl = document.getElementById("cvSpec");
  if (specEl) specEl.textContent = data.spec;

  const squadRoleEl = document.getElementById("cvSquadRole");
  if (squadRoleEl) squadRoleEl.textContent = data.squadRole;

  // GitHub Profile Card Link & Handles
  const ghBtn = document.getElementById("cvGithubBtn");
  if (ghBtn) ghBtn.href = data.githubUrl;

  const ghNav = document.getElementById("cvGithubLink");
  if (ghNav) ghNav.href = data.githubUrl;

  const ghHandle = document.getElementById("cvGithubHandle");
  if (ghHandle) ghHandle.textContent = `@${data.githubHandle}`;

  // 2. Technical Skills Chips
  const skillsWrap = document.getElementById("cvSkillsChips");
  if (skillsWrap) {
    skillsWrap.innerHTML = data.skills
      .map(
        (s) =>
          `<span class="cv-skill-chip ${s.featured ? "featured" : ""}">
            ${s.featured ? "★ " : ""}${escapeHtml(s.name)}
          </span>`
      )
      .join("");
  }

  // 3. Skill Progress Bars
  const skillBars = document.getElementById("cvSkillBars");
  if (skillBars) {
    skillBars.innerHTML = data.skills
      .map(
        (s) => `
        <div class="skill-bar-item">
          <div class="skill-bar-header">
            <span class="skill-bar-name">${escapeHtml(s.name)}</span>
            <span class="skill-bar-pct">${s.level}%</span>
          </div>
          <div class="skill-progress-track">
            <div class="skill-progress-fill" data-level="${s.level}" style="width: 0%;"></div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // 4. Projects & Achievements Showcase
  const projectsContainer = document.getElementById("cvProjectsContainer");
  if (projectsContainer) {
    projectsContainer.innerHTML = data.projects
      .map(
        (p) => `
        <article class="project-cv-card">
          <div class="project-cv-top">
            <span class="project-badge">${escapeHtml(p.badge)}</span>
          </div>
          <h4 class="project-cv-title">${escapeHtml(p.title)}</h4>
          <p class="project-cv-desc">${escapeHtml(p.desc)}</p>
          <div class="project-tech-tags">
            ${p.tech.map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}
          </div>
          <div class="project-cv-footer">
            <span class="project-metric">⚡ ${escapeHtml(p.metric)}</span>
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
              View on GitHub ↗
            </a>
          </div>
        </article>
      `
      )
      .join("");
  }

  // 5. Timeline Milestones
  const timelineContainer = document.getElementById("cvTimelineContainer");
  if (timelineContainer) {
    timelineContainer.innerHTML = data.timeline
      .map(
        (t) => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-year">${escapeHtml(t.year)}</div>
            <h4 class="timeline-title">${escapeHtml(t.title)}</h4>
            <p class="timeline-desc">${escapeHtml(t.desc)}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // 6. Update Active State on Switch Tabs
  document.querySelectorAll(".switch-pill").forEach((pill) => {
    pill.classList.remove("active");
  });
  const activePill = document.getElementById(`tab-${data.key}`);
  if (activePill) {
    activePill.classList.add("active");
  }
}

function animateSkillBars() {
  const bars = document.querySelectorAll(".skill-progress-fill");
  bars.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
      bar.style.width = `${level}%`;
    }, 150);
  });
}

// ----------------------------------------------------------------------------
// 7. INTERACTION HELPERS (TOAST, COPY LINK, SCROLL TO CONTACT)
// ----------------------------------------------------------------------------
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const toastText = document.getElementById("toastMessage");
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add("show");

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function copyPortfolioLink() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Portfolio link copied to clipboard!");
    });
  } else {
    showToast("Link: " + url);
  }
}

function scrollToContact() {
  closePortfolio();
  setTimeout(() => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value || "Colleague";
  const target = document.getElementById("contactTarget")?.value || "Squad";

  showToast(`Transmission received from ${name}! We will get back shortly.`);
  e.target.reset();
}

// Helper: Escape HTML string
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ----------------------------------------------------------------------------
// 8. KEYBOARD SHORTCUTS & HASH ROUTING INITIALIZATION
// ----------------------------------------------------------------------------
document.addEventListener("keydown", (e) => {
  // If user is typing in form, don't hijack keys
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    return;
  }

  // Escape to close portfolio
  if (e.key === "Escape") {
    if (currentMember) closePortfolio();
  }

  // 1-4 for quick member switching
  if (e.key === "1") {
    if (!currentMember) openPortfolio("karthik");
    else switchMember("karthik");
  } else if (e.key === "2") {
    if (!currentMember) openPortfolio("emil");
    else switchMember("emil");
  } else if (e.key === "3") {
    if (!currentMember) openPortfolio("snigdhaa");
    else switchMember("snigdhaa");
  } else if (e.key === "4") {
    if (!currentMember) openPortfolio("jeswin");
    else switchMember("jeswin");
  }
});

// Sound Toggle Button
document.addEventListener("DOMContentLoaded", () => {
  const soundBtn = document.getElementById("soundToggleBtn");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      audio.toggle();
    });
  }

  // Initialize Canvas & 3D Tilt
  initBgCanvas();
  initCardTilt();

  // Check URL hash on load
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (teamData[hash]) {
    openPortfolio(hash);
  }
});
