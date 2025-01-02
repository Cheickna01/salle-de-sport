import { Link } from "react-router-dom";
import { useState } from "react";
export default function Menu() {
    const [isActived, setIsactived] = useState("false")
    function handleClick(e){
        setIsactived(!isActived)
    }
  return (
    <div className="bg-black">
      <div className="nav flex justify-between p-8">
      <div className="navbar-icon" onClick={handleClick}>
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </div>
        <div className={`nav-brand ${!isActived && "hidden"}`}>
          <div className="logo-container">
            <Link to={"/"}>
              <img
                src="../img/Capture d'écran 2024-10-03 131525.png"
                alt="logo"
                className="logo"
              />
            </Link>
          </div>
        </div>
        <ul className={`nav-list ${!isActived ? "flex" : "none"}`}>
          <li className="nav-item text-white rounded hover:bg-red-500 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item text-white rounded hover:bg-red-500 ">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="nav-item text-white rounded hover:bg-red-500 ">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="nav-item text-white rounded hover:bg-red-500 ">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
