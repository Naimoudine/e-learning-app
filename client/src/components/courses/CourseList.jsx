import { useLocation } from "react-router-dom";
import CourseCard from "./CourseCard";

export default function CourseList({ courses }) {
  const { pathname } = useLocation();
  return (
    <div
      className={
        pathname.slice(1) !== "courses"
          ? `flex flex-wrap items-center justify-center w-full gap-8 mt-16`
          : `flex flex-wrap items-center justify-start w-full gap-8 mt-16`
      }
    >
      {courses.map((course) => (
        <CourseCard key={course} course={course} />
      ))}
    </div>
  );
}
