import { Link, useParams } from "react-router-dom";

import { drones } from "../data/drones";

function DroneDetails({ language = "en" }) {
  const { droneId } = useParams();
  const drone = drones.find((item) => item.id === droneId);

  const isHindi = language === "hi";

  if (!drone) {
    return (
      <section className="section page-section">
        <div className="container">
          <h1>{isHindi ? "ड्रोन नहीं मिला" : "Drone not found"}</h1>
          <Link to="/marketplace" className="button button-primary">
            {isHindi ? "मार्केटप्लेस पर जाएं" : "Back to Marketplace"}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <div className="container drone-details">
        <div>
          <img
            src={drone.image}
            alt={isHindi ? drone.nameHi : drone.name}
            className="drone-detail-image"
          />
        </div>

        <div>
          <span className="drone-brand">{drone.brand}</span>

          <h1>{isHindi ? drone.nameHi : drone.name}</h1>

          <p>
            {isHindi ? drone.descriptionHi : drone.description}
          </p>

          <h2 className="price">
            ₹{Number(drone.price).toLocaleString("en-IN")}
          </h2>

          <p>
            <strong>
              {isHindi ? "उपलब्धता:" : "Availability:"}
            </strong>{" "}
            {drone.availability}
          </p>

          <h3>{isHindi ? "विशेषताएं" : "Features"}</h3>

          <ul className="feature-list">
            {drone.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h3>{isHindi ? "तकनीकी विवरण" : "Specifications"}</h3>

          <div className="specification-table">
            {Object.entries(drone.specifications).map(
              ([key, value]) => (
                <div className="specification-row" key={key}>
                  <strong>{key}</strong>
                  <span>{value}</span>
                </div>
              )
            )}
          </div>

          <Link
            to={isHindi ? "/hi/contact" : "/contact"}
            className="button button-primary"
          >
            {isHindi ? "पूछताछ करें" : "Send Enquiry"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DroneDetails;
