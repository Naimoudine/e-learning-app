import { useEffect } from "react";
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import art from "../assets/images/art.avif";
import design from "../assets/images/design.avif";
import dev from "../assets/images/dev.avif";
import marketing from "../assets/images/marketing.avif";
import photography from "../assets/images/photography.avif";
import uxui from "../assets/images/uxui.avif";
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
        className="w-fit h-fit left-0 flex"
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
