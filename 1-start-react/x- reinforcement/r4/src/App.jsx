import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SearchBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/any-link" element={<Navigate to="/about" />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
