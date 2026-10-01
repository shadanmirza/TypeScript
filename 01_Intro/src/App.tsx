import './App.css'
import { Card } from './components/Card';
import { ChaiCard } from './components/ChaiCard';
import { UseForm } from './components/UseForm'
import { useFatch } from './hooks/useFatch'

type Post = {
  id: number;
  title: string;
  body: string;
}

function App() {
  const { data: posts, loading, error } = useFatch<Post[]>();

  return (
    <>
    <div>
      <ChaiCard
        price={6000}
        name="harsh"
        isSpecial={true}
      />
    </div>
    <div>
      <UseForm 
      onSubmit={(order) => {
        console.log("Placed", order.name, order.cups);        
      }}
      />
    </div>
    <div>
      <Card title="hello"
            footer={<button>Click Me</button>}
            />
    </div>
    <section>
      <h2>Posts</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p role="alert">Error: {error}</p>}
      {posts?.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
    </>
  )
}

export default App
