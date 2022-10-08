import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("sm:hidden block");
  const [hideMenu, setHideMenu] = useState("sm:block hidden");

  const handleHamburger = () => {
    setShowMenu("sm:block hidden");
    setHideMenu("sm:hidden block");
  };

  const handleMenu = () => {
    setShowMenu("sm:hidden block");
    setHideMenu("sm:block hidden");
  };

  return (
    <>
      <header>
        <nav className="container-fluid flex justify-between bg-gray-100 px-2">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
          {/* Show only in classroom */}
          <h2>Classroom Name</h2>
          {/* Hamburger */}
          <div className={showMenu} onClick={() => handleHamburger()}>
            Open
          </div>

          {/* Menu Dropdown */}
          <menu className={hideMenu}>
            <ul className="sm:flex block gap-2">
              <li
                className="text-red-500 cursor-pointer sm:hidden block"
                onClick={() => handleMenu()}
              >
                Close
              </li>
              {/* Show only in classroom */}
              <li>Welcome</li>
              <li>
                <Link to="/classroomgallery">Classroom Gallery</Link>
              </li>
              <li>
                <Link to="/createnewclassroom">+Create New Classroom</Link>
              </li>
              {/* Show only in landingPage */}
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              {/* Show only when user is logged in */}
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </menu>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
