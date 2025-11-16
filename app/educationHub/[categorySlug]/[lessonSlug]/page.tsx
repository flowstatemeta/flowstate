import { client } from '@/sanity.client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import TopNavigation from '@/components/TopNavigation'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { PortableText } from '@portabletext/react'
import LessonVideoPlayer from '@/components/LessonVideoPlayer'
import CommentSection from '@/components/CommentSection'

// --- TypeScript Interfaces ---
interface Lesson {
  _id: string
  title: string
  video: {
    asset: {
      playbackId: string
    }
  }
  content?: any[]
}

export interface Comment {
  _id: string
  author: {
    name: string
  }
  comment: string
  _createdAt: string
}

interface PageProps {
  params: {
    categorySlug: string
    lessonSlug: string
  }
}

const pageQuery = groq`{
  "lesson": *[_type == "educationLesson" && slug.current == $lessonSlug && category->slug.current == $categorySlug][0]{
    _id,
    title,
    content,
    video { asset->{playbackId} }
  },
  "navigation": *[_type == "navigation"][0],
  "footer": *[_type == "footer"][0]
}`

const commentsQuery = groq`*[_type == "lessonComment" && lesson._ref == $lessonId && approved == true] | order(_createdAt desc){
  _id,
  author->{ name },
  comment,
  _createdAt
}`

export default async function LessonPage({ params }: PageProps) {
  const { categorySlug, lessonSlug } = params

  // --- DEBUGGING LOGS ---
  console.log(`[LessonPage] Attempting to fetch lesson with:`);
  console.log(`[LessonPage] categorySlug: ${categorySlug}`);
  console.log(`[LessonPage] lessonSlug: ${lessonSlug}`);
  const { lesson, navigation, footer } = await client.fetch<{
    lesson: Lesson;
    navigation: any;
    footer: any;
  }>(pageQuery, {
    lessonSlug,
    categorySlug,
  })
  console.log('[LessonPage] Fetched lesson data:', lesson);


  if (!lesson) {
    notFound()
  }

  // Fetch comments separately after we have the lesson ID
  const comments = await client.fetch<Comment[]>(commentsQuery, { lessonId: lesson._id })

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#FFF8DC' }}>
      {navigation && <TopNavigation data={navigation} />}
      <main className="relative flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <Link href={`/educationHub/${categorySlug}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8">
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Lessons
          </Link>

          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{lesson.title}</h1>
            {lesson.video?.asset?.playbackId && <LessonVideoPlayer playbackId={lesson.video.asset.playbackId} />}
            {lesson.content && <div className="prose prose-lg max-w-none mt-8 text-black"><PortableText value={lesson.content} /></div>}
          </article>

          <CommentSection lessonId={lesson._id} initialComments={comments} />
        </div>
      </main>
      {footer && <Footer data={footer} />}
    </div>
  )
}
