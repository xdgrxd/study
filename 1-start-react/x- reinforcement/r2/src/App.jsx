import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// COMPONENTS
import Header from "./components/Header";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
