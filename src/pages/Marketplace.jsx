import { useMemo, useState } from "react";

import { drones } from "../data/drones";
import DroneCard from "../components/DroneCard";

function Marketplace({ language = "en" }) {
  const isHindi = language === "hi";

  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("popularity");

  const brands = ["all", ...new Set(drones.map((drone) => drone.brand))];

  const filteredDrones = useMemo(() => {
    const result = drones.filter((drone) => {
      return brand === "all" || drone.brand === brand;
    });

    return [...result].sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return b.popularity - a.popularity;
    });
  }, [brand, sort]);

  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Marketplace</span>
          <h1>
            {isHindi
              ? "कृषि ड्रोन मार्केटप्लेस"
              : "Agricultural Drone Marketplace"}
          </h1>

          <p>
            {isHindi
              ? "पश्चिमी राजस्थान में उपलब्ध कृषि ड्रोन देखें।"
              : "Explore agricultural drones available in Western Rajasthan."}
          </p>
        </div>

        <div className="marketplace-toolbar">
          <label>
            {isHindi ? "ब्रांड" : "Brand"}

            <select
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            >
              {brands.map((item) => (
                <option key={item} value={item}>
                  {item === "all"
                    ? isHindi
                      ? "सभी ब्रांड"
                      : "All Brands"
                    : item}
                </option>
              ))}
            </select>
          </label>

          <label>
            {isHindi ? "क्रमबद्ध करें" : "Sort By"}

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="popularity">
                {isHindi ? "लोकप्रियता" : "Popularity"}
              </option>

              <option value="price-low">
                {isHindi ? "कम कीमत पहले" : "Price: Low to High"}
              </option>

              <option value="price-high">
                {isHindi ? "अधिक कीमत पहले" : "Price: High to Low"}
              </option>
            </select>
          </label>
        </div>

        <div className="card-grid">
          {filteredDrones.map((drone) => (
            <DroneCard
              key={drone.id}
              drone={drone}
              language={language}
            />
          ))}
        </div>

        {filteredDrones.length === 0 && (
          <p className="empty-state">
            {isHindi
              ? "इस फिल्टर के लिए कोई ड्रोन उपलब्ध नहीं है।"
              : "No drones are available for this filter."}
          </p>
        )}
      </div>
    </section>
  );
}

export default Marketplace;
