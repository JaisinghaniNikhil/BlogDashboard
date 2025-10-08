"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("createdPosts")) || [];
    setPosts(savedPosts);
  }, []);

  const saveToLocal = (newPosts) => {
    localStorage.setItem("createdPosts", JSON.stringify(newPosts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Please fill in all fields!");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    saveToLocal(updatedPosts);

    setTitle("");
    setBody("");
    alert("Post created successfully!");
  };

  const handleDelete = (id) => {
    const confirmed = confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    saveToLocal(updatedPosts);
  };

  return (
    <main>
      <Link href="/">← Back to Home</Link>
      <h1 style={{ color: "#0070f3", marginTop: "10px" }}>+Create New Post</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Enter post content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Create Post
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h2>Your Created Posts</h2>
      {posts.length === 0 ? (
        <p>No posts created yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={styles.postCard}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <button
              onClick={() => handleDelete(post.id)}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </main>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "20px 0",
    maxWidth: "600px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    minHeight: "100px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  postCard: {
    background: "#fff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  deleteBtn: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
