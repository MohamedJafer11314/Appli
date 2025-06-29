import { NextResponse } from "next/server";

let tasks: { id: number; text: string; done: boolean }[] = [];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const { text } = await request.json();
  const newTask = { id: Date.now(), text, done: false };
  tasks.push(newTask);
  return NextResponse.json(newTask);
}

export async function PUT(request: Request) {
  const { id, done } = await request.json();
  tasks = tasks.map(t => t.id === id ? { ...t, done } : t);
  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  tasks = tasks.filter(t => t.id !== id);
  return NextResponse.json({ success: true });
}
