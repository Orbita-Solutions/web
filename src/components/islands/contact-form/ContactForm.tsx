import styles from "./ContactForm.module.css";
import useForm from "@hooks/useForm";

interface ContactFormState {
  company: string;
  country: string;
  email: string;
  goal: string;
  name: string;
  phone: string;
}

const initialState: ContactFormState = {
  company: "",
  country: "",
  email: "",
  goal: "",
  name: "",
  phone: "",
};

export const ContactForm: React.FC = () => {
  const {
    formState,
    isSubmitting,
    message,
    handleChange,
    handleSubmit,
    setMessage,
  } = useForm<ContactFormState>(initialState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState.goal.trim() === "") {
      setMessage("El Campo Objetivo es requerido.");
      return;
    } else if (formState.name.trim() === "") {
      setMessage("El Campo Nombre es requerido.");
      return;
    } else if (formState.phone.trim() === "") {
      setMessage("El Campo Telefono es requerido.");
      return;
    }

    handleSubmit(event, "/api/contact");
  };

  return (
    <form className={styles.form} noValidate onSubmit={onSubmit}>
      <div>
        <label htmlFor="goal">Your goal</label>
        <input
          id="goal"
          type="text"
          required
          value={formState.goal}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          value={formState.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Your Phone number</label>
        <input
          id="phone"
          type="tel"
          required
          value={formState.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Your Email Address</label>
        <input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          required
          value={formState.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          required
          value={formState.country}
          onChange={handleChange}
        />
      </div>

      {message && <p className={styles.message}>{message}</p>}

      <button className={styles.btn} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Let's Talk"}
      </button>
    </form>
  );
};
