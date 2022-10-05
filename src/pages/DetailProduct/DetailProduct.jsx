import React, { useState } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import images from "../../assets";
import { listProduct } from "../../data";
// MUI
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Rating from "@mui/material/Rating";
// styles
import styles from "./DetailProduct.module.css";
const cx = classNames.bind(styles);

const DetailProduct = () => {
  const { slug } = useParams();

  const [count, setCount] = useState(1);

  document.title = "Product" + slug;

  const handleIncrease = () => setCount(count + 1);

  const handleDecrease = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <div className={cx("container-fluid", "box-banner")}>
        <div>
          <h1>Vegetable’s Package</h1>
          <h2>
            <b>Home</b> <span>|</span> Shop {slug}
          </h2>
        </div>
      </div>
      <div className={cx("box-detail")}>
        <div>
          <img src={images.productDetails1} alt="" />
        </div>
        <div>
          <h2 className={cx("product_name")}>Vetgetable’s Package</h2>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <p className={cx("price")}>$50.00</p>
          <p className={cx("detail")}>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
            vehicula elementum sed sit amet dui. Proin eget tortor risus.
          </p>
          <div className={cx("row-quantity")}>
            <div className={cx("quantity")}>
              <button onClick={handleDecrease}>-</button>
              <button>{count}</button>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button className={cx("add-to-cart")}>ADD TO CART</button>
          </div>
          <ul className={cx("infor-product")}>
            <li>
              <b>Availability</b> <span>In Stock</span>
            </li>
            <li>
              <b>Shipping</b> <span>01 day shipping</span>
            </li>
            <li>
              <b>Weight</b> <span>0.5 kg</span>
            </li>
            <li>
              <b>Share on</b>
              <div className={cx("share")}>
                <FacebookIcon className={cx("icon")} />
                <TwitterIcon />
                <InstagramIcon />
                <PinterestIcon />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("container", "desc")}>
        <h3>Products Infomation</h3>
        <span>
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
          Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac
          diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum
          congue leo eget malesuada. Vivamus suscipit tortor eget felis
          porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et,
          porttitor at sem. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum
          sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
          <br />
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies
          ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum
          porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget
          tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac
          diam sit amet quam vehicula elementum sed sit amet dui. Proin eget
          tortor risus.
        </span>
      </div>
      <h2 className={cx("title")}>Related Product</h2>
      <div className={cx("list-product", "container")}>
        {listProduct.map((product, index) =>
          index < 4 ? (
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
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default DetailProduct;
