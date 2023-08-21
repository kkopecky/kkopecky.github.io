"use client";
import React, { useState } from "react";
import cx from "classnames";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => setIsNavVisible(!isNavVisible);

  const renderNavItem = (href: string, label: string) => (
    <li>
      <a
        href={href}
        className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-[#4f2569] md:p-0"
        aria-current="page"
      >
        {label}
      </a>
    </li>
  );

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <div className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-code-circle-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#4f2569"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5" />
              <path d="M15.5 10.5l1.5 1.5l-1.5 1.5" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M13 9.5l-2 5.5" />
            </svg>
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Kai Kopecky
          </span>
        </a>
        <button
          onClick={handleNavToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={cx("w-full md:block md:w-auto", { hidden: !isNavVisible })}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {renderNavItem("/", "Home")}
            {renderNavItem("#about", "About")}
            {renderNavItem("#blog", "Blog")}
            {renderNavItem("#contact", "Contact")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
