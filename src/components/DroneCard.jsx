import { Link } from "react-router-dom";

function DroneCard({ drone, language = "en" }) {
  const isHindi = language === "hi";

  return (
    <article className="drone-card">
      <img
        src={drone.image}
        alt={isHindi ? drone.nameHi : drone.name}
        className="drone-image"
      />

      <div className="drone-card-content">
        <span className="drone-brand">{drone.brand}</span>

        <h3>{isHindi ? drone.nameHi : drone.name}</h3>

        <p>
          {isHindi ? drone.descriptionHi : drone.description}
        </p>

        <div className="drone-meta">
          <strong>
            ₹{Number(drone.price).toLocaleString("en-IN")}
          </strong>

          <span>Popularity: {drone.popularity}</span>
        </div>

        <Link
          to={`${isHindi ? "/hi" : ""}/marketplace/${drone.id}`}
          className="button button-primary"
        >
          {isHindi ? "विवरण देखें" : "View Details"}
        </Link>
      </div>
    </article>
  );
}

export default DroneCard;
