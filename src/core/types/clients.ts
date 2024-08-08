import type { Image } from "./image";

type Client = {
  name: string;
  logo: Image;
  siteUrl: string;
};

export type ClientsData = {
  clients: Client[];
};
