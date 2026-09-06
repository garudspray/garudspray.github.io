import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

function Services({ language = "en" }) {
  const isHindi = language === "hi";

  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">GarudSpray</span>
          <h1>{isHindi ? "हमारी सेवाएं" : "Our Services"}</h1>
          <p>
            {isHindi
              ? "पश्चिमी राजस्थान के किसानों और कृषि संस्थानों के लिए आधुनिक ड्रोन समाधान।"
              : "Modern drone solutions for farmers and agricultural organisations in Western Rajasthan."}
          </p>
        </div>

        <div className="card-grid">
          {services[language].map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
