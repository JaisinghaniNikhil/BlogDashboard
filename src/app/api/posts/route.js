
import { NextResponse } from "next/server";

let mockPosts = [];

export async function GET() {
  return NextResponse.json(mockPosts);
}

export async function POST(request) {
  const newPost = await request.json();

  if (!newPost.title || !newPost.body) {
    return NextResponse.json(
      { success: false, message: "Title and body are required" },
      { status: 400 }
    );
  }

  const created = { id: Date.now(), ...newPost };
  mockPosts.push(created);

  return NextResponse.json({
    success: true,
    message: "Post created successfully",
    post: created,
  });
}

export async function DELETE(request) {
  const { id } = await request.json();
  mockPosts = mockPosts.filter((post) => post.id !== id);

  return NextResponse.json({
    success: true,
    message: `Post with id ${id} deleted successfully`,
  });
}
