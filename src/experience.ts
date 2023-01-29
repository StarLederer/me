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
    start: "2021-04",
    organization: "Metashine",
    role: "Open-source Electron developer",
    achievements: [
      "Built clean and modern UI using Vite, Svelte and Electron",
      "Developed a NAPI module in Rust that made Metashine ID3 compliant",
      "Handled GitHub issues and multiple fixed bugs",
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
  {
    start: "2021-07",
    end: "2021-08",
    organization: "Digital Chef",
    role: "Prototype developer",
    achievements: [
      "Developed an online store concept that landed DigitalChef a presentation with Unilever",
    ],
  },
  {
    start: "2021-10",
    organization: "vite-plugin-fs",
    role: "Open-source Node developer",
    achievements: [
      "Built an open source Vite plugin that is downloaded over 100 times weekly",
    ],
  },
  {
    start: "2021-12",
    end: "2022-03",
    organization: "Metachef (form. DigitalChef)",
    role: "WordPress developer",
    achievements: [
      "Helped Metachef restart their brand by building a new website",
      "Achieved full GDPR compliance on Metachef's new website",
    ],
  },
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
  {
    start: "2022-07",
    organization: "Interfacer",
    role: "Open-source Tauri developer",
    achievements: [
      "Developed cross-platform UI using Svelte, UnoCSS and Tauri",
      "Implemented a robust app backend with Rust",
    ],
  },
];

export default experience;
