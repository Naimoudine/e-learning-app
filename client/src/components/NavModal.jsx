import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

export default function NavModal({ showNavModal, setShowNavModal }) {
  return (
    <div
      className={
        showNavModal
          ? `h-screen w-screen bg-zinc-900/50 absolute z-[1000] top-0 left-0`
          : `hidden`
      }
    >
      <nav
        className={
          showNavModal
            ? `flex flex-col bg-white h-screen ease-in duration-300 w-[50%] md:w-[20%] p-4 py-12 relative`
            : `hidden`
        }
      >
        <button
          type="button"
          aria-label="close meny"
          onClick={() => setShowNavModal((prev) => !prev)}
        >
          <XMarkIcon className="absolute size-6 text-zinc-900 top-4 right-3" />
        </button>
        <Link
          to="/"
          className="pb-4 text-xl font-bold"
          onClick={() => setShowNavModal(false)}
        >
          <span className="text-2xl font-bold text-primary">U</span>learning
        </Link>
        <ul className="flex flex-col gap-2 py-4 border-gray-300 border-y">
          <li className="font-semibold">Categories</li>
          <li>
            <NavLink
              className="nav-link"
              to="/courses?q=developpement web"
              onClick={() => setShowNavModal(false)}
            >
              Developpement Web
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/courses?q=marketing"
              onClick={() => setShowNavModal(false)}
            >
              Marketing
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 pt-4">
          <li>
            <NavLink
              className="nav-link"
              to="/signin"
              onClick={() => setShowNavModal(false)}
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              to="/signup"
              onClick={() => setShowNavModal(false)}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
