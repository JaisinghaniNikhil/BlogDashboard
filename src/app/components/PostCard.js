"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./PostCard.css";

export default function PostCard({ post }) {
  const [isFav, setIsFav] = useState(false);

  // Check if this post is already in favorites on mount
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.some((p) => p.id === post.id));
  }, [post.id]);

  const toggleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let updated;

    if (isFav) {
      // Remove from favorites
      updated = favs.filter((p) => p.id !== post.id);
    } else {
      // Add to favorites (avoid duplicates just in case)
      const alreadyExists = favs.some((p) => p.id === post.id);
      updated = alreadyExists ? favs : [...favs, post];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>

      <div className="card-actions">
        <Link href={`/posts/${post.id}`} className="read-more">
          Read More →
        </Link>

        <button onClick={toggleFavorite} className="fav-btn">
          {isFav ? "✅ Added to Favorites" : "☆ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
