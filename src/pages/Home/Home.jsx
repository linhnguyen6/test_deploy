import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "../../assets";
import { listProduct, listBlog } from "../../data";
// MUI
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Slide from "../../components/Slider/Slide";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// style
import styles from "./Home.module.css";
const cx = classNames.bind(styles);

const Home = () => {
  document.title = "Home Page | Ogani";

  return (
    <div className={cx("container")}>
      <aside>
        <ul className={cx("category")}>
          <li>
            <Link to="category/1">Fresh Meat</Link>
          </li>
          <li>
            <Link to="category/1">Vegetables</Link>
          </li>
          <li>
            <Link to="category/1">Fruit & Nut Gifts</Link>
          </li>
          <li>
            <Link to="category/1">Fresh Berries</Link>
          </li>
          <li>
            <Link to="category/1">Ocean Foods</Link>
          </li>
          <li>
            <Link to="category/1">Butter & Eggs</Link>
          </li>
          <li>
            <Link to="category/1">Fastfood</Link>
          </li>
          <li>
            <Link to="category/1">Fresh Onion</Link>
          </li>
          <li>
            <Link to="category/1">Papayaya & Crisps</Link>
          </li>
          <li>
            <Link to="category/1">Oatmeal</Link>
          </li>
          <li>
            <Link to="category/1">Fresh Bananas</Link>
          </li>
        </ul>
        <div className={cx("banner")}>
          <img src={images.banner} alt="" />
          <div>
            <p>FRUIT FRESH</p>
            <h2>
              Vegetable <br />
              100% Organic
            </h2>
            <p className={cx("slogan")}>Free Pickup and Delivery Available</p>
            <button>shop now</button>
          </div>
        </div>
      </aside>
      <Slide />
      <h2 className={cx("title")}>Feature Product</h2>
      <ul className={cx("list-category")}>
        <li>
          <Link>All</Link>
        </li>
        <li>
          <Link>Orange</Link>
        </li>
        <li>
          <Link>Fresh Meat</Link>
        </li>
        <li>
          <Link>Vegetables</Link>
        </li>
        <li>
          <Link>Fastfood</Link>
        </li>
      </ul>
      <div className={cx("list-product")}>
        {listProduct.map((product, index) => (
          <div className={cx("product-item")} key={product.id}>
            <div className={cx("box-product")}>
              <img src={product.image} alt="" />
              <ul className={cx("feature-item-pic")}>
                <li className={cx("icon")}>
                  <FavoriteIcon />
                </li>
                <li className={cx("icon")}>
                  <ShoppingCartIcon />
                </li>
              </ul>
            </div>
            <p className={cx("product-name")}>{product.name}</p>
            <p className={cx("product-price")}>{product.price + index}$</p>
          </div>
        ))}
      </div>
      <div className={cx("banner-pic")}>
        <img src={images.banner1} alt="" />
        <img src={images.banner2} alt="" />
      </div>
      <div className={cx("list-feature-product")}>
        <div>
          <div className={cx("row-feature-item")}>
            <h3>Latest Products</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 15, height: 14 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 15, height: 14 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("row-feature-item")}>
            <h3>Top Related Product</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 15, height: 14 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 15, height: 14 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("row-feature-item")}>
            <h3>Reviews Product</h3>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 15, height: 14 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: 15, height: 14 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h2 className={cx("title")}>From The Blog</h2>
      <div className={cx("list-blog")}>
        {listBlog.map((blog) => (
          <div className={cx("blog-item")} key={blog.id}>
            <img className={cx("blog-image")} src={blog.image} alt="" />
            <p className={cx("blog-timer")}>
              <CalendarTodayIcon />
              May 4,2019
              <ChatBubbleOutlineIcon />5
            </p>
            <h3 className={cx("blog-title")}>{blog.title}</h3>
            <p className={cx("blog-desc")}>{blog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
