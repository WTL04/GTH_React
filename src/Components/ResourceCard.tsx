import "./ResourceCard.css";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  image: string;
  title: string;
}

const ResourceCard = ({ link, image, title }: Props) => {
  return (
    <>
      <div className="resource-card-wrapper">
        <Link to={link} className="resource-card">
          <img src={image} alt="img" />
          <h1>{title}</h1>
        </Link>
      </div>
    </>
  );
};

export default ResourceCard;
