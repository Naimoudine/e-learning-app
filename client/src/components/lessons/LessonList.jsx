import { Link } from "react-router-dom";

export default function LessonList({ lessons, courseId }) {
  return (
    <div className="mt-4">
      <ul>
        {lessons.map((lesson) => (
          <li className="my-2 font-semibold" key={lesson.id}>
            <Link to={`/courses/${courseId}/lessons/${lesson.id}`}>
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
