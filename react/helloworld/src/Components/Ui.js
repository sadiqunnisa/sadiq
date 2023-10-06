import CardList from "./CardList";
import styles from "./Card.module.css";

function Ui(props) {
  return (
    <div className={styles.main}>
      {props.cards.map((card) => (
        <CardList
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Ui;
