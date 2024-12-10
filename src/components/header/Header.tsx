import React from "react";
import NavBar from "./NavBar";
import HeaderTextBox from "./HeaderTextBox";
import HeaderBackgroundImage from "./HeaderBackgroundImage";

export default function Header() {
  return (
    <header className="bg-header-gradient relative">
      <div className="max-w-7xl ms-auto me-auto">
        <NavBar />
        <HeaderTextBox />
        <HeaderBackgroundImage />
      </div>
    </header>
  );
}
