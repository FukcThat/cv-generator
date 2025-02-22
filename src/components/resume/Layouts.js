export const layouts = {
  personalLeft: {
    name: "Newsapaper",
    gridTemplateColumns: "30% 70%",
    // image: "assets/layouts/personalLeft.png",
    sections: {
      left: ["personal", "skills", "languages"],
      right: ["experience", "education"],
    },
  },
  personalTop: {
    name: "Top Down",
    gridTemplateColumns: "1fr",
    // image: "assets/layouts/personalTop.png",
    sections: {
      full: ["personal", "experience", "education", "skills", "language"],
    },
  },
};
