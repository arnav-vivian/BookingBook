import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/login")
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="px-2" onClick={handleClick}>Register</button>
            <button className="px-2" onClick={handleClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;