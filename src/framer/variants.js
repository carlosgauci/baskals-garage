// Framer-motion variants

// Mobile nav container, slides in from right
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

// Mobile nav items (logo, links)
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

// Animation for title container, to set staggerChildren on
export const titleContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

// Title children (individual words)
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

// Services section grid items
export const gridVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
}

// About us text
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

// Experience section items
export const sideVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
}

// Underline animation for whole title (About us)
export const underlineVariants = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
    transition: {
      duration: 0.5,
    },
  },
}

// Underline animation for single word (Services, Experience sections)
export const underlineSingle = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "95%",
    transition: {
      duration: 0.5,
    },
  },
}
