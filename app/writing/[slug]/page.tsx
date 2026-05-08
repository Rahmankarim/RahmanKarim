import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { getPost, getPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center py-8 px-4 max-w-screen-sm mx-auto">
        <Link href="/writing" className="text-base font-semibold">
          ← Back
        </Link>
        <ThemeToggle />
      </header>

      <main className="max-w-screen-sm mx-auto px-4 pb-16">
        <article>
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="opacity-60 mb-8">
            {new Date(post.date).toLocaleDateString()}
          </p>

          <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-bold prose-a:underline hover:prose-a:opacity-70">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
    </div>
  )
}
