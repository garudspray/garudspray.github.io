import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

function Contact({ language = "en" }) {
  const isHindi = language === "hi";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(isHindi ? "भेजा जा रहा है..." : "Sending...");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "enquiry",
          ...form,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus(
          isHindi
            ? "आपकी पूछताछ सफलतापूर्वक भेज दी गई है।"
            : "Your enquiry has been submitted successfully."
        );

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus(
        isHindi
          ? "कुछ समस्या हुई। कृपया फोन पर संपर्क करें।"
          : "Something went wrong. Please contact us by phone."
      );
    }
  }

  return (
    <section className="section page-section">
      <div className="container contact-layout">
        <div className="content-page">
          <span className="eyebrow">GarudSpray</span>

          <h1>{isHindi ? "संपर्क करें" : "Contact Us"}</h1>

          <p>
            {isHindi
              ? "कृषि ड्रोन सेवा या ड्रोन खरीदने के लिए हमसे संपर्क करें।"
              : "Contact us for agricultural drone services or drone purchase enquiries."}
          </p>

          <p>
            <strong>{isHindi ? "क्षेत्र:" : "Location:"}</strong>{" "}
            Western Rajasthan, India
          </p>

          <p>
            <strong>{isHindi ? "फोन:" : "Phone:"}</strong>{" "}
            +91 XXXXX XXXXX
          </p>

          <p>
            <strong>{isHindi ? "ईमेल:" : "Email:"}</strong>{" "}
            info@garudspray.com
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            {isHindi ? "नाम" : "Name"}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            {isHindi ? "मोबाइल नंबर" : "Phone Number"}
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            {isHindi ? "ईमेल" : "Email"}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label>
            {isHindi ? "संदेश" : "Message"}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </label>

          <button type="submit" className="button button-primary">
            {isHindi ? "भेजें" : "Submit"}
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
