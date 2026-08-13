:root {
  --accent: #ff5f56;
  --accent-2: #ff9f43;
  --text: #f5f5f5;
  --muted: #a4a4a4;
  --bg: #080808;
  --surface: #101010;
  --surface-2: #161616;
  --border: rgba(255, 255, 255, 0.1);
}

body.light {
  --text: #111;
  --muted: #626262;
  --bg: #f4f1eb;
  --surface: #ffffff;
  --surface-2: #ebe8e1;
  --border: rgba(0, 0, 0, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.app {
  min-height: 100vh;
  overflow: hidden;
}

#scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  z-index: 9999;
}

/* NAVBAR */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 76px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.08em;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: 0.25s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  gap: 0.6rem;
}

.theme-btn,
.menu-btn {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
}

.menu-btn {
  display: none;
}

/* COMMON */

.section {
  width: min(1180px, 90%);
  margin: auto;
  padding: 110px 0;
}

.section-heading {
  display: flex;
  gap: 18px;
  align-items: baseline;
  margin-bottom: 55px;
}

.section-heading span {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
}

.section-heading h2 {
  font-size: clamp(2rem, 4vw, 4rem);
  margin: 0;
  letter-spacing: -0.06em;
}

.eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  font-weight: 800;
  color: var(--accent);
}

/* HERO */

.hero {
  min-height: 100vh;
  padding-top: 150px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 60px;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.07;
  filter: blur(80px);
  right: -250px;
  top: 100px;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: clamp(4rem, 10vw, 9.5rem);
  line-height: 0.8;
  letter-spacing: -0.1em;
  margin: 25px 0 40px;
  font-weight: 950;
}

.hero h1 span {
  color: transparent;
  -webkit-text-stroke: 1px var(--text);
}

.hero-line {
  display: flex;
  gap: 20px;
  max-width: 650px;
  align-items: flex-start;
}

.hero-line span {
  width: 50px;
  height: 2px;
  background: var(--accent);
  margin-top: 10px;
  flex-shrink: 0;
}

.hero-line p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 1rem;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  margin: 35px 0;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid var(--border);
  font-weight: 800;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: 0.25s ease;
}

.btn.primary {
  background: var(--text);
  color: var(--bg);
}

.btn.primary:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-3px);
}

.btn.secondary:hover {
  border-color: var(--text);
  transform: translateY(-3px);
}

.btn.large {
  min-height: 58px;
  padding: 0 30px;
}

.social-links {
  display: flex;
  gap: 25px;
  color: var(--muted);
  font-size: 0.8rem;
}

.social-links a:hover {
  color: var(--accent);
}

/* HERO IMAGE */

.hero-visual {
  position: relative;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-frame {
  width: min(360px, 80vw);
  height: 470px;
  border: 1px solid var(--border);
  padding: 12px;
  transform: rotate(3deg);
  position: relative;
  background: var(--surface);
}

.profile-frame::before {
  content: "";
  position: absolute;
  inset: -12px;
  border: 1px solid var(--accent);
  opacity: 0.4;
  transform: rotate(-6deg);
}

.profile-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(15%);
}

.floating-card {
  position: absolute;
  padding: 15px 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  animation: float 4s ease-in-out infinite;
}

.floating-card span {
  display: block;
  color: var(--accent);
  font-size: 0.65rem;
  margin-bottom: 5px;
}

.floating-card strong {
  font-size: 0.8rem;
}

.card-one {
  left: 0;
  top: 60px;
}

.card-two {
  right: 0;
  top: 190px;
  animation-delay: 0.8s;
}

.card-three {
  left: 30px;
  bottom: 50px;
  animation-delay: 1.4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

/* ABOUT */

.about-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 100px;
}

.about-intro h3 {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1;
  letter-spacing: -0.06em;
  margin: 0;
}

.about-intro h3 span {
  color: var(--accent);
}

.about-text {
  color: var(--muted);
  line-height: 1.9;
}

