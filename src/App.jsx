import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import Home from "./components/Home";
import Checkout from "./components/Checkout"
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter >
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/order" element={<ProductCard />} />
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


