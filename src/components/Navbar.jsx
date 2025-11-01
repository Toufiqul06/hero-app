import React from "react";
import { Link, NavLink } from "react-router-dom"; // fixed import path
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-3 lg:px-10 shadow-sm">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className="font-bold text-base" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="font-bold text-base" to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink className="font-bold text-base" to="installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="Hero.io Logo" className="w-10" />
          <Link className="text-2xl font-bold text-blue-800" to="/">
            HERO.IO
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="font-bold text-base" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="font-bold text-base" to="/apps">Apps</NavLink>
          </li>
          <li>
            <NavLink className="font-bold text-base" to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/"
          className="btn font-bold text-base bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center gap-2"
        >
          <FaGithub className="text-2xl" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