.about-text p {
  margin-bottom: 25px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 70px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stats div {
  padding: 30px 20px;
  border-right: 1px solid var(--border);
}

.stats div:last-child {
  border-right: none;
}

.stats strong {
  display: block;
  font-size: 2rem;
  letter-spacing: -0.06em;
}

.stats span {
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
}

/* SKILLS */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.skill-group {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 28px;
  transition: 0.3s ease;
}

.skill-group:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.skill-group h3 {
  margin: 0 0 20px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.skill-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.skill-tags span,
.tech-list span {
  border: 1px solid var(--border);
  padding: 7px 10px;
  color: var(--muted);
  font-size: 0.7rem;
}

/* PROJECTS */

.projects-top {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-end;
  margin-bottom: 35px;
}

.projects-top > p {
  color: var(--muted);
  max-width: 500px;
  line-height: 1.7;
}

.filters {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
}

.filters button {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--muted);
  padding: 9px 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.65rem;
  font-weight: 800;
}

.filters button.active,
.filters button:hover {
  background: var(--text);
  color: var(--bg);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.project-card {
  min-height: 400px;
  padding: 30px;
  background: var(--surface);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  transition: 0.35s ease;
}

.project-card:hover {
  transform: translateY(-7px);
  border-color: var(--accent);
}

.project-card.featured {
  grid-column: span 2;
  min-height: 450px;
}

.project-number {
  position: absolute;
  right: 25px;
  top: 20px;
  font-size: 4rem;
  font-weight: 950;
  color: var(--border);
}

.project-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
}

.project-content h3 {
  max-width: 650px;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  letter-spacing: -0.05em;
  margin: 60px 0 15px;
}

.project-content p {
  color: var(--muted);
  line-height: 1.7;
  max-width: 700px;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 30px;
}

.project-links {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.project-links a {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
}

.project-links a:hover {
  color: var(--accent);
}

/* GITHUB */

.github-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 45px;
  background: var(--surface);
  border: 1px solid var(--border);
}

.github-box h3 {
  font-size: 2rem;
  margin: 10px 0;
}

.github-box p:not(.eyebrow) {
  color: var(--muted);
}

.repo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 18px;
}

.repo-card {
  padding: 25px;
  border: 1px solid var(--border);
  background: var(--surface);
  transition: 0.3s ease;
}

.repo-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.repo-card span {
  font-size: 0.65rem;
  color: var(--accent);
  text-transform: uppercase;
}

.repo-card h3 {
  margin: 20px 0 10px;
}

.repo-card p {
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.85rem;
}

.repo-card small {
  color: var(--muted);
}

/* EDUCATION */

.timeline {
  border-left: 1px solid var(--border);
}

.timeline-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 40px;
  padding: 35px 0 35px 35px;
  position: relative;
}

.timeline-item::before {
  content: "";
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  position: absolute;
  left: -5px;
  top: 42px;
}

.timeline-year {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin: 0 0 7px;
}

.timeline-content h4 {
  color: var(--muted);
  margin: 0 0 15px;
}

.timeline-content p {
  color: var(--muted);
  line-height: 1.7;
}

/* CERTIFICATIONS */

.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.cert-card {
  padding: 30px;
  min-height: 180px;
  background: var(--surface);
  border: 1px solid var(--border);
}

.cert-card > span {
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 800;
}

.cert-card h3 {
  margin-top: 40px;
}

.cert-card p {
  color: var(--muted);
}

/* ACHIEVEMENTS */

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.achievement-grid > div {
  background: var(--surface);
  padding: 30px;
  min-height: 220px;
}

.achievement-grid span {
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 800;
}

.achievement-grid h3 {
  margin-top: 50px;
}

.achievement-grid p {
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.85rem;
}

/* CONTACT */

.contact-section {
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: center;
  gap: 80px;
}

.contact-main h2 {
  font-size: clamp(3.5rem, 8vw, 8rem);
  line-height: 0.85;
  letter-spacing: -0.09em;
  margin: 25px 0;
}

.contact-main h2 span {
  color: transparent;
  -webkit-text-stroke: 1px var(--text);
}

.contact-description {
  color: var(--muted);
  max-width: 500px;
  line-height: 1.8;
  margin-bottom: 35px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}

.contact-links a {
  padding: 22px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 700;
}

.contact-links a:hover {
  color: var(--accent);
}

.contact-links span {
  color: var(--muted);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

/* FOOTER */

footer {
  width: 90%;
  margin: auto;
  padding: 30px 0;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.7rem;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    min-height: 400px;
  }

  .about-grid,
  .contact-section {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card.featured {
    grid-column: span 1;
  }

  .repo-grid,
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .achievement-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .navbar {
    padding: 0 5%;
  }

  .nav-links {
    position: fixed;
    top: 76px;
    left: 0;
    width: 100%;
    padding: 30px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    align-items: flex-start;
    transform: translateY(-130%);
    transition: 0.3s ease;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .menu-btn {
    display: block;
  }

  .section {
    padding: 80px 0;
  }

  .hero {
    padding-top: 130px;
  }

  .hero h1 {
    font-size: clamp(3.7rem, 17vw, 6rem);
  }

  .hero-visual {
    min-height: 350px;
  }

  .profile-frame {
    width: 260px;
    height: 340px;
  }

  .card-one {
    left: -5px;
  }

  .card-two {
    right: -5px;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats div:nth-child(2) {
    border-right: none;
  }

  .skills-grid,
  .projects-grid,
  .repo-grid,
  .cert-grid,
  .achievement-grid {
    grid-template-columns: 1fr;
  }

  .projects-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .github-box {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  }

  footer {
    flex-direction: column;
    gap: 10px;
  }
}
