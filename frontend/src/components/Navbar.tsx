import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
     
            <Link href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                QuickFood
              </span>
            </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded md:bg-transparent md:p-0 hover:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
