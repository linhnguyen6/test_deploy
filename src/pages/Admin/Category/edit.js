import { Button, Checkbox, Col, Form, Input } from "antd";
import { getOne, update } from "../../../api/category";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategoryEdit = () => {
  document.title = "Update Category";
  const { id } = useParams();

  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { status } = await update({ ...values, id });
    if (status === 200) {
      navigate("/admin/dashboard");
    }
  };

  const getCategory = async () => {
    const { data } = await getOne(id);
    setCategory(data);
  };

  useEffect(() => {
    getCategory();
  }, [id]);

  return category ? (
    <Col span={8} offset={1}>
      <Form
        name="basic"
        initialValues={{
          name: category.name,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
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
  ) : null;
};

export default CategoryEdit;
