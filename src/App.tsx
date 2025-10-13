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
      {/* Page Routes */}
      <div className="">
        {/* Fixed Header */}
        <Header />
        <div className={`lg:h-[100px]  h-18 `}>
        </div>
        {/* padding to avoid overlap with fixed header */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/country" element={<Country />} />
          {/* Add more routes here */}
        </Routes>
        {/* Fixed Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
