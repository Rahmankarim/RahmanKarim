import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const images = [
    {
      src: "/me/mom1.jpeg",
      alt: "Childhood memories"
    },
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.19.52%20PM666.jpeg",
      alt: "Family moments"
    },
    {
      src: "/me/meandsis.jpeg",
      alt: "Family moments"
    },
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.18.46%20PM22.jpeg",
      alt: "Professional journey"
    },
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.18.45%20PM4.jpeg",
      alt: "Mountain adventures"
    },
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.18.44%20PM.jpeg",
      alt: "Favorite thing to do"
    },
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.18.46%20PM11.jpeg",
      alt: "Best moments"
    },
    {
      src: "/me/WhatsApp%20Image%202026-05-08%20at%205.18.45%20PM2.jpeg",
      alt: "Good memories"
    }
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 sm:py-20">
      <Link href="/" className="text-sm underline hover:opacity-70 mb-8 inline-block">
        ← Back
      </Link>

      <article className="max-w-none">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed mb-4">
            I grew up curious about how technology works.
          </p>
          <p className="text-sm leading-relaxed">
            As a kid, I spent hours exploring computers, video games, and the internet. While other kids were simply playing games, I was more interested in understanding how they were built. I would experiment with software, customize designs, watch tutorials online, and spend countless nights learning things far beyond my school curriculum.
          </p>
        </div>

        {/* Image Grid - Row 1 */}
        <div className="flex gap-6 justify-center flex-wrap my-10">
          {images.slice(0, 3).map((img, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0"
              style={{
                transform: `rotate(${idx % 3 === 0 ? '-2deg' : idx % 3 === 1 ? '2deg' : '-1deg'})`,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                backgroundColor: '#f9f7f4',
                padding: '12px 12px 20px 12px',
                width: 'fit-content'
              }}
            >
              <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '160px', width: '130px', border: '1px solid #ddd'}}>
                <Image 
                  src={img.src}
                  alt={img.alt}
                  width={130}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{img.alt}</p>
            </div>
          ))}
        </div>

        {/* Family and Background */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed mb-4">
            I was raised in Pakistan in a family that deeply valued education and hard work. Watching my parents support my dreams while also raising four younger sisters taught me responsibility early in life. Technology became more than just a hobby for me — it became a way to create, solve problems, and express ideas.
          </p>
          <p className="text-sm leading-relaxed">
            During my teenage years, I discovered web development and design. What started with editing graphics and learning basic HTML and CSS slowly turned into a passion for building complete digital experiences. I learned mostly through YouTube tutorials, online forums, documentation, and experimenting on my own.
          </p>
        </div>

        {/* Self-Learning */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed">
            I wasn&apos;t lucky enough to have access to advanced programming classes in school, so the internet became my classroom.
          </p>
        </div>

        {/* University and Professional Journey */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed mb-4">
            Eventually, I enrolled at COMSATS University Islamabad to study Computer Science. That&apos;s where I truly went deep into software engineering. I learned programming fundamentals through C++, Java, and Python before fully falling in love with JavaScript and the MERN stack.
          </p>
          <p className="text-sm leading-relaxed">
            The web fascinated me because it allowed me to build something once and instantly share it with the world.
          </p>
        </div>

        {/* Image Grid - Row 2 */}
        <div className="flex gap-6 justify-center flex-wrap my-10">
          {images.slice(3, 6).map((img, idx) => (
            <div 
              key={idx + 3}
              className="flex-shrink-0"
              style={{
                transform: `rotate(${(idx + 3) % 3 === 0 ? '-2deg' : (idx + 3) % 3 === 1 ? '2deg' : '-1deg'})`,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                backgroundColor: '#f9f7f4',
                padding: '12px 12px 20px 12px',
                width: 'fit-content'
              }}
            >
              <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '160px', width: '130px', border: '1px solid #ddd'}}>
                <Image 
                  src={img.src}
                  alt={img.alt}
                  width={130}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{img.alt}</p>
            </div>
          ))}
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed">
            While studying, I started working professionally as a Frontend Developer Intern and later as a MERN Stack Developer at Crogics Technologies. I worked on full-stack applications, modern dashboards, authentication systems, and responsive user interfaces. Those experiences taught me how real software teams collaborate, solve problems, and ship products.
          </p>
        </div>

        {/* Building Projects */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed mb-4">
            At the same time, I kept building projects of my own.
          </p>
          <p className="text-sm leading-relaxed">
            I helped create platforms like Goodwill Disability Movement to support accessibility and community engagement, developed Origiganics by Wallian, and built products like TrailMate and FinancialHub. Every project taught me something new about design, scalability, and user experience.
          </p>
        </div>

        {/* Entrepreneurship */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed mb-4">
            Over time, I realized I didn&apos;t just enjoy coding — I enjoyed creating things that people could actually use.
          </p>
          <p className="text-sm leading-relaxed">
            That mindset eventually pushed me to start Indeset Pvt Ltd, where I now work on building digital products, managing client projects, and leading development work. I enjoy the mix of technology, creativity, and leadership that comes with building a company.
          </p>
        </div>

        {/* Image Grid - Row 3 */}
        <div className="flex gap-6 justify-center flex-wrap my-10">
          {images.slice(6, 8).map((img, idx) => (
            <div 
              key={idx + 6}
              className="flex-shrink-0"
              style={{
                transform: `rotate(${(idx + 6) % 2 === 0 ? '-2deg' : '2deg'})`,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                backgroundColor: '#f9f7f4',
                padding: '12px 12px 20px 12px',
                width: 'fit-content'
              }}
            >
              <div className="bg-gray-100 overflow-hidden relative flex items-center justify-center" style={{height: '160px', width: '130px', border: '1px solid #ddd'}}>
                <Image 
                  src={img.src}
                  alt={img.alt}
                  width={130}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-center text-gray-700 leading-tight mt-2" style={{fontSize: '11px', fontStyle: 'italic'}}>{img.alt}</p>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="mb-12">
          <p className="text-sm leading-relaxed mb-4">
            Outside of programming, I enjoy hiking, football, mountaineering, chess, and <Link href="/certificates" className="underline hover:opacity-70">exploring emerging technologies like AI and DevOps</Link>. I&apos;m especially interested in how AI is changing software development and how developers can use it to build faster and smarter.
          </p>
        </div>

        {/* Closing */}
        <div>
          <p className="text-sm leading-relaxed mb-4">
            I still feel like the same curious kid sitting in front of a computer late at night, trying to figure out how things work.
          </p>
          <p className="text-sm leading-relaxed">
            The difference now is that I get to build those things myself.
          </p>
        </div>
      </article>
    </main>
  )
}
