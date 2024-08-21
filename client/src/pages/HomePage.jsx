import Carousel from "../components/Carousel";
import Wavy from "../components/Wavy";

export default function HomePage() {
  return (
    <div className="relative">
      <Wavy />
      <h1 className="text-4xl sm:w-4/5 sm:text-6xl xl:text-7xl font-bold md:w-4/5 ">
        Access a wide range of courses taught by thousands of professionals on
        various topics.
      </h1>
      <div className="mt-16">
        <Carousel />
      </div>
    </div>
  );
}
