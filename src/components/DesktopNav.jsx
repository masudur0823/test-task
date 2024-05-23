import React from "react";
function DesktopNav({ menuItems, logo }) {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="#!">
        <img src={logo} alt="flex site logo" />
      </a>

      <ul className="flex gap-7 ">
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <a href="#!" className="font-medium capitalize text-paragraph-one">
              {menu}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-4 font-medium">
        <li>
          <button className="text-paragraph-one px-4 py-2 rounded">
            Log In
          </button>
        </li>
        <li>
          <button className="bg-primary text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNav;
