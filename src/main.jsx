import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Header from "./Header.jsx";
import ProductCard from "./ProductCard.jsx";
import Footer from "./Footer.jsx";
import Cartlist from "./Cart.jsx";
import Cart from "./Cart.jsx";

const products = [
  {
    name: "Stylish Noise-Cancelling Headphones",
    description:
      "Immerse yourself in pure audio bliss with our premium noise-cancelling headphones. Perfect for travel or focused work",
    disAmount: "$149.99",
    Amount: "$199.99",
    reveiw: "128 ",

    rating: 3.5,
    id: 1,
  },

  {
    name: "Advanced Fitness Smartwatch",
    description:
      "Track your health and stay connected with our feature-packed smartwatch. Waterproof and long-lasting battery",
    disAmount: "$99.00",
    Amount: "$120.00",
    reveiw: "250",

    rating: 2,
    id: 2,
  },
  {
    name: "Mechanical RGB Gaming Keyboard",
    description:
      "Experience lightning-fast responsiveness with our customizable RGB gaming keyboard. Built for champions",
    disAmount: "$75.50",
    Amount: "$120.00",
    reveiw: "80",

    rating: 3,
    id: 3,
  },

  {
    name: "Ergonomic Wireless Mouse",
    description:
      "Work comfortably for hours with our precision ergonomic mouse. Say goodbye to wrist strain.",
    disAmount: "$99.00",
    Amount: "$120.00",
    reveiw: "150 ",

    rating: 5.3,
    id: 4,
  },

  {
    name: "Compact Portable Bluetooth Speaker",
    description:
      "Enjoy your music anywhere with this powerful and portable Bluetooth speaker. Great bass and battery life.",
    disAmount: "$98.00",
    Amount: "$100.00",
    reveiw: "300",
    rating: 2.3,
    id: 5,
  },

  {
    name: "Universal Smart Home Hub",
    description:
      "Control all your smart devices from one central hub. Simplify your home automation",
    disAmount: "$99.00",
    Amouny: "$120.00",
    reveiw: "25",
    rating: 4.3,
    id: 6,
  },
];
function ProductList() {
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  function addProductToCart(product) {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
  }

  return (
    <>
      <Cart selectedProducts={selectedProducts} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            addProductToCart={addProductToCart}
          />
        ))}
      </div>
    </>
  );
}

const container = (
  <div className="p-6 space-y-4">
    <Header />
    <ProductList />
    <Footer />
  </div>
);
const root = createRoot(document.getElementById("root"));
root.render(container);
