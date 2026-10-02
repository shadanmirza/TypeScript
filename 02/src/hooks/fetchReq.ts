export interface Todo {
  userId: number
  id: number
  title: string
  body: string
}

export const fetchData = async (): Promise<Todo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`)
  }

  return (await response.json()) as Todo
}
