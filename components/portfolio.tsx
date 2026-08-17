"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Lenis from "lenis";
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Link,
  Menu,
  Quote,
  Trophy,
  X,
} from "lucide-react";

const portraitUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RK-ZlktGQD1MAJxj5ctQc33rO9xAWieRl.png";

const skills = [
  {
    number: "01",
    title: "LANGUAGES",
    tags: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++"],
  },
  {
    number: "02",
    title: "FRONTEND",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    number: "03",
    title: "BACKEND",
    tags: [
      "Node.js / Express.js",
      "REST API Design",
      "JWT & OAuth",
      "MVC Architecture",
      "FastAPI",
    ],
  },
  {
    number: "04",
    title: "DATA & DEVOPS",
    tags: [
      "MongoDB / MySQL",
      "PostgreSQL / Prisma",
      "Git / GitHub",
      "Docker / Kubernetes",
      "CI/CD / Vercel",
    ],
  },
  {
    number: "05",
    title: "AI & LLM",
    tags: [
      "Groq API",
      "GitHub Copilot",
      "Prompt Engineering",
      "LLM Integration",
      "Generative AI",
    ],
  },
  {
    number: "06",
    title: "SOFT SKILLS",
    tags: [
      "Agile / Scrum",
      "Debugging",
      "Problem Solving",
      "Communication",
      "Leadership",
    ],
  },
];

const projects = [
  {
    title: "TRAILMATE",
    type: "AI-POWERED TOURISM PLATFORM",
    description:
      "Built an adventure tourism platform with real-time companion matching and AI-driven tour recommendations, improving relevance by 30%.",
    tags: ["Next.js", "Socket.io", "Groq API", "Mongoose", "Cloudinary"],
    link: "https://trail-mate1.vercel.app",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-17%20202513-rk2O1syEcwyZ6sL3VRJ9lnIIBNdAQl.png",
    className: "project-nexus",
  },
  {
    title: "ORIGIGANICS",
    type: "FULL-STACK E-COMMERCE",
    description:
      "Designed and launched an end-to-end e-commerce platform, increasing customer engagement by 25% and site performance by 20%.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    link: "https://organics-by-wallian-lr22.vercel.app",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-17%20202519-9rDyGGnmeUstJRKwWLXeedYMTLf26X.png",
    className: "project-signal",
  },
  {
    title: "GOODWILL",
    type: "PUBLIC-FACING ORGANIZATION WEBSITE",
    description:
      "Built an accessible organization website, improving accessibility compliance by 40%, engagement by 60%, and page load time by 35%.",
    tags: ["HTML5", "JavaScript", "Bootstrap", "Netlify"],
    link: "https://goodwillmovement.com.au",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-17%20202530-wLudYdRlKG3hWI83fTqPmxVx22uAt0.png",
    className: "project-notes",
  },
];

const experience = [
  {
    role: "FULL STACK DEVELOPER",
    company: "Crogics Technologies · Remote",
    dates: "AUG 2024 — FEB 2026",
    copy: "Built and shipped 5+ MERN web applications with RESTful APIs, JWT authentication, and MVC architecture. Collaborated on bi-weekly releases with 95%+ on-time delivery.",
  },
  {
    role: "FRONTEND DEVELOPER INTERN",
    company: "Crogics Technologies · Onsite",
    dates: "FEB 2024 — JUL 2024",
    copy: "Rebuilt legacy interfaces with React and Tailwind, cutting page load time by 15% and user drop-off by 20%. Built a reusable component library that reduced feature development time by 25%.",
  },
];

const certifications = [
  {
    title: "JPMorganChase — Software Engineering Job Simulation",
    issuer: "Forage",
    date: "JUL 2026",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-08-17%20201550-kzpCdFewyZqwDCWOU3DxhGAZcRfAuy.png",
    link: "https://www.theforage.com/",
  },
  {
    title: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "JUN 2026",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20fluency%20and%20fondation-KXRxVlZaIbgcleVAYustNGxkt6wR96.jpg",
    link: "https://www.anthropic.com/",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "JUN 2026",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/claude%20101-9EoYqXKIrcwLbR6WJ22RxAZwuEwmtl.jpg",
    link: "https://www.anthropic.com/",
  },
  {
    title: "CS50’s Introduction to Computer Science",
    issuer: "Harvard / edX",
    date: "JUN 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1749149513358-gr50Qq4WKQPNjvudqA57IsnhLlnTpO.jpeg",
    link: "https://cs50.harvard.edu/certificates/6b2b2957-de99-4950-85de-9d07f6cef71",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "AUG 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1723584304894-Jp6ozKNpAybiFkhKAvsK7vQaYQozzB.jpeg",
    link: "https://www.hackerrank.com/",
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM / Cognitive Class",
    date: "OCT 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1759554473585-TJKqggwUrp8rjGFRQKOmOLTj9dkjvU.jpeg",
    link: "https://courses.cognitiveclass.ai/",
  },
  {
    title: "CB3 e-Learning",
    issuer: "Universal Robots Academy",
    date: "SEP 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1727523992398-orgSby86VslstnlQoO4ak8WfAPCicP.jpeg",
    link: "https://academy.universal-robots.com/",
  },
];

