import React from "react";

const Navbar = () => {
  return (
    <div className="absolute lg:fixed top-0 w-full bg-transparent py-6 max-w-6xl px-6 lg:px-0 flex items-center justify-between border-b-2 border-nav-border">
      <div className="flex items-center justify-between lg:min-w-96">
        <p className="font-normal text-base text-primary-blue font-futura lg:border-r-2 border-line-border pr-10 cursor-pointer">
          LOGO
        </p>
        <a
          href="#home"
          className="text-secondary-grey font-normal text-base hidden lg:block"
        >
          Home
        </a>
        <a
          href="#services"
          className="text-secondary-grey font-normal text-base hidden lg:block"
        >
          Services
        </a>
        <a
          href="#"
          className="text-secondary-grey font-normal text-base hidden lg:block"
        >
          Portfolio
        </a>
      </div>
      <button className="hover:bg-blue-600 transition bg-primary-blue text-white font-matter font-normal text-base w-32 h-12 rounded-full">
        Get quote
      </button>
    </div>
  );
};

export default Navbar;
