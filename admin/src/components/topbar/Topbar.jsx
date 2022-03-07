import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div/>
        <div className="topLeft">
          <span className="logo"><b>FITOP</b></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
