import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstComponent />
      <p className="MyFirstClass">My text :D</p>

      {/* Comment in JSX */}

      <TemplateExpressions />

      <Events/>
    </>
  );
}

export default App;
