export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const flipVariant = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
  exit: { rotateX: -90, opacity: 0 }
};

export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};