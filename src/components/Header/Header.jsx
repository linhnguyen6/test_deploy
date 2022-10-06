import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import images from "../../assets";
// MUI
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailIcon from "@mui/icons-material/Mail";
// styles
import styles from "./Header.module.css";
const cx = classNames.bind(styles);

const Header = () => {
  const menuItems = [
    {
      page: "HOMEa",
      link: "",
    },
    {
      page: "SHOP",
      link: "shop",
    },
    {
      page: "PAGES",
      link: "page",
    },
    {
      page: "BLOG",
      link: "blog",
    },
    {
      page: "CONTACT",
      link: "contact",
    },
  ];

  return (
    <>
      <header>
        <Link to="/">
          <img src={images.logo} alt="" />
        </Link>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={cx("menu-item")}>
              <Link to={item.link}>{item.page}</Link>
            </li>
          ))}
        </ul>
        <div>
          <FavoriteIcon sx={{ marginInline: 1 }} />
          <ShoppingBasketIcon />
        </div>
        <label htmlFor="hidden_menu" className={cx("menu-icon")}>
          <MenuIcon />
        </label>
      </header>

      <input type="checkbox" name="" id="hidden_menu" />
      <div className={cx("menu-mobile")}>
        <div>
          <img src={images.logo} alt="" />
        </div>
        <div>
          <div>
            <FavoriteIcon sx={{ marginInline: 1 }} />
          </div>
          <div>
            <ShoppingBasketIcon />
          </div>
        </div>
        <div>
          <span className={cx("icon-person")}>
            <PersonIcon />
            <span>Login</span>
          </span>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <PinterestIcon />
        </div>
        <div className={cx("icon-mail")}>
          <MailIcon />
          linh.nguyen6@tda.company
        </div>
        <br />
        Free Shipping for all Order of $99
      </div>
      <label htmlFor="hidden_menu" className={cx("overlay")}></label>
      {/* Menu Mobile */}
      <div className={cx("wrapper")}>
        <div className={cx("category")}>
          <MenuIcon sx={{ mr: 2 }} />
          All Category
        </div>
        <div className={cx("form-search")}>
          <input
            className={cx("input-search")}
            placeholder="What do you need ?"
          />
          <button className={cx("btn-search")}>SEARCH</button>
        </div>
        <div className={cx("contact")}>
          <div className={cx("icon-phone")}>
            <PhoneEnabledIcon />
          </div>
          <div>
            <p>+84 334.888.543</p>
            <span>support 24/7 time</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
