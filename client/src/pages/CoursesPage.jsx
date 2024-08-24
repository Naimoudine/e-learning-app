import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CourseList from "../components/courses/CourseList";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const { search } = useLocation();
  const filter = search.slice(3).replace(/%20/, " ");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/courses?q=${filter}`
        );
        if (!response.ok) {
          throw new Error("unknown error while getting courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchCourses();
  }, [search]);
  return (
    <section className="wrapper">
      {filter ? (
        <h1 className="">Courses about {filter}</h1>
      ) : (
        <h1 className="">All courses</h1>
      )}
      <div>
        {courses.length ? (
          <CourseList courses={courses} />
        ) : (
          <p className="mt-24 font-semibold text-center">
            No courses found for this category for the moment. <br /> Please
            comeback later and don't hesitate to try another category.
          </p>
        )}
      </div>
    </section>
  );
}
