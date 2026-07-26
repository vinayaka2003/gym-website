import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.loading}>
      <div className={styles.wrapper}>
        <div className={styles.spinner}></div>

        <h2>Loading...</h2>

        <p>Please wait while we prepare your experience.</p>
      </div>
    </main>
  );
}