import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';





function Header() {



  return (

    <div className="header">

      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>


      <div className="header_right">
      <span className="desktop">
      <HeaderOptions Icon={HomeIcon} title='Home'/>
      <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOptions Icon={ChatIcon} title='Messeging'/>
      <HeaderOptions Icon={NotificationsIcon} title='Notification'/>
    
    </span>



      </div>
    </div>
  );
};


export default Header;
