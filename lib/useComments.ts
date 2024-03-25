import { Comment } from '@/types'

export const fetchComments = async (id: string) => {
  const res = await fetch(window.location.origin + `/api/comment?id=${id}`)
  const data = await res.json()
  return data
}

export const postComment = async (payload: Comment) => {
  const res = await fetch(window.location.origin + '/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      content: payload.content,
      confirmation: payload.confirmation,
      userId: payload.userId,
      totalGuest: parseInt(payload.totalGuest),
    }),
  })
  const data = (await res.json()) as Comment[]
  return data
}

export const deleteComment = async (id: string) => {
  const res = await fetch(window.location.origin + '/api/comment', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  })
  const data = await res.json()
  return data
}
