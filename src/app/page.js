import Link from "next/link";

// ✅ This is now a SERVER COMPONENT (SSR)
export default async function Home() {
  // Fetch posts server-side
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main>
      <h1>Blog Dashboard 📰</h1>

      {/* Create Post Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link
          href="/create"
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "10px 15px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          + Create New Post
        </Link>
      </div>

      {/* Posts Listing */}
      <div>
        {posts.slice(0, 10).map((post) => ( // Limit to 10 for cleaner UI
          <div
            key={post.id}
            style={{
              background: "#fff",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
            <Link
              href={`/posts/${post.id}`}
              style={{
                textDecoration: "none",
                color: "#0070f3",
                fontWeight: "bold",
              }}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
