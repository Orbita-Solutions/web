import type { Image } from "./image";

type Project = {
  title: string;
  description: string;
  attributes: string[];
  bannerImage: Image;
  projectUrl: string;
};

export type ProjectsData = {
  title: string;
  subtitle: string;
  button: {
    label: string;
    url: string;
  };
  projects: Project[];
};
