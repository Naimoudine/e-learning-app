import { useState } from "react";
import Carousel from "../components/Carousel";
import Wavy from "../components/Wavy";
import dev from "../assets/images/dev.avif";
import Tag from "../components/Tag";

export default function HomePage() {
  const [filter, setFilter] = useState("");

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
            <article
              key={course.id}
              className="flex flex-col overflow-hidden text-black bg-white rounded-lg w-[225px] h-fit"
            >
              <div
                className="w-full h-[8rem]"
                style={{
                  background: `url('${course.thumbnail}') center/cover`,
                }}
              />
              <div className="flex flex-col gap-4 px-2 py-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-sm">{course.author}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="relative flex flex-col items-center text-black wrapper">
        <Wavy />
        <h2>Partners</h2>
      </section>
    </div>
  );
}
