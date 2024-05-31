import { TCar } from "../types/types";
import Card from "./Card";
import "./CardGroup.css";

type Props = {
  cards: TCar[];
  selectedCard: number;
  onThumbnailClick: (index: number) => void;
  onItemSelected: (item: string) => void;
};

const CardGroup = ({
  cards,
  selectedCard,
  onThumbnailClick,
  onItemSelected,
}: Props) => {
  const { image, type, description, price } = cards[selectedCard];

  return (
    <>
      <div className="cardGroup">
        <div className="cardGroup--thumbnail-container">
          {cards.map((card, index) => (
            <button
              className="cardGroup--thumbnail"
              key={card.type}
              onClick={() => onThumbnailClick(index)}
            >
              {card.type}
            </button>
          ))}
        </div>
        <Card
          image={image}
          title={type}
          description={description}
          price={price}
          onSelected={(title: string) => {
            onItemSelected(title);
          }}
        ></Card>
      </div>
    </>
  );
};

export default CardGroup;
