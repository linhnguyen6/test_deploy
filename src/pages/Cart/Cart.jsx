import React, { useState } from "react";
import classNames from "classnames/bind";
import images from "../../assets";
import { useNavigate } from "react-router-dom";
// styles
import styles from "./Cart.module.css";
const cx = classNames.bind(styles);

const Cart = () => {
  document.title = "Cart";

  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const handleBackToPage = () => navigate(-1);

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
          <h1>Shopping Cart</h1>
          <h2>
            <b>Home</b> <span>|</span> Shopping Cart
          </h2>
        </div>
      </div>
      <div className={cx("infor-cart")}>
        <table className={cx("table-cart")}>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={cx("row-infor-product")}>
                <img src={images.cart1} alt="" />
                <h5>Vegetable’s Package</h5>
              </td>
              <td>$55.00</td>
              <td>
                <div className={cx("quantity")}>
                  <button onClick={handleDecrease}>-</button>
                  <button>{count}</button>
                  <button onClick={handleIncrease}>+</button>
                </div>
              </td>
              <td>$110.00</td>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td className={cx("row-infor-product")}>
                <img src={images.cart2} alt="" />
                <h5> Fresh Garden Vegetable</h5>
              </td>
              <td>$55.00</td>
              <td>
                <div className={cx("quantity")}>
                  <button onClick={handleDecrease}>-</button>
                  <button>{count}</button>
                  <button onClick={handleIncrease}>+</button>
                </div>
              </td>
              <td>$110.00</td>
              <td>
                <span></span>
              </td>
            </tr>
            <tr>
              <td className={cx("row-infor-product")}>
                <img src={images.cart3} alt="" />
                <h5>Organic Bananas</h5>
              </td>
              <td>$55.00</td>
              <td>
                <div className={cx("quantity")}>
                  <button onClick={handleDecrease}>-</button>
                  <button>{count}</button>
                  <button onClick={handleIncrease}>+</button>
                </div>
              </td>
              <td>$110.00</td>
              <td>
                <span></span>
              </td>
            </tr>
          </tbody>
        </table>

        <button className={cx("btn-continue")} onClick={handleBackToPage}>
          CONTINUE SHOPPING
        </button>
        <div className={cx("receipt")}>
          <div></div>
          <div>
            <h3>Cart Total</h3>
            <ul>
              <li>Subtotal</li>
              <li>$454.98</li>
            </ul>
            <ul>
              <li>Total</li>
              <li>$454.98</li>
            </ul>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
