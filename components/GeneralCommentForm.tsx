'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { submitComment } from '@/app/actions/submitComment'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface GeneralCommentFormProps {
  onCommentSubmitted: () => void // Callback to refresh comments on the page
}

export default function GeneralCommentForm({ onCommentSubmitted }: GeneralCommentFormProps) {
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) {
      alert('Please write a comment before submitting.')
      return
    }
    if (!isLoggedIn) {
      alert('You must be logged in to post a comment.')
      router.push('/join?tab=login') // Redirect to login if not logged in
      return
    }

    setIsSubmitting(true)
    // Call submitComment without a lessonId for general comments
    const result = await submitComment({ lessonId: undefined, commentText: newComment })

    if (result.success) {
      setNewComment('') // Reset form
      onCommentSubmitted() // Notify parent to refresh comments
    } else {
      alert(result.message || 'Failed to submit comment.')
    }
    setIsSubmitting(false)
  }

  return (
    <div className="mb-12 p-6 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-4">Ask a Question or Share a Thought</h3>
      {isLoggedIn ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <textarea placeholder="Write your comment here..." value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md text-black" rows={4} required />
          <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors justify-self-start disabled:bg-gray-500">
            {isSubmitting ? 'Posting...' : 'Submit Comment'}
          </button>
        </form>
      ) : (
        <p className="text-gray-600">Please <Link href="/join?tab=login" className="text-blue-600 hover:underline">log in</Link> to post a comment.</p>
      )}
    </div>
  )
}