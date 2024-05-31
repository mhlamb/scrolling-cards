import "./InfoPanel.css";

type Props = {
  image: string;
  title: string;
  children: string;
};

const InfoPanel = ({ image, children, title }: Props) => {
  return (
    <div className="infoPanel">
      <div className="infoPanel--text-container">
        <h2 className="infoPanel--text-title">{title}</h2>
        <p className="infoPanel--text">{children}</p>
        <button className="infoPanel--button">Discover more</button>
      </div>
      <img src={image} className="infoPanel--image" />
    </div>
  );
};

export default InfoPanel;
