import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import Wavy from "../components/Wavy";
import Tag from "../components/Tag";
import Partners from "../components/Partners";
import CourseList from "../components/courses/CourseList";

export const loader = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/courses`);
    if (!response.ok) {
      throw new Error("Error while getting courses");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default function HomePage() {
  const [filter, setFilter] = useState("");

  const courses = useLoaderData();

  return (
    <div className="relative">
      <div className="wrapper">
        <Wavy />
        <h1 className="text-4xl font-bold sm:text-6xl xl:text-7xl md:w-4/5 ">
          Access a wide range of courses taught by thousands of professionals on
          various topics.
        </h1>
      </div>
      <div className="mt-8 sm:mt-16 md:mt-24">
        <Carousel />
      </div>
      <section className="flex flex-col items-center text-white bg-black wrapper">
        <h2>Discover our courses</h2>
        <div className="flex flex-wrap items-center justify-center w-full gap-4 mt-16 md:w-3/4">
          {[
            "developpement",
            "business",
            "marketing",
            "art",
            "ux/ui",
            "design",
          ].map((tag) => (
            <Tag key={tag} tag={tag} filter={filter} setFilter={setFilter} />
          ))}
        </div>
        <CourseList courses={courses} />
      </section>
      <section className="relative flex flex-col items-center text-black wrapper">
        <Wavy />
        <h2>Partners</h2>
        <Partners />
      </section>
    </div>
  );
}
