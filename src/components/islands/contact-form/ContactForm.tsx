import type { Help } from "@core/types/help";
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

type Props = {
  formLabels: Help["form"];
};

export const ContactForm: React.FC<Props> = ({ formLabels }) => {
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
      setMessage(
        "Cuéntanos cuál es tu objetivo para que podamos orientarte mejor."
      );
      return;
    } else if (formState.name.trim() === "") {
      setMessage("Por favor, dinos cómo te llamas para poder ayudarte.");
      return;
    } else if (formState.phone.trim() === "") {
      setMessage("Necesitamos tu número de teléfono para poder contactarte.");
      return;
    }

    handleSubmit(event, "/api/contact");
  };

  return (
    <form className={styles.form} noValidate onSubmit={onSubmit}>
      <div>
        <label htmlFor="goal">{formLabels.goal}</label>
        <input
          id="goal"
          type="text"
          required
          value={formState.goal}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="name">{formLabels.name}</label>
        <input
          id="name"
          type="text"
          required
          value={formState.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone">{formLabels.phone}</label>
        <input
          id="phone"
          type="tel"
          required
          value={formState.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">{formLabels.email}</label>
        <input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="company">{formLabels.company}</label>
        <input
          id="company"
          type="text"
          required
          value={formState.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">{formLabels.country}</label>
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
        {isSubmitting ? "Enviando..." : formLabels.buttonLabel}
      </button>
    </form>
  );
};
