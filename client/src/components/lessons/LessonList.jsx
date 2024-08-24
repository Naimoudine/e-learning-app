export default function LessonList({ lessons }) {
  return (
    <div className="mt-4">
      <ul>
        {lessons.map((lesson) => (
          <li className="my-2 font-semibold" key={lesson.id}>
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
