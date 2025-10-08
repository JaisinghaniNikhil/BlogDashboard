import Link from "next/link";

export default async function PostDetail({ params }) {
  const { id } = params;

  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await postRes.json();

  const commentsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const comments = await commentsRes.json();
      
  if (!post.id) {
    return (
      <main>
        <h2>Post Not Found</h2>
        <Link href="/">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main>
      <Link href="/">← Back to Home</Link>

      <h1 style={{ color: "#0070f3", marginTop: "10px" }}>{post.title}</h1>
      <p style={{ fontSize: "16px", margin: "20px 0" }}>{post.body}</p>

      <hr />

      <h2 style={{ marginTop: "20px" }}>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {comments.map((comment) => (
            <li
              key={comment.id}
              style={{
                background: "#fff",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "6px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              <strong>{comment.name}</strong> <br />
              <em>{comment.email}</em>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
