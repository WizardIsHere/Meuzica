import React from "react";

import Logo from "../assets/muszica.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from '../assets/ava.jpg';

const Navbar = () => {
  return (
    <header>
      <nav class="navbar" style={{ background: "#181221",position:"fixed",top:0,width:"100%", height: "80px", zIndex:" 9999"}}>
        <div class="container ">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="" width="35" height="35" />
          </a>
          <div className="d-flex">
            <button type="button" class="btn"><NotificationsNoneIcon sx={{ color: "#B0BF79" }} /></button>
            <div className="d-flex mt-1">
                 <img src={Avatar}alt="avatar" width="35" height="35" className="rounded-circle mt-2"/>
                 <p className="mt-3 ps-2" style={{ color: "#fff", fontWeight: 300 ,fontSize: 15 }}>John Doe</p>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
