"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

// serif = highlighted word in the display serif, gold
const text: { w: string; serif?: boolean }[] = [
  { w: "WE" },
  { w: "TURN" },
  { w: "SPACES" },
  { w: "INTO" },
  { w: "timeless", serif: true },
  { w: "interiors,", serif: true },
  { w: "WITH" },
  { w: "AUTHENTIC" },
  { w: "Made", serif: true },
  { w: "in", serif: true },
  { w: "Italy", serif: true },
  { w: "MATERIALS," },
  { w: "METICULOUS" },
  { w: "DETAIL" },
  { w: "AND" },
  { w: "Italian", serif: true },
  { w: "PROJECT" },
  { w: "MANAGEMENT" },
  { w: "FROM" },
  { w: "first", serif: true },
  { w: "consultation", serif: true },
  { w: "TO" },
  { w: "the", serif: true },
  { w: "final", serif: true },
  { w: "key.", serif: true },
];

function Word({
  w,
  serif,
  i,
  total,
  progress,
}: {
  w: string;
  serif?: boolean;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = i / total;
  const end = start + 1.6 / total;
  const opacity = useTransform(progress, [start, Math.min(end, 1)], [0.14, 1]);

  return (
    <motion.span className={serif ? "mWord serif" : "mWord"} style={{ opacity }}>
      {w}{" "}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  return (
    <section className="manifesto" ref={ref}>

      <p>
        {text.map((t, i) => (
          <Word
            key={i}
            w={t.w}
            serif={t.serif}
            i={i}
            total={text.length}
            progress={scrollYProgress}
          />
        ))}
      </p>

    </section>
  );
}
