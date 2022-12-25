import "./Sidebar.css";
import React from "react";
import { Avatar } from "@mui/material";


function Sidebar() {

  
  const recentItem = (items) => {
    return(
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{items}</p>
    </div>);
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://th.bing.com/th/id/OIP.Ru0h6i1IhQUeIdBxHZYLcgHaEK?pid=ImgDet&rs=1"
          alt=""
        />
         <Avatar  className='sidebar_avatar' />
              
                <h2>Swapnil chougule</h2>
                <h4>Hello</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_stat_num">2.3243</p>
        </div>

        <div className="sidebar_stat">
          <p>somthing</p>
          <p className="sidebar_stat_num">2,4573</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('devloper')}
        {recentItem('designer')}
        {recentItem('programming')}
      </div>
    </div>
  );
}

export default Sidebar;
