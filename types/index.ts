export interface Lesson {
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

export interface EducationCategory {
  _id: string
  title: string
  slug: { current: string }
}