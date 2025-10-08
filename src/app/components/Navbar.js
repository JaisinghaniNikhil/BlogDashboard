import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-link">🏠 Home</Link>
      <Link href="/create" className="nav-link">➕ Create</Link>
      <Link href="/favorites" className="nav-link">⭐ Favorites</Link>
    </nav>
  );
}
