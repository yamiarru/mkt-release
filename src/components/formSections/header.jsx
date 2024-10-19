import React, { useState, useContext } from "react";
import HomeLogo from "../assets/LOGO2.png";
import cartIcon from "../assets/cart/cartIcon.svg";
import { CartContext } from "../formSections/cart/cartContext";
import { Cart } from "../formSections/cart/cart"; 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 325 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Cart /> 
    </Box>
  );

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ background: "linear-gradient(to top, #fce4ec, #ffffff)" }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contacto</a>
              </li>
            </ul>
            <img
              src={HomeLogo}
              alt="Logo"
              className="navbar-brand"
              style={{ height: "75px" }}
            />
            <Button onClick={toggleDrawer(true)}>
              <img src={cartIcon} alt="Cart" style={{ height: "30px" }} />
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </header>
  );
};
