import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Forms</h1>
      <MyForm
        user={{
          userName: "Joseph",
          userEmail: "homenalder@gmail.com",
          bio: "I Love Dogs!",
        }}
      />
    </>
  );
}

export default App;
