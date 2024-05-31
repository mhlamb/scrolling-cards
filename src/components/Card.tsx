import "./Card.css";

type Props = {
  image: string;
  title: string;
  description: string;
  price: number;
  onSelected: (title: string) => void;
};

const Card = ({ image, title, description, price, onSelected }: Props) => {
  return (
    <div className="card--container">
      <img src={image} className="card--image" />
      <div className="card--description-container">
        <div className="card--title-container">
          <h2 className="card--title">{title}</h2>
          <button
            className="card--button b-hover"
            onClick={() => onSelected(title)}
          >
            Book
          </button>
        </div>

        <p className="card--description">{description}</p>
        <p className="card--price">Price: £{price}/day</p>
      </div>
    </div>
  );
};

export default Card;
