import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

import { CounterContext } from "./contexts/CounterContext";
import { useContext } from "react";

function App() {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SearchBar />

        <h1>Context Value: {counter}</h1>
        <button onClick={(e) => setCounter(counter + 1)}>Context + 1</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
