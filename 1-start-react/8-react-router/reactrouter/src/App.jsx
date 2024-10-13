import "./App.css";

// CONFIG REACT ROUTER
// CONFIG REACT ROUTER
// CONFIG REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
