import CourseCard from "./CourseCard";
import dev from "../../assets/images/categories/dev.avif";

export default function CourseList() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-8 mt-16">
      {[
        {
          id: 1,
          title: "Full typescript course for beginners",
          author: "The bald guy",
          enrolment: 35,
          thumbnail: dev,
        },
        {
          id: 2,
          title: "Full typescript course for beginners",
          author: "The bald guy",
          enrolment: 35,
          thumbnail: dev,
        },
        {
          id: 3,
          title: "Full typescript course for beginners",
          author: "The bald guy",
          enrolment: 35,
          thumbnail: dev,
        },
        {
          id: 4,
          title: "Full typescript course for beginners",
          author: "The bald guy",
          enrolment: 35,
          thumbnail: dev,
        },
        {
          id: 5,
          title: "Full typescript course for beginners",
          author: "The bald guy",
          enrolment: 35,
          thumbnail: dev,
        },
        {
          id: 6,
          title: "Full typescript course for beginners",
          author: "The bald guy",
          enrolment: 35,
          thumbnail: dev,
        },
      ].map((course) => (
        <CourseCard key={course} course={course} />
      ))}
    </div>
  );
}
