import React, { Component } from "react";
function Navbar(props) {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default Navbar;
