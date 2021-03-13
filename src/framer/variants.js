export const navVariants = {
  initial: {
    // opacity: 0,
    x: 768,
  },
  enter: {
    // opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
  exit: {
    // opacity: 0,
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
