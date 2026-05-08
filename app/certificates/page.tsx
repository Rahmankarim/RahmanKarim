import Link from 'next/link'

export default function CertificatesPage() {
  const certificates = [
    {
      title: "CS50's Introduction to Computer Science",
      issuer: "Harvard University / edX",
      date: "June 2025"
    },
    {
      title: "Frontend Developer (React) Certificate",
      issuer: "HackerRank",
      date: "August 2024"
    },
    {
      title: "JavaScript (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "May 2024"
    },
    {
      title: "Introduction to DevOps",
      issuer: "IBM",
      date: "February 2024"
    },
    {
      title: "Introduction to Android Mobile Application Development",
      issuer: "Meta",
      date: "February 2024"
    },
    {
      title: "CB3 eLearning",
      issuer: "Universal Robots",
      date: "2024"
    },
    {
      title: "Beginner Guide to Making a Game with Unity",
      issuer: "BitDegree",
      date: "March 2025"
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
      <Link href="/about" className="text-sm underline hover:opacity-70 mb-8 inline-block">
        ← Back
      </Link>

      <article className="max-w-none">
        <h1 className="text-2xl font-bold mb-8">Certificates & Learning</h1>
        
        <p className="text-sm leading-relaxed mb-12">
          I believe in continuous learning and staying updated with emerging technologies. Here are the courses and certifications I&apos;ve completed to deepen my knowledge in computer science, web development, DevOps, and other cutting-edge technologies.
        </p>

        <div className="space-y-6">
          {certificates.map((cert, idx) => (
            <div key={idx} className="border-l-2 border-gray-500 pl-4">
              <h3 className="text-sm font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </article>
    </main>
  )
}
