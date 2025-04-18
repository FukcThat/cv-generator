export const layouts = {
  personalLeft: {
    name: "Newspaper",
    gridTemplateColumns: "30% 70%",
    image: "layouts/layout-newspaper.png",
    sections: {
      left: ["personal", "skills", "languages"],
      right: ["experience", "education"],
    },
  },
  personalTop: {
    name: "Top Down",
    gridTemplateColumns: "1fr",
    image: "layouts/layout-topdown.png",
    sections: {
      full: ["personal", "experience", "education", "skills", "languages"],
    },
  },
  personalRight: {
    name: "Right Column",
    gridTemplateColumns: "70% 30%",
    image: "layouts/layout-rightcolumn.png",
    sections: {
      left: ["experience", "education"],
      right: ["personal", "skills", "languages"],
    },
  },
};
