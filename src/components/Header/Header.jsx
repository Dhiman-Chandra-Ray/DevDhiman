import { FaDev } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 px-2 py-1 rounded" : "px-1 mx-2 py-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 px-2 py-1 rounded" : "px-1 mx-2 py-1"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 px-2 py-1 rounded" : "px-1 mx-2 py-1"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 px-2 py-1 rounded" : "px-1 mx-2 py-1"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 px-2 py-1 rounded" : "px-1 mx-2 py-1"
          }
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "bg-gray-200 px-1 py-1 rounded" : "px-1 mx-2 py-1"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center text-xl font-bold">
          <FaDev className="text-3xl"/> Dhiman
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
        <Link to="/resume" className="btn ml-2">
          Resume
        </Link>
      </div>
      <div className="lg:hidden navbar-end">
        <Link to="/resume" className="btn ml-2">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Header;
