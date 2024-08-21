import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import NavModal from "./components/NavModal";

function App() {
  const [showNavModal, setShowNavModal] = useState(false);
  return (
    <div className="relative h-full w-full">
      <NavModal showNavModal={showNavModal} setShowNavModal={setShowNavModal} />
      <Header setShowNavModal={setShowNavModal} />
      <main>
        <div className="wrapper overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
