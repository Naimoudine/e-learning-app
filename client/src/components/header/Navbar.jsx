import { useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar({ setShowNavModal }) {
  const navigate = useNavigate();
  const selectRef = useRef();

  const handleCategory = () => {
    navigate(`/courses?q=${selectRef.current.value}`);
    selectRef.current.value = "";
  };

  return (
    <nav className="flex items-center justify-between px-6 py-6 sm:px-8">
      <button
        aria-label="menu"
        type="button"
        className="block md:hidden"
        onClick={() => setShowNavModal((prev) => !prev)}
      >
        <Bars3Icon className="text-black size-6" />
      </button>
      <Link to="/" className="text-xl font-bold">
        <span className="text-2xl font-bold text-primary">U</span>learning
      </Link>
      <ul className="hidden md:flex md:gap-8">
        <li className="flex gap-2">
          <select
            name="category"
            id="category"
            ref={selectRef}
            onChange={handleCategory}
            className="p-1 bg-transparent"
          >
            <option value="">Categories</option>
            <option value="web development">web development</option>
            <option value="marketing">marketing</option>
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
          className="mr-6 border btn border-zinc-900 hover:bg-gray-200"
          type="button"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
        <button
          className="text-white btn bg-primary hover:bg-primary/70"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
