import { useState } from "react";

export const ContactForm: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
