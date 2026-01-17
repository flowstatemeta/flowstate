'use client'

import MuxPlayer from '@mux/mux-player-react'

interface LessonVideoPlayerProps {
  playbackId: string
}

export default function LessonVideoPlayer({ playbackId }: LessonVideoPlayerProps) {
  return (
    <MuxPlayer streamType="on-demand" playbackId={playbackId} className="w-full aspect-video rounded-lg shadow-lg" />
  )
}