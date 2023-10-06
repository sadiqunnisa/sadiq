import styles from "./Card.module.css";

function CardList(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardList;