const honors = [
  {
    title: "HEC C3 GENERATIVE AI DEVELOPER — TOP PERFORMER",
    org: "HEC Pakistan & Pak Angels",
    date: "MAY 2026",
    detail:
      "Achieved a final score of 91.54% in the HEC C3 Generative AI Developer Program.",
  },
];

const testimonials = [
  {
    quote:
      "Rahman brings a rare mix of product thinking and engineering discipline. He turns fuzzy ideas into interfaces people can actually use.",
    name: "Ayesha Malik",
    role: "Product Lead · Crogics",
    image: "https://i.pravatar.cc/160?img=47",
  },
  {
    quote:
      "The quality of his frontend work is exceptional. Thoughtful details, clean communication, and a real eye for performance.",
    name: "Hassan Raza",
    role: "Founder · TrailMate",
    image: "https://i.pravatar.cc/160?img=12",
  },
  {
    quote:
      "Rahman owned the problem end to end and shipped a polished experience without losing sight of the people it serves.",
    name: "Sarah Ahmed",
    role: "Program Director · Goodwill",
    image: "https://i.pravatar.cc/160?img=32",
  },
  {
    quote:
      "A dependable developer who makes complex technical work feel clear. I would happily collaborate with him again.",
    name: "Omar Farooq",
    role: "Engineering Mentor",
    image: "https://i.pravatar.cc/160?img=68",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      {children}
    </div>
  );
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rahman Karim home">
          RK<span>.</span>
        </a>
        <nav
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>
          <a href="#recognition" onClick={() => setMenuOpen(false)}>
            Recognition
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="https://blobs.vusercontent.net/blob/Rahman%20Karim-ZPYbHWCVaCg3T5uELPvDqjettcBdvc.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <section className="hero" id="top">
        <div className="hero-meta">
          <span>© 2026</span>
          <span>LAHORE, PAKISTAN · AVAILABLE FOR SELECT PROJECTS</span>
        </div>
        <div className="hero-content">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="eyebrow">RAHMAN KARIM / SOFTWARE ENGINEER</p>
            <h1>
              SOFTWARE
              <br />
              <em>ENGINEER</em>
            </h1>
            <p className="hero-note">
              I build digital products that feel as good as they function.
            </p>
          </motion.div>
        </div>
        <motion.div
          style={{ position: "absolute" }}
          className="portrait-wrap"
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 70, scale: 0.94 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <Image
            src={portraitUrl}
            alt="Rahman Karim in a dark suit"
            fill
            priority
            sizes="(max-width: 800px) 70vw, 34vw"
          />
        </motion.div>
        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </a>
      </section>
      <motion.section {...reveal} className="bio section-pad" id="about">
        <div className="bio-aside">
          <SectionLabel>ABOUT ME</SectionLabel>
          <span className="bio-index">01 / 10</span>
        </div>
        <div className="bio-copy">
          <h2>
            I make the web a little more <span>useful.</span>
          </h2>
          <p>
            Computer Science graduate and Full Stack Engineer with hands-on
            experience across MERN, Next.js, TypeScript, and Python. I care
            about solid foundations, clear interfaces, and products that solve
            real problems.
          </p>
          <a className="accent-button" href="#contact">
            LET&apos;S WORK TOGETHER <ArrowUpRight data-icon="inline-end" />
          </a>
        </div>
      </motion.section>
      <div className="marquee" aria-label="Rahman Karim specialties">
        <div className="marquee-track">
          <span>
            CRAFTING DIGITAL EXPERIENCES <b>✳</b> CLEAN CODE, CLEAR THINKING{" "}
            <b>✳</b>{" "}
          </span>
          <span aria-hidden="true">
            CRAFTING DIGITAL EXPERIENCES <b>✳</b> CLEAN CODE, CLEAR THINKING{" "}
            <b>✳</b>{" "}
          </span>
        </div>
      </div>
      <section className="section-pad skills-section">
        <div className="section-heading">
          <SectionLabel>TECHNICAL SKILLS</SectionLabel>
          <span className="bio-index">02 / 10</span>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.article
              key={skill.number}
              {...reveal}
              className="skill-card"
            >
              <span className="card-number">{skill.number}</span>
              <h3>{skill.title}</h3>
              <ul>
                {skill.tags.map((tag) => (
                  <li key={tag}>
                    <span />
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="section-pad work-section" id="work">
        <div className="section-heading">
          <SectionLabel>SELECTED WORK</SectionLabel>
          <span className="bio-index">03 / 10</span>
        </div>
        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              {...reveal}
              className={`project-row ${i % 2 === 1 ? "is-reverse" : ""}`}
            >
              <div className={`project-visual ${project.className}`}>
                <span className="visual-label">0{i + 1}</span>
                <Image
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
                <span className="visual-word">{project.title}</span>
                <span className="visual-grid" />
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Project actions intentionally removed — links available via project title */}
              </div>
            </motion.article>
          ))}
        </div>
        <a
          className="explore-more"
          href="https://github.com/rahmankarim"
          target="_blank"
          rel="noreferrer"
        >
          EXPLORE MORE ON GITHUB <ArrowUpRight />
        </a>
      </section>
      <section className="section-pad experience-section">
        <div className="section-heading">
          <SectionLabel>EXPERIENCE</SectionLabel>
          <span className="bio-index">04 / 10</span>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <motion.article
              key={item.role}
              {...reveal}
              className="timeline-item"
            >
              <span className="timeline-dot" />
              <div className="timeline-top">
                <p>{item.dates}</p>
                <h3>{item.role}</h3>
              </div>
              <div className="timeline-detail">
                <p className="company">{item.company}</p>
                <p>{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="section-pad credentials-section" id="education">
        <div className="section-heading">
          <SectionLabel>EDUCATION</SectionLabel>
          <span className="bio-index">05 / 10</span>
        </div>
        <motion.article {...reveal} className="education-card education-wide">
          <GraduationCap />
          <p className="project-type">2022 — 2026 · CGPA 3.41 / 4</p>
          <h3>BACHELORS IN COMPUTER SCIENCE</h3>
          <p className="credential-muted">
            COMSATS University Islamabad · Lahore, Pakistan
          </p>
          <p className="credential-copy">
            A foundation in software engineering, object-oriented programming,
            data structures, algorithms, design patterns, and problem solving.
          </p>
        </motion.article>
      </section>
      <section className="section-pad recognition-section" id="recognition">
        <div className="section-heading">
          <SectionLabel>CERTIFICATIONS</SectionLabel>
          <span className="bio-index">06 / 10</span>
        </div>
        <div className="certificate-list">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              {...reveal}
              className="certificate-row"
            >
              <a
                className="certificate-thumb"
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${certificate.title} certificate`}
              >
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  sizes="180px"
                />
              </a>
              <div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>
              <time>{certificate.date}</time>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="section-pad honors-section">
        <div className="section-heading">
          <SectionLabel>HONORS &amp; REWARDS</SectionLabel>
          <span className="bio-index">07 / 10</span>
        </div>
        <div className="honors-grid">
          {honors.map((honor) => (
            <motion.article
              key={honor.title}
              {...reveal}
              className="honor-card"
            >
              <Trophy />
              <div>
                <p className="project-type">{honor.date}</p>
                <h3>{honor.title}</h3>
                <p className="credential-muted">{honor.org}</p>
                <p className="credential-copy">{honor.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="section-pad testimonials-section" id="testimonials">
        <div className="section-heading">
          <SectionLabel>TESTIMONIALS</SectionLabel>
          <span className="bio-index">08 / 11</span>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              {...reveal}
              className="testimonial-card"
            >
              <Quote className="testimonial-quote" />
              <p className="testimonial-copy">{testimonial.quote}</p>
              <div className="testimonial-person">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="contact-section section-pad" id="contact">
        <div className="section-heading">
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <span className="bio-index">08 / 10</span>
        </div>
        <div className="contact-grid">
          <div>
            <h2>
              Have a good
              <br />
              <em>idea?</em>
            </h2>
            <p className="contact-intro">
              Tell me about it. I&apos;m open to conversations about thoughtful
              products, interesting problems, and ambitious collaborations.
            </p>
            <div className="socials">
              <a
                href="https://linkedin.com/in/rahmankarim"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Link />
              </a>
              <a
                href="https://instagram.com/rahman_karim.1"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <span className="social-letter">IG</span>
              </a>
              <a
                href="https://leetcode.com/u/Rahman_Karim"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <Code2 />
              </a>
              <a
                href="https://github.com/rahmankarim"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitBranch />
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                `Portfolio inquiry from ${data.get("name")}`,
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:rahmankarim2468@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
          >
            {sent ? (
              <div className="success-message">
                <Check />
                Thanks — your note is ready to be answered.
              </div>
            ) : (
              <>
                <label>
                  Name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Message
                  <textarea
                    required
                    name="message"
                    placeholder="Tell me a little about your project"
                    rows={4}
                  />
                </label>
                <button className="submit-button" type="submit">
                  SEND MESSAGE <ArrowUpRight />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
      <footer className="site-footer">
        <p className="footer-statement">
          BUILD WITH INTENTION.
          <br />
          <span>SHIP WITH CARE.</span>
        </p>
        <div className="footer-bottom">
          <span>© 2026 RAHMAN KARIM</span>
          <span>rahmankarim2468@gmail.com · +92 346 5750452</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default Portfolio;
