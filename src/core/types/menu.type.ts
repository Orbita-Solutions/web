type MenuItem = {
  label: string;
  url: string;
};

export type Menu = {
  logoImage: string;
  items: {
    work: MenuItem;
    contact: MenuItem;
  };
  mobileButtons: {
    open: string;
    close: string;
  };
};
