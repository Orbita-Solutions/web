import type { Image } from "./image";

type MenuItem = {
  label: string;
  url: string;
};

export type Menu = {
  logoImage: Image;
  items: {
    work: MenuItem;
    contact: MenuItem;
  };
  mobileButtons: {
    open: string;
    close: string;
  };
};
