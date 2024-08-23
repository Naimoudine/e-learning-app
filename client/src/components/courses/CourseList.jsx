import CourseCard from "./CourseCard";

export default function CourseList({ courses }) {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-8 mt-16">
      {courses.map((course) => (
        <CourseCard key={course} course={course} />
      ))}
    </div>
  );
}
