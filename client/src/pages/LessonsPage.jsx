import { useEffect, useState } from "react";
import { useLoaderData, useLocation, Link } from "react-router-dom";

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

  return (
    <div className="flex w-full h-full border-t border-zinc-900">
      <div className="flex flex-col w-2/3 gap-8 p-8">
        <h1 className="text-xl">{content?.titre}</h1>
        <iframe
          className="w-full "
          height="345"
          src={content?.video}
          title={content?.titre}
        />
        <p>{content?.description}</p>
        <code className="p-4 rounded-lg bg-zinc-300">
          {content?.exemple_code}
        </code>
      </div>
      <div className="w-1/3 border-l border-zinc-800">
        <ul>
          {lessons.map((lesson) => (
            <li className="p-4 border-b border-zinc-900" key={lesson.id}>
              <Link to={`/courses/${courseId}/lessons/${lesson.id}`}>
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
