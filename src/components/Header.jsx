import React, { useState } from "react";
import logo from "../assets/images/main-logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
// min-[320px]:text-center max-[900px]:bg-sky-300

function Header() {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["products", "features", "pricing", "resources"];
  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };
  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} logo={logo} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menuItems={menuItems}
          logo={logo}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
      </div>
    </>
  );
}

export default Header;
