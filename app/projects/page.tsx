import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Origiganics by Wallian',
      link: 'https://organics-by-wallian-lr22.vercel.app/'
    },
    {
      name: 'Goodwill Disability Movement',
      link: 'https://www.goodwillmovement.com.au/'
    },
    {
      name: 'TrailMate',
      link: 'https://trail-mate1.vercel.app/'
    },
    {
      name: 'FinancialHub',
      link: 'https://financial-hub-omega.vercel.app/'
    },
    {
      name: 'Gemify',
      link: 'https://github.com/rahmankarim/gemify'
    },
    {
      name: 'TrendHive',
      link: 'https://github.com/rahmankarim/trendhive'
    },
    {
      name: 'SmileCrafters',
      link: 'https://github.com/rahmankarim/smilecrafters'
    },
    {
      name: 'PeakDrive',
      link: 'https://github.com/rahmankarim/peakdrive'
    },
    {
      name: 'AidFlow',
      link: 'https://github.com/rahmankarim/aidflow'
    },
    {
      name: 'School Management System',
      link: 'https://github.com/rahmankarim/school-management-system'
    },
    {
      name: 'ThoughtNest',
      link: 'https://github.com/rahmankarim/thoughtnest'
    },
    {
      name: 'Car Racing Game',
      link: 'https://github.com/rahmankarim/car-racing-game'
    },
    {
      name: 'Domino&apos;s Clone App',
      link: 'https://github.com/rahmankarim/domino-s-clone-app'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 sm:py-20">
      <Link href="/indeset" className="text-sm underline hover:opacity-70 mb-8 inline-block">
        ← Back
      </Link>

      <article className="max-w-none">
        <h1 className="text-2xl font-bold mb-2">All Projects</h1>
        <p className="text-sm text-gray-400 mb-8">A collection of web applications, platforms, and tools built at Indeset Pvt Ltd and beyond.</p>

        <div className="space-y-4">
          {projects.map((project, idx) => (
            <div key={idx} className="border-b border-gray-700 pb-3 last:border-b-0">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm underline hover:opacity-70 block"
              >
                {project.name}
              </a>
              <p className="text-xs text-gray-500 mt-1">{project.link}</p>
            </div>
          ))}
        </div>
      </article>
    </main>
  )
}
