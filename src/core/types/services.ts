type Service = {
  name: string;
  description: string;
  originalName: string;
  iconName: string;
};

export type ServicesData = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  services: Service[];
};
