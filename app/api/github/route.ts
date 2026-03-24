import { portfolioData } from "@/data/portfolio";

export async function GET() {
  const res = await fetch(
    "https://api.github.com/users/snehafarkya/repos",
    { cache: "no-store" }
  );

  const repos = await res.json();

  // ✅ 1. curated repos (priority)
  const curated = portfolioData.projects
    .map((p) =>
      repos.find((r: any) =>
        r.name.toLowerCase().includes(p.github?.toLowerCase())
      )
    )
    .filter(Boolean);

  // ✅ 2. latest repos (fallback)
  const latest = repos
    .filter((r: any) => !r.fork)
    .sort(
      (a: any, b: any) =>
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
    )
    .slice(0, 6);

  // ✅ merge (no duplicates)
  const finalRepos = [
    ...curated,
    ...latest.filter(
      (l: any) => !curated.find((c: any) => c.id === l.id)
    )
  ].slice(0, 6);

  return Response.json(finalRepos);
}