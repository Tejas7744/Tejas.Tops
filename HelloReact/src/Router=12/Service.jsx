import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/service/Car"}>Car</NavLink>
        </li>
        <li>
          <NavLink to={"/service/Bike"}>Bike</NavLink>
        </li>
      </ul>
      <h1>Service</h1>;
      {/* need to specify in parent route (Rule) */}
      <Outlet/>
    </>
  );
}
