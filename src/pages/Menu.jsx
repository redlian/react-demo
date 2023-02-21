// import React from 'react';
import React, { useContext } from "react";
import { PortalContext } from "../context/portal";

const Menu = () => {
  const { initvaluex } = useContext(PortalContext);

  // console.log(userData);
  const dateTime = new Date().toISOString();
  return (
    <div className="menu" style={{ display: "flex", justifyContent: "space-evenly" }}>
      <h2>Helle Menu!</h2>
      <p>Date time: {dateTime}</p>
      <h2>Seconds: {initvaluex} </h2>
    </div>
  );
}

export default Menu;
