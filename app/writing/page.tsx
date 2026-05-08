import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { getPosts } from '@/lib/posts'

export default async function WritingPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center py-8 px-4 max-w-screen-sm mx-auto">
        <Link href="/" className="text-base font-semibold">
          ← Back
        </Link>
        <ThemeToggle />
      </header>

      <main className="max-w-screen-sm mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold mb-8">Writing</h1>
        
        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map(post => (
              <li key={post.slug}>
                <Link href={`/writing/${post.slug}`}>
                  <span className="font-semibold">{post.title}</span>
                  <span className="opacity-60"> — {new Date(post.date).toLocaleDateString()}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="opacity-60">No posts yet.</p>
        )}
      </main>
    </div>
  )
}
