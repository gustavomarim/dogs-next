"use client";

import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/assets/dogs-footer.svg"
        width={28}
        height={22}
        alt="Dogs Footer"
        priority={false}
      />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}
