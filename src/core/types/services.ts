import type { Image } from "./image";

type Service = {
  name: string;
  description: string;
  originalName: string;
  iconName: string;
  image: Image;
  longDescription: string;
};

export type ServicesData = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  services: Service[];
};
