import React from "react";
import { Outlet } from "react-router-dom";
// Antd
import { Col, Row } from "antd";
import {
  DashboardOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
// style
import styles from "./AdminLayout.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const getItem = (label, key, icon, children, type) => ({
  key,
  icon,
  children,
  label,
  type,
});

const items = [
  getItem("Navigation One", "sub1", <DashboardOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
  getItem("Categories", "sub2", <UnorderedListOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Products", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const AdminLayout = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Row>
      <Col span={4}>
        <Menu
          onClick={onClick}
          className={cx("menu")}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Col>
      <Col span={20} style={{ marginLeft: -30 }}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default AdminLayout;
