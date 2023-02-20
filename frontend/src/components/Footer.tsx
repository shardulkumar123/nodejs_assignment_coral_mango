import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 shadow md:px-6 md:py-8    bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Quick Food
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-smsm:text-center text-gray-400">
          © {" "}
          <Link href="/" className="hover:underline">
           QuickFood™
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
