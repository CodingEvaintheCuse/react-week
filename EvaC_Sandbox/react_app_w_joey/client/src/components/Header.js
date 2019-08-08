import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  return (
    <div>
      <div>
        <Navbar color="dark" dark fixed="top" expand="sm">
          <NavbarBrand href="/">
            <span className="text-warning">bight</span>
          </NavbarBrand>
          <NavbarToggler onClick={() => setOpen(!open)} />
          <Collapse isOpen={open} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/inventory">
                  Inventory
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/shipments">
                  Shipments
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
