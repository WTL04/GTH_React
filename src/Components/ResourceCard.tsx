import "./ResourceCard.css";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
}

const ResourceCard = ({ image, title }: Props) => {
  return (
    <>
      <div className="resource-card-wrapper">
        <Link to="/" className="resource-card">
          <img src={image} alt="img" />
          <h1>{title}</h1>
        </Link>
      </div>
    </>
  );
};

export default ResourceCard;
