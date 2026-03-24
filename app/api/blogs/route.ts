// app/api/blogs/route.ts

export async function GET() {
  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query {
        publication(host: "snehafarkya.hashnode.dev") {
          posts(first: 5) {
            edges {
              node {
                title
                brief
                slug
                url
                publishedAt
              }
            }
          }
        }
      }
      `,
    }),
  });

  const json = await res.json();

  const posts =
    json?.data?.publication?.posts?.edges?.map((e: any) => e.node) || [];

  return Response.json(posts);
}