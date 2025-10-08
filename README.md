# 📰 Blog Dashboard

A simple **blog management dashboard** built using **Next.js (App Router)** that allows users to:
- View and search posts
- Read detailed post pages with comments
- Create and delete their own posts (using localStorage + mock API route)
- Mark and unmark favorites
- Explore basic API integration within Next.js

---

## 🚀 Features

### 🏠 Home Page
- Displays a list of posts fetched from `https://jsonplaceholder.typicode.com/posts`
- Includes a search bar to filter posts by title
- SSR (Server-Side Rendering) enabled for faster load and SEO

### 📄 Post Details
- Dynamic route `/posts/[id]`
- Fetches single post details and its comments
- Includes “Back to Home” navigation

### 📝 Create Post
- Form to create new posts
- Posts are saved locally (using `localStorage`)
- Mock API route `/api/posts` created to simulate server-side CRUD operations

### ❌ Delete Post
- Posts can be deleted from the “Create Post” page
- Automatically updates and persists in `localStorage`

### ⭐ Favorites
- Posts can be marked as “Favorite”
- Stored in `localStorage` and viewable on `/favorites`
- Option to remove from favorites

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | **Next.js 14 (App Router)** |
| Styling | Plain CSS + Inline Styles |
| API | JSONPlaceholder + Next.js API Routes |
| Data Storage | localStorage (Client-side) |
| Rendering | Server-Side Rendering (SSR) |
| Deployment | Vercel |

---

## 🧩 Folder Structure

app/
┣ api/
┃ ┗ posts/
┃ ┗ route.js # Mock API route for CRUD
┣ posts/
┃ ┗ [id]/page.jsx # Post details with comments
┣ create/page.jsx # Create + Delete posts
┣ favorites/page.jsx # Favorite posts
┗ page.jsx # Home page (SSR)
components/
┣ PostCard.jsx
┣ SearchBar.jsx
┗ Navbar.jsx


---

## 🧠 Learning & Approach

- Implemented **Next.js App Router** structure with `app/` directory  
- Used **fetch()** for both server-side and client-side data fetching  
- Integrated **localStorage** for post persistence and favorites  
- Used **Next.js API Routes** to simulate backend CRUD logic  
- Focused on **clean functionality** over UI polish (due to limited time)

---

## 💡 How to Run Locally

```bash
# 1 Clone the repository
git clone <your-repo-url>
cd blog-dashboard

# 2 Install dependencies
npm install

# 3 Run development server
npm run dev

# 4 Open in browser
http://localhost:3000/


Assumptions & Notes

The posts from JSONPlaceholder are mock data for testing only.

localStorage is used instead of an actual database due to assignment scope.

The app is optimized for desktop view (responsiveness not prioritized due to time constraint).

TypeScript was not used for simplicity, as not explicitly required.

Time Spent

| Task                         | Time         |
| ---------------------------- | ------------ |
| Setting up Next.js + routing | 1 hour       |
| Home & Post Details          | 1 hour       |
| Create + Delete + Favorites  | 2 hours      |
| API Route + Testing          | 1 hour       |
| Debugging + Documentation    | 1 hour       |
| **Total:**                   | **~6 hours** |


Deployment

This project is deployed using Vercel.
👉 Live Link: https://blog-dashboard-lake-pi.vercel.app/

ScreenShots
Home - https://drive.google.com/file/d/1zwgTHXMuWMZlhbezfIsaiL9sakYvUKZ1/view?usp=sharing

Search - https://drive.google.com/file/d/1ZeB99xYF_W_fZUADo66-KQAKPJqlVy3B/view?usp=sharing

Create-Post - https://drive.google.com/file/d/1-UMRw3r-CR0lpaqamjYwKvQ0KY1BVdVB/view?usp=sharing

Delete-Post - https://drive.google.com/file/d/1vxU4Sk2mgPuCQKSSvsGoyzL9w5bLZXnh/view?usp=sharing

Favourites - https://drive.google.com/file/d/1AMc9s5EZec6bClKK5w2e9venxQAf6gbC/view?usp=sharing

Author

Nikhil Jaisinghani
📧 Email: nikhiljaisinghani30@gmail.com
🌍 GitHub: https://github.com/JaisinghaniNikhil/BlogDashboard