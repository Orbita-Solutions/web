type FooterLink = {
  label: string;
  url: string;
};

export type Footer = {
  links: {
    services: FooterLink;
    projects: FooterLink;
    instagram: FooterLink;
    linkedin: FooterLink;
    work: FooterLink;
  };
  talkWithUs: string;
  email: string;
};
