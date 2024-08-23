import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  return (
    <article
      aria-label="go to course page"
      key={course.id}
      role="presentation"
      className="flex flex-col overflow-hidden text-black bg-white rounded-lg w-[225px] h-fit shadow-lg cursor-pointer"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      <div
        className="w-full h-[8rem] "
        style={{
          background: `url('${course.thumbnail}') center/cover`,
        }}
      />
      <div className="flex flex-col gap-4 px-2 py-4">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="text-sm">{course.author}</p>
      </div>
    </article>
  );
}
