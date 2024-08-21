import Navbar from "./Navbar";

export default function Header({ setShowNavModal }) {
  return (
    <header>
      <Navbar setShowNavModal={setShowNavModal} />
    </header>
  );
}
