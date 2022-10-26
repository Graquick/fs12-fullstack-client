import { AnimatePresence, motion } from "framer-motion";
import { NavButtons } from "utils/arrays";
import {  next, previous } from 'features/carousel/carouselSlice'

const Thumbnail = () => {
  const { colors, count, dispatch } = NavButtons();

  const buttons = [
    {
      id: 1,
      initial: { scale: 0.75, opacity: 0.5 },
      onClick: () => dispatch(previous()),
      class: colors[Math.abs(count - 1) % 4],
      count: count - 1,
    },
    {
      id: 2,
      initial: { scale: 1.25 },
      class: colors[Math.abs(count) % 4],
      count: count,
    },
    {
      id: 3,
      initial: { scale: 0.75, opacity: 0.5 },
      onClick: () => dispatch(next()),
      class: colors[Math.abs(count + 1) % 4],
      count: count + 1,
    },
  ];

  return (
    <div className="flex gap-4 font-medium text-black">
      <AnimatePresence>
        {buttons.map(btn => {
            return (
              <motion.div
              key={btn.id}
                initial={btn.initial}
                onClick={btn.onClick}
                className={`${btn.class} p-4 cursor-pointer`}
              >
                {btn.count}
              </motion.div>
            );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Thumbnail;
