import React from "react";

function MobileNav({ menuItems, logo, onClose, onOpen, hideLeft }) {
  return (
    <>
      <div className="h-16 flex justify-between items-center px-6 lg:px-12">
        <a href="#!">
          <img src={logo} alt="flex site logo" />
        </a>
        <button className="border border-primary rounded" onClick={onOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-primary"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
      <div
        className={` transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button className="absolute right-8 top-8" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="34px"
            viewBox="0 -960 960 960"
            width="34px"
            className="fill-white"
          >
            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
        <div>
          <ul className="flex flex-col gap-5 ">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <a
                  href="#!"
                  className="font-medium capitalize text-white text-3xl"
                  onClick={onClose}
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-white px-4 py-2 rounded ">Log In</button>
            </li>
            <li>
              <button className="bg-primary text-white px-4 py-2 rounded border">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
