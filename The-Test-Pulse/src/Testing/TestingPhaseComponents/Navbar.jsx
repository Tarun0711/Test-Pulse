import React from "react";
import Logo from '../../Assests/Logo/Logo.svg'
function Navbar() {
  return (
    <div className="md:h-28 w-full h-20 px-5 bg-white bg-opacity-5 border-b backdrop-blur-xl">
      <img className="md:h-28 md:w-28 h-20 w-20 object-fill" src={Logo} alt="Logo" />
    </div>
  );
}

export default Navbar;
