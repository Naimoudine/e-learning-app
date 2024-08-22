import { useEffect } from "react";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import art from "../assets/images/categories/art.avif";
import design from "../assets/images/categories/design.avif";
import dev from "../assets/images/categories/dev.avif";
import marketing from "../assets/images/categories/marketing.avif";
import photography from "../assets/images/categories/photography.avif";
import uxui from "../assets/images/categories/uxui.avif";
import Card from "./Card";

export default function Carousel() {
  const images = [
    { image: art, title: "Art" },
    { image: design, title: "Design" },
    { image: dev, title: "Dev" },
    { image: marketing, title: "Marketing" },
    { image: photography, title: "Photography" },
    { image: uxui, title: "UX/UI" },
  ];

  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -width / 2;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 75,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div>
      <motion.div
        className="left-0 flex w-fit h-fit"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...images, ...images].map((item) => (
          <Card key={item?.title} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
