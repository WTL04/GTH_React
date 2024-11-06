import "./LeaderCard.css";

interface Props {
  image: string;
  rank: string;
  name: string;
}

function LeaderCard({ image, rank, name }: Props) {
  return (
    <>
      <div className="leader-card-center-wrapper">
        <div className="leader-card">
          <img src={image} alt="img" />
          <h2>{rank}</h2>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}

export default LeaderCard;
