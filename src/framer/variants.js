export const navVariants = {
  initial: {
    x: 768,
  },
  enter: {
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
  exit: {
    x: 768,
    transition: { duration: 0.35 },
  },
}

export const navItemVariants = {
  hiddenLogo: {
    opacity: 0,
  },
  showLogo: {
    opacity: 1,
  },

  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
}

export const titleContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    // transition: {
    //   staggerChildren: 0.3,
    //   ease: "linear",
    // },
  },
}

export const titleChildren = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const gridVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "linear",
    },
  },
}

export const aboutVariants = {
  initial: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: "linear",
    },
  },
}

export const sideVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "linear",
    },
  },
}

export const underlineVariants = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
}

export const underlineSingle = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "90%",
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
}
