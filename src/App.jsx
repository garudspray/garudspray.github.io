import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Marketplace from "./pages/Marketplace";
import DroneDetails from "./pages/DroneDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home language="en" />} />
          <Route path="/hi/" element={<Home language="hi" />} />

          <Route path="/services" element={<Services language="en" />} />
          <Route path="/hi/services" element={<Services language="hi" />} />

          <Route
            path="/marketplace"
            element={<Marketplace language="en" />}
          />

          <Route
            path="/hi/marketplace"
            element={<Marketplace language="hi" />}
          />

          <Route
            path="/marketplace/:droneId"
            element={<DroneDetails language="en" />}
          />

          <Route
            path="/hi/marketplace/:droneId"
            element={<DroneDetails language="hi" />}
          />

          <Route path="/about" element={<About language="en" />} />
          <Route path="/hi/about" element={<About language="hi" />} />

          <Route path="/contact" element={<Contact language="en" />} />
          <Route path="/hi/contact" element={<Contact language="hi" />} />

          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;