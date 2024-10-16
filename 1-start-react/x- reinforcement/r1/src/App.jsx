import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";

// COMPONENTS
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:idItem" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
