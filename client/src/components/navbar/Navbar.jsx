import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import NetflixLogo from "../../assets/netflix-logo.png";
import NetflixAvatar from "../../assets/netflix-avatar.png";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={NetflixLogo} alt="Netflix Logo" />
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New & Popular</span>
          <span>MyList</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Sergio</span>
          <Notifications className="icon" />
          <img src={NetflixAvatar} alt="Netflix Profile Avatar" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
