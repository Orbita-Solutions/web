type Contact = {
  role: string;
  name: string;
  phoneApi: string;
  phone: string;
  email: string;
};

export type Help = {
  title: string;
  description: string;
  buttonLabel: string;
  founder: Contact;
  admin: Contact;
  commercial: Contact;
  form: {
    company: string;
    country: string;
    email: string;
    goal: string;
    name: string;
    phone: string;
    buttonLabel: string;
  };
};
