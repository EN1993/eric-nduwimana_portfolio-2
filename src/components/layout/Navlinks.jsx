import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  
  // let activeStyle = {
  //   textDecoration: "underline",
  // };

  let activeClassName = "active";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
