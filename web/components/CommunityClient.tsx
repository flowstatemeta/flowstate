'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import GeneralCommentForm from './GeneralCommentForm'

// --- TypeScript Interfaces (should match the ones in the page) ---
interface CommunityPageData {
  heading: string
  description?: string
}

interface CommunityComment {
  _id: string
  comment: string
  _createdAt: string
  author: { name: string }
  keywords?: string[]
  lesson?: {
    title: string
    slug: { current: string }
    category: { slug: { current: string } }
  }
}

interface CommunityClientProps {
  pageData: CommunityPageData
  initialComments: CommunityComment[]
  onCommentSubmitted: () => void
}


export default function CommunityClient({ pageData, initialComments, onCommentSubmitted }: CommunityClientProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredComments = useMemo(() => {
    if (!searchQuery.trim()) {
      return initialComments
    }

    const lowercasedQuery = searchQuery.toLowerCase()

    return initialComments.filter((comment) => {
      const commentTextMatch = comment.comment.toLowerCase().includes(lowercasedQuery)
      const authorMatch = comment.author.name.toLowerCase().includes(lowercasedQuery)
      const keywordsMatch = comment.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(lowercasedQuery)
      )
      return commentTextMatch || authorMatch || keywordsMatch
    })
  }, [searchQuery, initialComments])

  return (
    <main className="relative flex-grow pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center">{pageData.heading}</h1>
        {pageData.description && <p className="mt-4 text-lg text-gray-600 text-center">{pageData.description}</p>}

        <div className="mt-12">
          <input
            type="search"
            placeholder="Search comments, keywords, or authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black"
          />
        </div>

        <div className="mt-8">
          <GeneralCommentForm onCommentSubmitted={onCommentSubmitted} />
        </div>

        <div className="space-y-6 mt-12">
          {filteredComments.length > 0 ? (
            filteredComments.map((comment) => (
              <div key={comment._id} className="p-5 bg-white rounded-lg shadow">
                <p className="font-bold text-gray-800">{comment.author.name}</p>
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(comment._createdAt).toLocaleString()}
                  {comment.lesson && (
                    <span className="ml-2 text-blue-600">
                      (from{' '}
                      <Link href={`/educationHub/${comment.lesson.category.slug.current}/${comment.lesson.slug.current}`} className="hover:underline">
                        {comment.lesson.title}
                      </Link>
                      )
                    </span>
                  )}
                </p>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No comments found matching your search.</p>
          )}
        </div>
      </div>
    </main>
  )
}