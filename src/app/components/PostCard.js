"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./PostCard.css";

export default function PostCard({ post }) {
  const [favorites, setFavorites] = useState([]);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
    setIsFav(favs.some((p) => p.id === post.id));
  }, [post.id]);

  const toggleFavorite = () => {
    let updated;
    if (isFav) {
      updated = favorites.filter((p) => p.id !== post.id);
    } else {
      updated = [...favorites, post];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
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
          {isFav ? " Added To Favourites" : "☆ Add to Favourites"}
        </button>
      </div>
    </div>
  );
}
