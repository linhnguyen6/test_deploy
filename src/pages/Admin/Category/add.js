import { Button, Col, Form, Input } from "antd";
import { create } from "../../../api/category";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryAdd = () => {
  document.title = "Add Category";
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { status } = await create(values);
    if (status === 201) {
      navigate("/admin/dashboard");
    }
  };

  return (
    <Col span={8} offset={1}>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Category"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your category!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default CategoryAdd;
