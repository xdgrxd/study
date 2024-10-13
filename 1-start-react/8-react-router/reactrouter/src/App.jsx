import "./App.css";

// CONFIG REACT ROUTER
// CONFIG REACT ROUTER
// CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <h1>React Router</h1>

      {/* REACT ROUTER LINKS */}
      {/* REACT ROUTER LINKS */}
      {/* REACT ROUTER LINKS */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* DYNAMIC ROUTE */}
          {/* DYNAMIC ROUTE */}
          {/* DYNAMIC ROUTE */}
          <Route path="/products/:idItem" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
