import "./NavBar.css";

type Props = {
  title: string;
  cartOption: string;
};
const NavBar = ({ title, cartOption = "" }: Props) => {
  return (
    <div className="navbar">
      <h1 className="navbar--title">{title}</h1>
      <button className="navbar--cart">
        {cartOption ? "Proceed with " + cartOption + " Car" : "No Car Selected"}
      </button>
    </div>
  );
};

export default NavBar;
