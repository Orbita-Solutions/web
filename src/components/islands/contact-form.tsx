import styles from "./contact-form.module.css";
import useForm from "@hooks/useForm";
interface ContactFormState {
  goal: string;
  email: string;
  name: string;
  company: string;
  country: string;
}

export const ContactForm: React.FC = () => {
  const initialState: ContactFormState = {
    goal: "",
    email: "",
    name: "",
    company: "",
    country: "",
  };

  const { formState, isSubmitting, error, handleChange, handleSubmit } =
    useForm<ContactFormState>(initialState);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    handleSubmit(event, "/api/contact");

  return (
    <form className={styles.form} noValidate onSubmit={onSubmit}>
      <div>
        <label htmlFor="goal">Your goal</label>
        <input
          id="goal"
          type="text"
          value={formState.goal}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          value={formState.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
          value={formState.country}
          onChange={handleChange}
        />
      </div>

      <button className={styles.btn} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Let's Talk"}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};
