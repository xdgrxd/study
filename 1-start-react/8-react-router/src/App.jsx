import "./App.css";

// CONFIG REACT ROUTER
// CONFIG REACT ROUTER
// CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <h1>React Router</h1>

      {/* REACT ROUTER LINKS */}
      <BrowserRouter>
        <Navbar />
        {/* SEARCH */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* DYNAMIC ROUTE */}
          <Route path="/products/:idItem" element={<Product />} />

          {/* NESTED ROUTE */}
          <Route path="/products/:idItem/info" element={<Info />} />

          {/* SEARCH */}
          <Route path="/search" element={<Search />} />

          {/* REDIRECT */}
          <Route path="/company" element={<Navigate to="/about" />} />

          {/* NO MATCH ROUTE (ERROR 404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
