import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  language = "en",
}) {
  const siteName = "GarudSpray";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Agricultural Drone Services`;

  return (
    <Helmet>
      <html lang={language === "hi" ? "hi" : "en"} />

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content={fullTitle} />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      {canonical && (
        <meta
          property="og:url"
          content={canonical}
        />
      )}
    </Helmet>
  );
}

export default SEO;