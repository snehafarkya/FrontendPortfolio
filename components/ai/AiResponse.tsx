"use client";
import TypingText from "./TypingText";
import Projects from "../sections/Projects";
import Blogs from "../sections/Blogs";

export default function AIResponse({ response }: any) {
  if (!response) return null;

  return (
    <div className="mt-10 max-w-2xl mx-auto space-y-6">

      {/* STORY */}
      {response.type === "story" && (
        <TypingText text={response.content} />
      )}

      {/* TEXT */}
      {response.type === "text" && (
        <TypingText text={response.content} />
      )}

      {/* PROJECTS */}
      {response.type === "projects" && (
        <>
          <TypingText text={response.intro} />
          <Projects data={response.data} />
        </>
      )}

      {/* SKILLS */}
      {response.type === "skills" && (
        <>
          <TypingText text={response.intro} />
          <div className="flex flex-wrap gap-2">
            {response.data.map((skill: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/20 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}

      {/* EXPERIENCE */}
      {response.type === "experience" && (
        <>
          <TypingText text={response.intro} />
          <div className="space-y-4">
            {response.data.map((exp: any, i: number) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl">
                <h3 className="font-bold">{exp.company}</h3>
                <p className="text-sm opacity-70">{exp.duration}</p>
                <p className="text-sm mt-2">{exp.desc || exp.highlights?.[0]}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* BLOGS */}
      {response.type === "blogs" && (
        <>
          <TypingText text={response.intro} />
          <Blogs />
        </>
      )}
    </div>
  );
}