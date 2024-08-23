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
    { id: 1, image: art, title: "Art" },
    { id: 2, image: design, title: "Design" },
    { id: 3, image: dev, title: "Dev" },
    { id: 4, image: marketing, title: "Marketing" },
    { id: 5, image: photography, title: "Photography" },
    { id: 6, image: uxui, title: "UX/UI" },
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
          <Card key={item.id} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
