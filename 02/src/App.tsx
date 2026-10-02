import { useEffect, useState } from 'react'
import './App.css'
import { fetchData, type Todo } from './hooks/fetchReq'

function App() {
  const [post, setPost] = useState<Todo | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    fetchData()
      .then((data) => {
        if (active) setPost(data)
      })
      .catch((requestError: unknown) => {
        if (active) {
          setError(requestError instanceof Error ? requestError.message : 'Unable to load the post.')
        }
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <main>
        <h1>Post</h1>
        {error ? (
          <p role="alert">Could not load the post: {error}</p>
        ) : post ? (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ) : (
          <p aria-live="polite">Loading post…</p>
        )}
      </main>
    </>
  )
}

export default App
