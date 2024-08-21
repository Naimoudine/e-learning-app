import { Link, useNavigate, NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar({ setShowNavModal }) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-6 sm:px-8">
      <button
        aria-label="menu"
        type="button"
        className="block md:hidden"
        onClick={() => setShowNavModal((prev) => !prev)}
      >
        <Bars3Icon className="size-6 text-black" />
      </button>
      <Link to="/" className="font-bold text-xl">
        <span className="text-primary font-bold text-2xl">U</span>learning
      </Link>
      <ul className="hidden md:flex md:gap-8">
        <li className="flex gap-2">
          <select name="category" id="category">
            <option value="">Categories</option>
            <option value="">development</option>
            <option value="">business</option>
          </select>
        </li>
        <li>
          <NavLink to="/courses" className="nav-link">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link">
            Teach on Ulearning
          </NavLink>
        </li>
      </ul>
      <div className="hidden md:block">
        <button
          className="mr-6 btn border border-zinc-900 hover:bg-gray-200"
          type="button"
          onClick={() => navigate("/")}
        >
          Sign In
        </button>
        <button
          className="btn bg-primary text-white hover:bg-primary/70"
          type="button"
          onClick={() => navigate("/")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
