import Link from 'next/link'

export default async function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 sm:py-40">
      {/* Bio Section */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-3">Rahman Karim</h2>
        <p className="text-sm leading-relaxed mb-4">
          I&apos;m a <Link href="/about" className="underline hover:opacity-70">Software Engineer, Founder, and Computer Science student</Link> at COMSATS University Islamabad, Lahore Campus. I build modern web applications focused on performance, scalability, and user experience. Currently, I&apos;m the Founder & CEO of <Link href="/indeset" className="underline hover:opacity-70">Indeset Pvt Ltd</Link>, where I lead Full-Stack development projects and work closely with clients to turn ideas into impactful digital products.
        </p>

        <p className="text-sm leading-relaxed mb-4">
          Previously, I worked at <Link href="/crogics" className="underline hover:opacity-70">Crogics Technologies</Link> as both a Frontend Developer Intern and MERN Stack Developer, where I developed and deployed full-stack applications using MongoDB, Express.js, React.js, Node.js, and Next.js. I enjoy creating clean interfaces, solving real-world problems, and building products that people genuinely enjoy using.
        </p>
      </section>

      {/* Interests */}
      <section className="mb-12">
        <h2 className="text-lg font-bold mb-3">Interests & Goals</h2>
        <p className="text-sm leading-relaxed">
          Beyond coding, I enjoy <Link href="/interests" className="underline hover:opacity-70">hiking, mountaineering,horse riding, football, chess</Link>, and <Link href="/certificates" className="underline hover:opacity-70">exploring emerging technologies.</Link> My goal is to make technology more accessible, engaging, and useful through thoughtful design and development.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-lg font-bold mb-3">Get in Touch</h2>
        <p className="text-sm leading-relaxed">
          Feel free to connect with me on <a href="https://www.linkedin.com/in/rahmankarim/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">LinkedIn</a>, follow my work on <a href="https://github.com/Rahmankarim" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">GitHub</a> and <a href="https://www.instagram.com/rahman_karim.1" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Instagram</a>, take a look at my <a href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rahman_Karim_Resume-AaONW5JtkkA3iY09CdCg5WyRMlo9fx.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">resume</a> or reach out by <a href="mailto:rahmankarim2468@gmail.com" className="underline hover:opacity-70">email</a> for collaborations, opportunities, or just to say hello.
        </p>
      </section>
    </main>
  )
}
