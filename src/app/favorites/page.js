"use client";

import Link from "next/link";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Fetch posts after component mounts
  useEffect(() => {
    let isMounted = true; // flag to check if component is still mounted

    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        if (isMounted) { // only update state if component is mounted
          setPosts(data);
          setFiltered(data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();

    // Cleanup function sets isMounted to false
    return () => {
      isMounted = false;
    };
  }, []); // empty dependency array → runs only once after mount

  const handleSearch = (query) => {
    if (!query) setFiltered(posts);
    else
      setFiltered(
        posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
      );
  };

  return (
    <main>
      <Navbar />
      <h1>Blog Dashboard 📰</h1>

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


const styles = {
  card: {
    background: "#fff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  btn: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};
