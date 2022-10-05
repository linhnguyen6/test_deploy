import { Navigate, Route, Routes } from "react-router-dom";
// Components
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Category from "./pages/Category/Category";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Protected from "./components/Protected";
import AdminLayout from "./layouts/AdminLayout";
import PageNotFound from "./pages/PageNotFound";
import {
  CategoryAdmin,
  ProductAdmin,
  CartAdmin,
  CategoryEdit,
  CategoryAdd,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="category/:slug" element={<Category />} />
        <Route path="product/:slug" element={<DetailProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route
        path="admin"
        element={
          <Protected>
            <AdminLayout />
          </Protected>
        }
      >
        <Route index element={<Navigate to={"dashboard"} />} />
        <Route path="dashboard" element={<CategoryAdmin />} />
        <Route path="categories">
          <Route index element={<CategoryAdmin />} />
          <Route path=":id/edit" element={<CategoryEdit />} />
          <Route path="add" element={<CategoryAdd />} />
        </Route>
        <Route path="products">
          <Route index element={<ProductAdmin />}></Route>
        </Route>
        <Route path="cart" element={<CartAdmin />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
