import styles from "./MainTitle.module.scss";

export default function MainTitle() {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        <span>A Melhor Faculdade</span>
        <span>de Tecnologia</span>
      </h1>
    </div>
  );
}
