import { useEffect, useState } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const loader = async ({ params }) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/courses/${params.courseId}/lessons`,
      {
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error("Unknown error while getting lessons");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default function LessonsPage() {
  const [currLesson, setCurrLesson] = useState({});
  const [content, setContent] = useState({});
  const [displayDesc, setDisplayDesc] = useState(true);
  const { pathname } = useLocation();
  const lessons = useLoaderData();
  const courseId = pathname.slice(9, pathname.length - 10);

  useEffect(() => {
    setCurrLesson(
      lessons.find((lesson) => lesson.id === Number(pathname.slice(19)))
    );
  }, [pathname]);

  const parseCotent = () => {
    if (currLesson && currLesson.content) {
      try {
        setContent(JSON.parse(currLesson.content));
      } catch (error) {
        console.error("Error parsing content:", error.message);
      }
    }
  };

  useEffect(() => {
    parseCotent();
  }, [currLesson]);

  console.log(content);

  return (
    <div className="flex w-full h-full border-t border-zinc-900">
      <div className="flex flex-col w-full gap-8 p-8 md:w-2/3">
        <h1 className="text-xl">{content?.titre}</h1>
        <iframe
          className="w-full "
          height="500"
          src={content?.video}
          title={content?.titre}
        />
        <div>
          <div className="flex gap-4 md:hidden">
            <button
              className={displayDesc ? `font-semibold` : ``}
              type="button"
              onClick={() => setDisplayDesc(true)}
            >
              Description
            </button>
            <button
              className={displayDesc ? `` : `font-semibold`}
              type="button"
              onClick={() => setDisplayDesc(false)}
            >
              Lessons
            </button>
          </div>
          {displayDesc ? (
            <article className="flex flex-col gap-4 md:hidden">
              <h2 className="text-lg">Description</h2>
              <p>{content?.description}</p>
              <SyntaxHighlighter
                className="rounded-lg"
                language="typescript"
                style={gradientDark}
              >
                {content?.exemple_code}
              </SyntaxHighlighter>
            </article>
          ) : (
            <article className="md:hidden">
              <h2 className="text-lg">Lessons</h2>
              <ul className="mt-4">
                {lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <Link
                      className="inline-block w-full p-4 hover:bg-gray-200"
                      to={`/courses/${courseId}/lessons/${lesson.id}`}
                    >
                      {lesson.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          )}
          <article className="flex-col hidden gap-4 md:flex">
            <h2 className="text-lg">Description</h2>
            <p>{content?.description}</p>
            <SyntaxHighlighter
              className="rounded-lg"
              language="typescript"
              style={gradientDark}
            >
              {content?.exemple_code}
            </SyntaxHighlighter>
          </article>
        </div>
      </div>
      <div className="hidden border-l md:w-1/3 md:block border-zinc-800">
        <ul>
          {lessons.map((lesson) => (
            <li className="border-b border-zinc-900" key={lesson.id}>
              <Link
                className="inline-block w-full px-4 py-6 hover:bg-gray-200"
                to={`/courses/${courseId}/lessons/${lesson.id}`}
              >
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
