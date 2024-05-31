import Carousel from "react-multi-carousel";
import Card from "./Card";
import { TCar } from "../types/types";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type Props = {
  cards: TCar[];
};

const ScrollingCards = ({ cards }: Props) => {
  return (
    <Carousel responsive={responsive}>
      {cards.map((card) => (
        <Card
          image={card.image}
          title={card.type}
          description={card.description}
          price={card.price}
          onSelected={() => {}}
          key={card.type}
        ></Card>
      ))}
    </Carousel>
  );
};

export default ScrollingCards;
