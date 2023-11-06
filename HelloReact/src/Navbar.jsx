import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./Router=12/index.css"
import { NavLink } from 'react-router-dom';
export default (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="lg" {...args}>
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto gap-3" navbar>
            <NavItem>
              {/* To give Default Page It Will Show When User Give Invalid  Path  */}
              <NavLink to={"/home"}>Home </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/service">Service</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


