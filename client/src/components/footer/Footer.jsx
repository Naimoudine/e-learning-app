import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col gap-8 p-8 text-white bg-black">
      <div className="flex flex-col gap-8 text-white bg-black md:items-center md:flex-row">
        <ul className="flex flex-col gap-2 py-4 md:py-0">
          <li className="font-semibold">Categories</li>
          <li>
            <Link className="nav-link" to="/courses?q=developpement web">
              Developpement Web
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/courses?q=marketing">
              Marketing
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start w-full md:flex-row md:justify-between">
        <Link to="/" className="text-xl font-bold md:self-start">
          <span className="text-2xl font-bold text-primary">U</span>learning
        </Link>
        <p>©2024 Ulearning, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
