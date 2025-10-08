"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter((post) => post.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main>
      <Link href="/">← Back to Home</Link>
      <h1 style={{ color: "#0070f3" }}>⭐ Favorite Posts</h1>

      {favorites.length === 0 ? (
        <p>No favorite posts yet.</p>
      ) : (
        favorites.map((post) => (
          <div key={post.id} style={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleRemove(post.id)} style={styles.btn}>
               Remove
            </button>
          </div>
        ))
      )}
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
