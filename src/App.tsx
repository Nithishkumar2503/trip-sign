import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  HeroSection,
  About,
  Contact,
  Footer,
  Country,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* Fixed Header */}
      <Header />

      {/* Page Routes */}
      <div className="">
        {" "}
        {/* padding to avoid overlap with fixed header */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/country" element={<Country />} />
          {/* Add more routes here */}
        </Routes>
      </div>
      {/* Fixed Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
