import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface PostMetadata {
  title: string
  date: string
  slug: string
}

export async function getPosts(): Promise<PostMetadata[]> {
  const files = fs.readdirSync(contentDir)
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(contentDir, file)
      const content = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(content)
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        date: data.date,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export async function getPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data, content: markdown } = matter(content)
  return {
    slug,
    title: data.title,
    date: data.date,
    content: markdown,
  }
}
