'use client'

import { useState } from 'react'
import { type Comment } from '@/types'
import { useSession } from 'next-auth/react'
import { submitComment } from '@/app/actions/submitComment'

interface CommentSectionProps {
  lessonId: string
  initialComments: Comment[]
}

export default function CommentSection({ lessonId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !isLoggedIn) {
      return
    }

    setIsSubmitting(true)
    const result = await submitComment({ lessonId, commentText: newComment })

    if (result.success && session?.user?.name) {
      // Optimistically update the UI with the new comment
      const optimisticComment: Comment = {
        _id: result.comment?._id || Math.random().toString(),
        author: { name: session.user.name },
        comment: newComment,
        _createdAt: new Date().toISOString(),
      }
      setComments([optimisticComment, ...comments])
      setNewComment('') // Reset form
    }
    setIsSubmitting(false)
  }

  return (
    <div className="mt-16 border-t border-gray-300 pt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments</h2>

      {isLoggedIn && (
        <form onSubmit={handleSubmit} className="mb-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4">Leave a Comment</h3>
          <div className="grid grid-cols-1 gap-4">
            <textarea placeholder="Write your comment here..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md text-black" rows={4} required />
            <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors justify-self-start disabled:bg-gray-500">
              {isSubmitting ? 'Posting...' : 'Submit Comment'}
            </button>
          </div>
        </form>
      )}

      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="p-5 bg-white rounded-lg shadow">
              <p className="font-bold text-gray-800">{comment.author.name}</p>
              <p className="text-xs text-gray-500 mb-2">{new Date(comment._createdAt).toLocaleString()}</p>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.comment}</p>
            </div>
          ))
        ) : (<p className="text-gray-600">Be the first to comment!</p>)}
      </div>
    </div>
  )
}
