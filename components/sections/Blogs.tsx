"use client";
import { useEffect, useState } from "react";
import GlassCard from "../ui/GlassCard";
import Link from "next/link";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {blogs.map((b: any) => (
        <GlassCard key={b.id}>
          <h3>{b.title}</h3>
          <Link href={b.url} target="_blank" className="underline underline-offset-2">Read here</Link>
        </GlassCard>
      ))}
    </div>
  );
}