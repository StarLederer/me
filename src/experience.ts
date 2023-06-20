export type Experience = {
  start: string,
  end?: string,
  organization: string;
  role: string;
  achievements: string[];
};

export type Experiences = Experience[];

export const experience: Experiences = [
  {
    start: "2019-10",
    end: "2021-01",
    organization: "Hanze University of Applied Sciences",
    role: "Student assistant",
    achievements: [
      // "Introduced students to crafts, laser cutting and 3D printing",
      "Helped students increase their grades by 20%",
      "Convinced multiple students not to drop out",
      "Assisted students in Unity and Web development",
    ],
  },

  {
    start: "2021-02",
    end: "2021-06",
    organization: "Digital Chef",
    role: "Graphics engineering intern",
    achievements: [
      "Completed the initial internship assignment 5 months ahead of schedule",
      // "Implemented a subsurface scattering effect that made Digital Chefs 3D fool models look \"delicious\"",
      // "Reamde one of DigitalChefs websites with Nuxt which allowed for easy internationalization",
      "Developed multiple AR applications that landed DigitalChef 2 new clients",
    ],
  },

  {
    start: "2021-05",
    end: "2022-01",
    organization: "Odyssey",
    role: "Unity & web developer",
    achievements: [
      "Created a procedural 3D animation that helped Odyssey acquire investors",
      "Prototyped a new asset architecture that enabled Odyssey to scale their product",
    ],
  },

  // This entry is hidden due to confusing relationship with "WordPress theme developer".
  // {
  //   start: "2021-07",
  //   end: "2021-08",
  //   organization: "Digital Chef",
  //   role: "Prototype developer",
  //   achievements: [
  //     "Developed an online store concept that landed DigitalChef a presentation with Unilever",
  //   ],
  // },

  // This entry is not really correct.
  {
    start: "2021-07",
    end: "2022-03",
    organization: "Digital Chef",
    role: "Front-end developer",
    achievements: [
      "Took critical decision in designing the tech-stack",
      "Built 3 separate projects using Unity, Vue, Nuxt and Wordpress",
      "Developed concept that landed DigitalChef a presentation with Unilever",
    ],
  },

  // {
  //   start: "2021-12",
  //   end: "2022-03",
  //   organization: "Digital Chef",
  //   role: "WordPress theme developer",
  //   achievements: [
  //     "Helped Digital Chef restart their brand by building a new website",
  //     "Achieved full GDPR compliance on Digital Chef's new website",
  //   ],
  // },

  {
    start: "2022-02",
    end: "2022-06",
    organization: "Odyssey",
    role: "Graduation thesis on the Momentum metaverse",
    achievements: [
      "Conducted user research that helped identify metaverse use-cases",
      "Built a well-received mobile prototype using React Native",
    ],
  },

  // This is just straight up fiction.
  {
    start: "2023-02",
    // end: "2023-07",
    organization: "DTT",
    role: "Front-end developer",
    achievements: [
      "Collaborated in an agile team",
      "Played a key role in Vite adoption",
      "Assisted interns in their learning process",
    ],
  },
];

export default experience;
