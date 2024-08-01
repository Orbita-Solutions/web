import { createPortal } from "react-dom";
import { useState } from "react";

import styles from "./MobileMenu.module.css";
import { useEscape } from "@hooks/useEscape";

export const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const closeSidebar = () => {
    setIsActive(false);
  };

  const openSidebar = () => {
    setIsActive(true);
  };

  const contactUs = () => {
    closeSidebar();
    // TODO: Scroll to contact us section
  };

  useEscape(closeSidebar);

  return (
    <>
      <button onClick={openSidebar} className={styles.openButton}>
        Menu
      </button>

      {createPortal(
        <aside
          className={`${styles.sidebar} ${
            isActive ? styles.open : styles.closed
          }`}
        >
          <section className={styles.sidebarContent}>
            <button className={styles.closeButton} onClick={closeSidebar}>
              Close
            </button>

            <div className={styles.menuItems}>
              <a href="">Our Work</a>
            </div>

            <button className={styles.contactUsButton} onClick={contactUs}>
              Contact Us
            </button>
          </section>
        </aside>,
        document.body
      )}
    </>
  );
};
