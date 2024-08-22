import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import NavModal from "./components/NavModal";
import Footer from "./components/footer/Footer";

function App() {
  const [showNavModal, setShowNavModal] = useState(false);
  return (
    <div className="relative w-full h-full">
      <NavModal showNavModal={showNavModal} setShowNavModal={setShowNavModal} />
      <Header setShowNavModal={setShowNavModal} />
      <main>
        <div className="overflow-hidden">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
