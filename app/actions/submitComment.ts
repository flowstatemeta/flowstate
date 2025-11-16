'use server'

import { sanityWriteClient } from '@/lib/sanity.server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import { revalidatePath } from 'next/cache'

interface SubmitCommentParams {
  lessonId?: string // Make lessonId optional
  commentText: string
}

export async function submitComment(params: SubmitCommentParams) {
  const { lessonId, commentText } = params
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return { success: false, message: 'You must be logged in to comment.' }
  }

  try {
    const newComment = await sanityWriteClient.create({
      _type: 'lessonComment',
      ...(lessonId && {
        lesson: { _type: 'reference', _ref: lessonId },
      }), // Only add lesson reference if lessonId is provided

      author: { _type: 'reference', _ref: session.user.id },
      comment: commentText,
      approved: true, // Post immediately
    })

    // Revalidate the lesson path to show the new comment immediately
    // Note: You might need to adjust this path based on your exact URL structure
    if (lessonId) {
      revalidatePath(`/educationHub/`, 'layout') // Revalidate specific lesson paths
    } else {
      revalidatePath('/community', 'page') // Revalidate the community page
    }

    return { success: true, comment: newComment }
  } catch (error) {
    console.error('Error submitting comment:', error)
    return { success: false, message: 'Failed to submit comment.' }
  }
}