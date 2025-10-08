"use client";

import Link from "next/link";
import PostCard from "./components/PostCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import { useState } from "react";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setFiltered(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  if (posts.length === 0) {
    fetchPosts();
  }

  const handleSearch = (query) => {
    if (!query) setFiltered(posts);
    else setFiltered(posts.filter((p) => p.title.toLowerCase().includes(query)));
  };

  return (
    <main>
      <Navbar/>
      <h1>Blog Dashboard 📰</h1>

      {/* ✅ Add Create Post Button */}
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

      <SearchBar onSearch={handleSearch} />

      <div>
        {filtered.length === 0 ? (
          <p>No posts found...</p>
        ) : (
          filtered.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </main>
  );
}
