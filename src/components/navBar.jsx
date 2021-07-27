import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <a href="/">Incrementor App</a>
      <p>{`Number of counters: ${totalCounters}`}</p>
    </nav>
  );
};

export default NavBar;
