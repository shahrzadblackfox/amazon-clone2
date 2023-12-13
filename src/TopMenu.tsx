// TopMenu.tsx
import React from "react";
import "./TopMenu.css";
import { CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const TopMenu: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="topMenu">
        <div className="col-md-2">
          <div className="logo">
            <a href="">
              <img src="/images/amazonLogo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <CiSearch className="header__searchIcon" />
          </div>
        </div>
        <div className="col-md-2">
          <div className="account">
            <a href="">
              Account <CiUser />
            </a>
          </div>
        </div>
        <div className="col-md-2 ">
          <div className="cart">
            <a href="">
              <span className="cart-icon">
                <CiShoppingCart />
              </span>
              <span className="cart-text">cart</span>{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="mid-menu">
        <a href="" className="side-menu-icon">
          <GiHamburgerMenu />
          All
        </a>
        <nav>
          <a href="">Today's Deal</a>
          <a href="">Registry</a>
          <a href="">Customer Service</a>
          <a href="">Gift Cards</a>
          <a href="">Sell</a>
        </nav>
      </div>
    </div>
  );
};

export default TopMenu;
