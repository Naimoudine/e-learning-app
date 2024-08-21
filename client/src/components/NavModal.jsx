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
          <XMarkIcon className="size-6 text-zinc-900 absolute top-4 right-3" />
        </button>
        <Link to="/" className="font-bold text-xl pb-4">
          <span className="text-primary font-bold text-2xl">U</span>learning
        </Link>
        <ul className="border-y border-gray-300 py-4 flex flex-col gap-2">
          <li className="font-semibold">Categories</li>
          <li>
            <NavLink className="nav-link" to="/course?category">
              Developpement
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/course?category">
              Business
            </NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 pt-4">
          <li>
            <NavLink className="nav-link" to="/signin">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
