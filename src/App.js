import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = React.lazy(() => import("./components/Layout"));
const About = React.lazy(() => import("./components/About"));
const Home = React.lazy(() => import("./components/Home"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const SignUp = React.lazy(() => import("./components/signup/SignUp"));
const LogIn = React.lazy(() => import("./components/login/LogIn"));
const VendorLayout = React.lazy(() => import("./components/vendor/Layout"));
const Product = React.lazy(() => import("./components/Product/Product"));
const VendorContent = React.lazy(() =>
  import("./components/vendor/VendorContent")
);
const VendorAddProduct = React.lazy(() =>
  import("./components/vendor/AddProduct")
);
const VendorProductList = React.lazy(() =>
  import("./components/vendor/ProductList")
);
const router = createBrowserRouter([
  // main route
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "product",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  // sign up
  {
    path: "/sign-up",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
  // login
  {
    path: "/log-in",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LogIn />
      </Suspense>
    ),
  },
  // vendor  dashboard
  {
    path: "/vendor",
    element: (
      <Suspense fallback={<div>Loading.......</div>}>
        <VendorLayout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading.......</div>}>
            <VendorContent />
          </Suspense>
        ),
        children: [
          {
            path: "add-product",
            element: (
              <Suspense fallback={<div>Loading.......</div>}>
                <VendorAddProduct />
              </Suspense>
            ),
          },
          {
            path: "product-list",
            element: (
              <Suspense fallback={<div>Loading.......</div>}>
                <VendorProductList />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
