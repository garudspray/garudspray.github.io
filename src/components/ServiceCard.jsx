import { Link } from "react-router-dom";

function ServiceCard({ service, language = "en" }) {
  const prefix = language === "hi" ? "/hi" : "";

  return (
    <article className="service-card">
      <div className="service-icon">{service.icon}</div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <Link to={`${prefix}/services`} className="text-link">
        {language === "hi" ? "और जानें →" : "Learn more →"}
      </Link>
    </article>
  );
}

export default ServiceCard;
