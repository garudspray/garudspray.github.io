function About({ language = "en" }) {
  const isHindi = language === "hi";

  return (
    <section className="section page-section">
      <div className="container content-page">
        <span className="eyebrow">GarudSpray</span>

        <h1>{isHindi ? "हमारे बारे में" : "About GarudSpray"}</h1>

        <p>
          {isHindi
            ? "गरुड़स्प्रे पश्चिमी राजस्थान में कृषि ड्रोन सेवाएं और कृषि ड्रोन बिक्री समाधान प्रदान करता है। हमारा उद्देश्य किसानों को आधुनिक तकनीक के माध्यम से कम समय, कम पानी और अधिक सटीकता के साथ कृषि कार्य करने में सहायता करना है।"
            : "GarudSpray provides agricultural drone services and agricultural drone sales solutions in Western Rajasthan. Our objective is to help farmers perform agricultural operations with less time, less water and greater accuracy using modern technology."}
        </p>

        <p>
          {isHindi
            ? "हम फसल छिड़काव, खेत मानचित्रण, फसल स्वास्थ्य विश्लेषण, बीज फैलाव और उपज अनुमान जैसी सेवाएं प्रदान करते हैं।"
            : "Our services include crop spraying, field mapping, crop health analysis, seed spreading and yield estimation."}
        </p>
      </div>
    </section>
  );
}

export default About;
