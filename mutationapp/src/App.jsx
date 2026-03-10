// App.jsx - Client-side Logic (React + TanStack Query)
import { 
  useQuery, 
  useMutation, 
  QueryClient, 
  QueryClientProvider, 
  useQueryClient 
} from "@tanstack/react-query";
import { PlusCircle, Loader2, FileText, Send } from "lucide-react";
import "./App.css"; // 위에서 만든 CSS 로드

// 1. API Functions (Communication Layer)
const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if(!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

const createPost = async ({ title, body }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title, body, userId: 1}),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
  return response.json();
}

// Query Client 인스턴스 생성
const queryClient = new QueryClient();

function PostApp() {
  const client = useQueryClient();

  // 2. Data Fetching (Server State Management)
  const { isLoading, error, data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  // 3. Data Mutation (Server Action)
  const createMutate = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // 데이터가 생성되면 기존 캐시를 무효화하여 다시 불러오게 함 (Refresh 효과)
      client.invalidateQueries(['posts']);
      console.log('Success creating post:', newPost);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const content = formData.get('content');

    if(!title || !content) return;

    createMutate.mutate({ title, body: content });
    e.currentTarget.reset(); // 입력 폼 초기화
  };

  return(
    <div className="container">
      <header>
        <h1><FileText size={32} /> JSON Placeholder Posts</h1>
        <p>React Query를 활용한 Full-stack 데이터 통신 구조</p>
      </header>

      {/* Input Section */}
      <section className="post-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>제목</label>
            <input type="text" name="title" placeholder='제목을 입력하세요.' required />
          </div>
          <div className="input-group">
            <label>내용</label>
            <textarea name="content" rows='3' placeholder='내용을 입력하세요' required />
          </div>
          <button type='submit' disabled={createMutate.isPending}>
            {createMutate.isPending ? <Loader2 className="spin" /> : <Send size={18} />}
            {createMutate.isPending ? '전송 중...' : '포스트 작성하기'}
          </button>
        </form> 
      </section> 
      
      {/* List Section */}
      <section>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PlusCircle size={24} /> Current Posts
        </h2>
        { isLoading ? (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Loader2 className="spin" size={48} color="#6366f1" />
            <p>서버에서 데이터를 가져오고 있습니다...</p>
          </div>
        ) : error ? (
          <div style={{ color: 'red' }}>Configuration Error: {error.message}</div>
        ) : (
          <div className="post-list">
            { posts.map(post => (
              <div key={post.id} className="post-card">
                <span>POST # {post.id}</span>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}                  
      </section> 
    </div>
  );
}

// 4. Provider Wrapper (Dependency Injection Concept)
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostApp />
    </QueryClientProvider>
  )
}

export default App;
