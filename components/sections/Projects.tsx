"use client";
import { useEffect, useState } from "react";
import GlassCard from "../ui/GlassCard";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("/api/github")
      .then(res => res.json())
      .then(setRepos);
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {repos.map((repo: any) => (
        <GlassCard key={repo.id}>
          <h3 className="font-bold">{repo.name}</h3>
          <p className="text-sm">{repo.description}</p>
        </GlassCard>
      ))}
    </div>
  );
}