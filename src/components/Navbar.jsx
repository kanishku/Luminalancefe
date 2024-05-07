import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false); // State to manage menu open/close
  const { pathname } = useLocation(); // Use useLocation hook to get the current pathname

  const handleScroll = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };

  const handleUserClick = () => {
    setOpen(!open); // Toggle the 'open' state when user clicks on user area
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">LuminaLance</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={handleUserClick}>
              {/* Display user information and options */}
              <img src="" alt="" />
              <span>{currentUser.username}</span>
              {open && ( // Conditionally render based on the 'open' state
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <span className="link" onClick={handleLogout}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Conditionally render menu based on active state or pathname */}
      {active || pathname !== "/" && (
        <>
          <hr />
          <div className="menu">
            {/* Menu links */}
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
