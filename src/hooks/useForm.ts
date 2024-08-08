import { useState } from "react";

type FormState<T> = T;

const useForm = <T extends Record<string, any>>(initialState: FormState<T>) => {
  const [formState, setFormState] = useState<FormState<T>>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    apiUrl: string
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Handle successful form submission (e.g., show a success message, clear the form, etc.)
      setFormState(initialState);
      setMessage("Mensaje enviado correctamente.");
    } catch (err: any) {
      setMessage("Error al enviar el correo electronico.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formState,
    isSubmitting,
    message,
    handleChange,
    handleSubmit,
    setMessage,
  };
};

export default useForm;
