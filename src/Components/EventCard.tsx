import "./EventCard.css"; // Assuming you will create a CSS file for styling
import { useState } from "react";

interface Props {
  date: string;
  title: string;
  location: string;
  mapLink: string;
  isDetailed: boolean;
  description: string;
}

const EventCard = ({
  date,
  title,
  location,
  mapLink,
  isDetailed,
  description,
}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // toggles isExpanded off and on, onClick
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card-center-wrapper">
      <div className="card">
        <div className="card-hero">
          <div className="date-overlay">{date}</div>
        </div>

        <div className="card-content">
          <h1>{title}</h1>
          <div className="location">
            <img src="/images/dropPin.png" alt="pin" />
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              {location}
            </a>
          </div>

          {isDetailed && (
            <div className="button-wrapper">
              <button className="extra-button" onClick={handleToggle}>
                <span>{isExpanded ? "Show Less" : "See Details"}</span>
              </button>
            </div>
          )}

          <div className="extra">
            {isExpanded && (
              <div className="expandable">
                <small className="text-body-secondary">{description}</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
