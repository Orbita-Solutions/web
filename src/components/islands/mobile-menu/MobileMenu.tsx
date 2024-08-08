import { createPortal } from "react-dom";
import { useState } from "react";

import styles from "./MobileMenu.module.css";
import { useEscape } from "@hooks/useEscape";
import type { Menu } from "@core/types/menu.type";

export const prerender = false;

type Props = {
  openLabel: string;
  closeLabel: string;
  items: Menu["items"];
};
export const MobileMenu: React.FC<Props> = ({
  openLabel,
  closeLabel,
  items,
}) => {
  const [isActive, setIsActive] = useState(false);

  const closeSidebar = () => {
    setIsActive(false);
  };

  const openSidebar = () => {
    setIsActive(true);
  };

  const contactUs = (url: string) => {
    closeSidebar();

    document.querySelector(url)?.scrollIntoView();
  };

  useEscape(closeSidebar);

  return (
    <>
      <button onClick={openSidebar} className={styles.openButton}>
        {openLabel}
      </button>

      {createPortal(
        <aside
          className={`${styles.sidebar} ${
            isActive ? styles.open : styles.closed
          }`}
        >
          <section className={styles.sidebarContent}>
            <button className={styles.closeButton} onClick={closeSidebar}>
              {closeLabel}
            </button>

            <div className={styles.menuItems}>
              <a href={items.work.url}>{items.work.label}</a>
            </div>

            <button
              className={styles.contactUsButton}
              onClick={() => {
                contactUs(items.contact.url);
              }}
            >
              {items.contact.label}
            </button>
          </section>
        </aside>,
        document.body
      )}
    </>
  );
};
