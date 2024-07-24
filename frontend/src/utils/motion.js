export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const fadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.25 * index,
    },
  }),
};

export const slideIn = (direction) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -70 : 70,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.25 * index,
      },
    }),
  };
};
// export const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };
