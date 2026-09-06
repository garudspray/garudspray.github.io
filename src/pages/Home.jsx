  import { Link } from "react-router-dom";
import { services } from "../data/services";
import { drones } from "../data/drones";
import ServiceCard from "../components/ServiceCard";
import DroneCard from "../components/DroneCard";
import SEO from "../components/SEO";


function Home({ language = "en" }) {
  const isHindi = language === "hi";

  const page = isHindi
    ? {
        title: "पश्चिमी राजस्थान में कृषि ड्रोन सेवाएं",
        subtitle:
          "आधुनिक ड्रोन तकनीक के साथ तेज, सुरक्षित और सटीक कृषि समाधान।",
        servicesTitle: "हमारी सेवाएं",
        marketplaceTitle: "कृषि ड्रोन खरीदें",
        marketplaceText:
          "पश्चिमी राजस्थान में अधिकृत कृषि ड्रोन डीलर के रूप में हम विभिन्न ब्रांडों के ड्रोन उपलब्ध कराते हैं।",
        viewMarketplace: "सभी ड्रोन देखें",
        contact: "संपर्क करें",
        // SEO 
        seoTitle: "पश्चिमी राजस्थान में कृषि ड्रोन सेवाएं", 
        seoDescription: "पश्चिमी राजस्थान में कृषि ड्रोन से फसल छिड़काव, कीटनाशक छिड़काव और अन्य कृषि ड्रोन सेवाएं। GarudSpray से कृषि ड्रोन खरीदें।", 
        canonical: "https://www.garudspray.com/hi/",
      }
    : {
        title: "Agricultural Drone Services in Western Rajasthan",
        subtitle:
          "Fast, safe and accurate agricultural solutions using modern drone technology.",
        servicesTitle: "Our Services",
        marketplaceTitle: "Buy Agricultural Drones",
        marketplaceText:
          "As an authorised agricultural drone dealer in Western Rajasthan, we provide drones from multiple brands.",
        viewMarketplace: "View All Drones",
        contact: "Contact Us",
        // SEO 
        seoTitle: "Agricultural Drone Services in Western Rajasthan", 
        seoDescription: "GarudSpray provides agricultural drone spraying, pesticide application and other drone services in Western Rajasthan. Explore agricultural drones for sale.", 
        canonical: "https://www.garudspray.com/",
       
      };

  return (
    <>
    {/* SEO */} 
    <SEO title={page.seoTitle} description={page.seoDescription} canonical={page.canonical} language={language} />
      <section className="hero-section">
        <div className="container hero-content">
          <div>
            <span className="eyebrow">GarudSpray</span>
            <h1>{page.title}</h1>
            <p>{page.subtitle}</p>

            <div className="hero-actions">
              <Link to={isHindi ? "/hi/services" : "/services"} className="button button-primary">
                {page.servicesTitle}
              </Link>

              <Link to={isHindi ? "/hi/contact" : "/contact"} className="button button-secondary">
                {page.contact}
              </Link>
            </div>
          </div>

          <div className="hero-image-box">
            <img
              src={isHindi ? "/images/services/agriculture-drone-hi.png" : "/images/services/agriculture-drone.png"} 
              alt="Agricultural drone spraying"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">GarudSpray</span>
            <h2>{page.servicesTitle}</h2>
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

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Marketplace</span>
            <h2>{page.marketplaceTitle}</h2>
            <p>{page.marketplaceText}</p>
          </div>

          <div className="card-grid">
            {drones.slice(0, 3).map((drone) => (
              <DroneCard
                key={drone.id}
                drone={drone}
                language={language}
              />
            ))}
          </div>

          <div className="centered-action">
            <Link
              to={isHindi ? "/hi/marketplace" : "/marketplace"}
              className="button button-primary"
            >
              {page.viewMarketplace}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
