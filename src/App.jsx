import { useEffect, useState } from "react";
import "./App.css";
import profile from "./profile.jpg";

const projects = [
  {
    title: "Intelligent Crime Analysis & Patrol Routing System",
    category: "DSA",
    description:
      "A Java-based crime analysis and patrol routing system using advanced data structures and algorithms for efficient crime record management and route analysis.",
    tech: ["Java", "BST", "AVL", "B-Tree", "B+ Tree", "Hashing"],
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    title: "Behaviour-Aware Early Ransomware Detection",
    category: "AI/ML",
    description:
      "Machine learning based ransomware detection approach focused on behavioural patterns and explainable predictions.",
    tech: ["Python", "Machine Learning", "XAI", "Cybersecurity"],
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Detective Simulator",
    category: "AI/ML",
    description:
      "An interactive investigation simulator demonstrating graph traversal and search strategies using BFS and DFS.",
    tech: ["Python", "Flask", "BFS", "DFS"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Veloura Beauty Store",
    category: "Web",
    description:
      "Responsive React-based beauty store interface with reusable components and modern product browsing experience.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Foodzy+ Restaurant Website",
    category: "Web",
    description:
      "Responsive restaurant website designed using semantic HTML, CSS and Bootstrap components.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "List vs Set Analysis",
    category: "DSA",
    description:
      "Interactive project demonstrating differences between lists and sets with a focus on practical data structure behaviour.",
    tech: ["Python", "Flask", "Data Structures"],
    github: "https://github.com/",
    demo: "#",
  },
];

const skills = {
  Languages: ["Java", "Python", "C", "JavaScript"],
  Frontend: ["HTML", "CSS", "React", "Tailwind CSS", "Bootstrap"],
  Backend: ["Flask", "Node.js"],
  "AI / ML": ["Machine Learning", "Pandas", "NumPy", "Scikit-learn", "XAI"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Eclipse", "Vercel"],
};

const education = [
  {
    year: "2024 — Present",
    title: "B.Tech — Computer Science Engineering",
    place: "KL University, Aziznagar Campus",
    description:
      "Focused on software development, data structures, machine learning, web technologies and computer science fundamentals.",
  },
  {
    year: "Intermediate",
    title: "Intermediate Education",
    place: "Science / Mathematics",
    description:
      "Built a strong foundation in mathematics, logical reasoning and computer science.",
  },
];

const certifications = [
  {
    title: "Machine Learning / AI Certifications",
    issuer: "Add your certification issuer",
  },
  {
    title: "Web Development Certification",
    issuer: "Add your certification issuer",
  },
  {
    title: "Programming / DSA Certification",
    issuer: "Add your certification issuer",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [githubRepos, setGithubRepos] = useState([]);

  const filters = ["All", "AI/ML", "Web", "DSA"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = height > 0 ? (scrollTop / height) * 100 : 0;

      const bar = document.getElementById("scroll-progress");

      if (bar) {
        bar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/thirunagarivarsha-bit/repos?per_page=6")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setGithubRepos(data);
        }
      })
      .catch(() => {
        setGithubRepos([]);
      });
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div id="scroll-progress"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          TV<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero section" id="home">
          <div className="hero-content reveal">
            <p className="eyebrow">
              COMPUTER SCIENCE ENGINEERING • AI • SOFTWARE
            </p>

            <h1>
              THIRUNAGARI
              <br />
              <span>VARSHA</span>
            </h1>

            <div className="hero-line">
              <span></span>
              <p>
                Building intelligent systems, solving complex problems and
                turning ideas into usable products.
              </p>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                Explore My Work →
              </a>

              <a
                href="/portfolio/resume.pdf"
                className="btn secondary"
                download
              >
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/thirunagarivarsha-bit"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/varsha996aa"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:thirunagarivarsha66@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="profile-frame">
              <img src={profile} alt="Thirunagari Varsha" />
            </div>

            <div className="floating-card card-one">
              <span>01</span>
              <strong>AI / ML</strong>
            </div>

            <div className="floating-card card-two">
              <span>02</span>
              <strong>FULL STACK</strong>
            </div>

            <div className="floating-card card-three">
              <span>03</span>
              <strong>DSA</strong>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="section-heading">
            <span>01</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-intro">
              <h3>
                Curious mind.
                <br />
                <span>Builder mindset.</span>
              </h3>
            </div>

            <div className="about-text">
              <p>
                I'm a Computer Science Engineering student interested in
                building practical software systems across AI, machine
                learning, web development and data structures.
              </p>

              <p>
                I enjoy taking complex problems, breaking them into smaller
                systems and turning those ideas into usable applications.
              </p>

              <p>
                My current focus is strengthening my engineering fundamentals
                while exploring AI-driven products, research and modern web
                technologies.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>06+</strong>
              <span>Projects</span>
            </div>

            <div>
              <strong>04+</strong>
              <span>Tech Domains</span>
            </div>

            <div>
              <strong>02★</strong>
              <span>CodeChef</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Learning Mode</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <span>02</span>
            <h2>Technical Arsenal</h2>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h3>{category}</h3>

                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span>03</span>
            <h2>Selected Work</h2>
          </div>

          <div className="projects-top">
            <p>
              A selection of projects exploring software engineering, AI/ML,
              algorithms and modern web development.
            </p>

            <div className="filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                className={
                  project.featured
                    ? "project-card featured"
                    : "project-card"
                }
                key={project.title}
              >
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>2026</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GITHUB */}
        <section className="section github-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Open Source Activity</h2>
          </div>

          <div className="github-box">
            <div>
              <p className="eyebrow">GITHUB API</p>
              <h3>What I'm building in public.</h3>
              <p>
                Recent public repositories pulled directly from GitHub.
              </p>
            </div>

            <a
              className="btn primary"
              href="https://github.com/thirunagarivarsha-bit"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub →
            </a>
          </div>

          {githubRepos.length > 0 && (
            <div className="repo-grid">
              {githubRepos.slice(0, 6).map((repo) => (
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="repo-card"
                  key={repo.id}
                >
                  <span>Repository ↗</span>
                  <h3>{repo.name}</h3>
                  <p>
                    {repo.description || "Open-source development project."}
                  </p>

                  <small>
                    {repo.language || "Code"} · ⭐ {repo.stargazers_count}
                  </small>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="section-heading">
            <span>05</span>
            <h2>Education</h2>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-year">{item.year}</div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <h4>{item.place}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section" id="certifications">
          <div className="section-heading">
            <span>06</span>
            <h2>Certifications</h2>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div className="cert-card" key={cert.title}>
                <span>0{index + 1}</span>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section achievements">
          <div className="section-heading">
            <span>07</span>
            <h2>Highlights</h2>
          </div>

          <div className="achievement-grid">
            <div>
              <span>01</span>
              <h3>Competitive Programming</h3>
              <p>CodeChef 2★ rated programmer.</p>
            </div>

            <div>
              <span>02</span>
              <h3>AI / ML Projects</h3>
              <p>
                Exploring machine learning, explainable AI and cybersecurity.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Problem Solving</h3>
              <p>
                Strong focus on algorithms and data structures using Java.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Hackathons & Research</h3>
              <p>
                Building practical systems and exploring emerging AI ideas.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-main">
            <p className="eyebrow">08 — CONTACT</p>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p className="contact-description">
              I'm interested in internships, collaborations, research and
              challenging software projects.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="btn primary large"
            >
              Start a Conversation →
            </a>
          </div>

          <div className="contact-links">
            <a href="mailto:your-email@example.com">
              <span>Email</span>
              your-email@example.com
            </a>

            <a
              href="https://github.com/thirunagarivarsha-bit"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              @thirunagarivarsha-bit
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              Connect with me ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Thirunagari Varsha</p>
        <p>Built with React • Designed to learn, build & ship.</p>
      </footer>
    </div>
  );
}

export default App;
