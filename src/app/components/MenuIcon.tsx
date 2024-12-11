"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./MenuIcon.module.css"; // Optional for custom styling

export const MenuIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      {/* Menu Icon Button */}
      <button
        className={`btn ${styles.menuButton}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Responsive Menu Drawer */}
      <div
        className={`${styles.menuDrawer} ${isOpen ? styles.open : ""}`}
      >
        <ul className={styles.menuList}>
          <li onClick={() => router.push("/")}>Home</li>
          <li onClick={() => router.push("/about")}>About</li>
          <li onClick={() => router.push("/contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};
