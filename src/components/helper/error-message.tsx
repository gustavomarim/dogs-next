import styles from "./error-message.module.css";

export default function ErrorMessage({ error }: { error: string }) {
  if (error === "") return null;

  return <p className={styles.error}>{error}</p>;
}
