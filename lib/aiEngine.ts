import { portfolioData } from "@/data/portfolio";

function random(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function includesAny(text: string, keywords: string[]) {
  return keywords.some(k => text.includes(k));
}

export function getAIResponse(input: string) {
  const text = input.toLowerCase();

  // --- ABOUT ---
  if (includesAny(text, ["who", "about", "yourself", "tell me"])) {
    return {
      type: "story",
      content: `
Alright, here’s a bit about me.

${portfolioData.about}
${portfolioData.personality}
`
    };
  }

  // --- PROJECTS ---
  if (includesAny(text, ["project", "build", "work", "portfolio"])) {
    return {
      type: "projects",
      intro: "Here are some things I’ve built:",
      data: portfolioData.projects
    };
  }

  // --- SKILLS ---
  if (includesAny(text, ["skill", "tech", "stack", "tools"])) {
    return {
      type: "skills",
      intro: "Here’s my current tech stack:",
      data: portfolioData.skills
    };
  }

  // --- EXPERIENCE ---
  if (includesAny(text, ["experience", "job", "intern", "career"])) {
    return {
      type: "experience",
      intro: "Here’s my journey so far:",
      data: portfolioData.experience
    };
  }

  // --- BLOGS ---
  if (includesAny(text, ["blog", "write", "article"])) {
    return {
      type: "blogs",
      intro: "I write about tech and my journey:"
    };
  }

  return {
    type: "text",
    content: `
Hmm I didn’t catch that 🤔

Try asking:
• "show projects"
• "skills"
• "experience"
• "blogs"
`
  };
}