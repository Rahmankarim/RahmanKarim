import Link from 'next/link'

export default function IndesetPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
      <Link href="/" className="text-sm underline hover:opacity-70 mb-8 inline-block">
        ← Back
      </Link>

      <article className="max-w-none">
        <h1 className="text-2xl font-bold mb-4">Indeset Pvt Ltd</h1>
        <p className="text-sm text-gray-400 mb-8">Founder & CEO · February 2026 – Present</p>

        <div className="space-y-6">
          <section>
            <p className="text-sm leading-relaxed mb-4">
              I lead product development and engineering at Indeset Pvt Ltd, where we build modern web applications, business platforms, and digital experiences for startups, organizations, and growing businesses. Our work focuses on performance, scalability, clean UI/UX, and solving real-world problems through technology.
            </p>
            <p className="text-sm leading-relaxed">
              At Indeset, we work across full-stack development, frontend engineering, backend systems, responsive design, deployment, and AI-powered solutions using technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Featured Projects</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="https://organics-by-wallian-lr22.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Origiganics by Wallian</a></li>
              <li><a href="https://www.goodwillmovement.com.au/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Goodwill Disability Movement</a></li>
              <li><a href="https://trail-mate1.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">TrailMate</a></li>
              <li><a href="https://financial-hub-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">FinancialHub</a></li>
            </ul>
            <p className="text-sm mt-4"><Link href="/projects" className="underline hover:opacity-70">See more projects →</Link></p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">What We Do</h2>
            <ul className="space-y-1 text-sm">
              <li>• Full-Stack Web Development</li>
              <li>• SaaS & Dashboard Development</li>
              <li>• UI/UX Design Systems</li>
              <li>• Responsive Business Websites</li>
              <li>• Authentication & Backend APIs</li>
              <li>• AI-Powered Web Applications</li>
              <li>• Performance Optimization</li>
              <li>• Deployment & Cloud Hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Technologies</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span>React.js</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>Git & GitHub</span>
              <span>Vercel</span>
              <span>Docker & Kubernetes</span>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
