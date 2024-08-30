import { useLoaderData } from "react-router-dom";
import LessonList from "../components/lessons/LessonList";

export const loader = async ({ params }) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/courses/${params.id}`
    );
    if (!response.ok) {
      throw new Error("unknown error while getting course");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default function CoursePage() {
  const course = useLoaderData();
  return (
    <section className="wrapper">
      <div
        className="w-full h-48 rounded-lg"
        style={{ background: `url('${course.thumbnail}') top/cover` }}
      />
      <div className="flex items-center gap-8 mt-4">
        <p>Author</p>
        <p>rating</p>
      </div>
      <h1 className="mt-8">{course.title}</h1>
      <p className="mt-8">{course.description}</p>
      <div className="mt-8">
        <h2>Lessons</h2>
        <LessonList lessons={course.lessons} courseId={course.id} />
      </div>
      <button className="mt-8 btn bg-primary" type="button">
        Enroll
      </button>
    </section>
  );
}
