import Link from 'next/link'

export default function CrogicsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
      <Link href="/" className="text-sm underline hover:opacity-70 mb-8 inline-block">
        ← Back
      </Link>

      <article className="max-w-none">
        <h1 className="text-2xl font-bold mb-4">Crogics Technologies</h1>
        <p className="text-sm text-gray-400 mb-2">Frontend Developer Intern → MERN Stack Developer</p>
        <p className="text-sm text-gray-400 mb-8">February 2024 – February 2026</p>

        <div className="space-y-6">
          <section>
            <p className="text-sm leading-relaxed mb-4">
              I started my professional software engineering journey at Crogics Technologies, where I worked on modern web applications, frontend systems, and full-stack development projects. Over time, I transitioned from a Frontend Developer Intern to a MERN Stack Developer, working closely with development teams to build scalable and user-focused digital products.
            </p>
            <p className="text-sm leading-relaxed">
              At Crogics, I worked with technologies like React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and TypeScript to create responsive interfaces, backend APIs, dashboards, authentication systems, and optimized web experiences.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Key Responsibilities</h2>
            <ul className="space-y-2 text-sm">
              <li>• Developed responsive user interfaces using React.js and Next.js</li>
              <li>• Built backend APIs and database systems with Node.js, Express.js, and MongoDB</li>
              <li>• Designed and implemented authentication systems and security features</li>
              <li>• Created modern dashboards and admin panels</li>
              <li>• Collaborated with cross-functional teams on full-stack projects</li>
              <li>• Optimized application performance and user experience</li>
              <li>• Worked with Tailwind CSS for responsive design</li>
              <li>• Implemented TypeScript for type-safe development</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Technologies Used</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Experience Gained</h2>
            <p className="text-sm leading-relaxed">
              At Crogics, I learned how real software teams collaborate, manage projects, and ship products. I gained hands-on experience with modern development tools, best practices, and the full software development lifecycle. This experience shaped my understanding of professional development and prepared me to lead my own ventures.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
