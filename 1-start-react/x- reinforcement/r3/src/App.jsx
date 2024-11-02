import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import SearchBar from "./components/SearchBar";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchBar />
        
        <h1>Products</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <AddProductForm />
      </BrowserRouter>
    </>
  );
}

export default App;
