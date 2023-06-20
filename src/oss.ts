export type OssExperience = {
  start: string,
  established?: boolean,
  organization: string;
  description: string;
};

export const oss: OssExperience[] = [
  {
    start: "2021-04",
    established: true,
    organization: "Metashine",
    description: "Modern, attractive and beginner-friendly ID3 editor made with Rust, Electron and Svelte.",
  },

  {
    start: "2021-10",
    established: true,
    organization: "vite-plugin-fs",
    description: "Vite plugin that allows develoeprs to interact with Node fs from the browser.",
  },

  {
    start: "2022-07",
    established: true,
    organization: "Interfacer",
    description: "Cross-platform Tauri application that maps shell scripts to an intuitive UI.",
  },
];

export default oss;
