import WifiIcon from "@heroicons/react/20/solid/WifiIcon";
import React from "react";
import "./AllowRemote.scss";

const AllowRemote = () => {
  return (
    <div className="allow-remote">
      <div className="allow-remote-icon-div">
        <WifiIcon className="allow-remote-icon" />
      </div>
      <div className="allow-remote-text-div">
        <p className="allow-remote-text">Remote möjlig</p>
      </div>
    </div>
  );
};

export default AllowRemote;
