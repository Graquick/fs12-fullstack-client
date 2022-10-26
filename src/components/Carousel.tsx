import React, { ComponentState, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavButtons } from "utils/arrays";



const Carousel = () => {
    const {colors, count} = NavButtons()
    let trend = usePrevious(count)

    function usePrevious(state: ComponentState) {
      const [prevCount, setPrevCount] = useState(count);
      const [trend, setTrend] = useState(null || "");
      if (prevCount !== count) {
        setPrevCount(count);
        setTrend(count > prevCount ? "increasing" : "decreasing");
      }

      return trend;
    }

  return (
    <div className="relative flex items-center justify-center w-64 p-4 overflow-hidden text-3xl text-black card h-80 bg-stone-300">
      <AnimatePresence custom={trend}>
        <motion.div
          key={count}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          custom={trend}
          // transition={{duration: 1}}
          className={`absolute w-40 h-40 flex items-center justify-center ${
            colors[Math.abs(count) % 4]
          } card-body`}
        >
          {count}
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-0 right-0 text-xs">
        {trend && (
          <p>
            The count is <strong>{trend}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

const variants = {
    enter: (trend: any) => ({x: trend === 'increasing' ? 250 : -250, y: 150, scale: .25}),
    center: {x: 0, y: 0, scale: 1},
    exit: (trend: any) => ({x: trend === 'increasing' ? -250 : 250, y: 150, scale: .25})
}

export default Carousel