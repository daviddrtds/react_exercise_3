import styles from "./WarningModal.module.css";

export default function WarningModal({ title, message, dismiss }) {
  return (
    <>
      <div onClick={dismiss} className={styles.background}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <button onClick={dismiss}>Got it!</button>
        </footer>
      </div>
    </>
  );
}
