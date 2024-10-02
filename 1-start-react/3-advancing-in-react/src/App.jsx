import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Cyberpunk from "./assets/cyberpunk.jpg";
import ManageData from "./components/ManageData";
import RenderList from "./components/RenderList";
import ConditionalRender from "./components/ConditionalRender";
import ShowUsername from "./components/ShowUsername";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const [fruit] = useState("Apple");

  const cars = [
    { id: 1, brand: "McLaren", color: "White", newCar: true, model: "Sport" },
    { id: 2, brand: "Ferrari", color: "Red", newCar: false, model: "SUV" },
    { id: 3, brand: "Bugatti", color: "Purple", newCar: false, model: "Sport" },
  ];

  function showMessage() {
    alert("Component event here xD");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Advancing in React</h1>
      <img src="/kkkkk.jpg" alt="Portrait" />

      <div>
        <h2>Image in public</h2>
        <img src="/lion.jpg" alt="Landscape" />
      </div>

      <div>
        <h2>Image in assets</h2>
        <img src={Cyberpunk} alt="Landscape" />
      </div>

      <ManageData />
      <RenderList />
      <ConditionalRender />

      {/* PROPS */}
      {/* PROPS */}
      {/* PROPS */}
      <ShowUsername name={"Jorgin"} fruitIs={fruit} />

      {/* DESTRUCTURING */}
      {/* DESTRUCTURING */}
      {/* DESTRUCTURING */}
      <CarDetails
        brand={"Mercedes"}
        model={"SUV"}
        color={"Black"}
        newCar={true}
      />

      {/* REUSE */}
      {/* REUSE */}
      {/* REUSE */}
      <CarDetails brand={"BMW"} model={"Sedan"} color={"Blue"} newCar={false} />
      <CarDetails
        brand={"Porsche"}
        model={"SUV"}
        color={"White"}
        newCar={true}
      />

      <hr />

      {/* LIST RENDER WITH PROPS */}
      {/* LIST RENDER WITH PROPS */}
      {/* LIST RENDER WITH PROPS */}
      {cars.map((car) => (
        <CarDetails
          key={car.id} // KEY PROBLEM SOLVED HERE
          brand={car.brand}
          color={car.color}
          model={car.model}
          newCar={car.newCar}
        />
      ))}

      {/* FRAGMENT */}
      {/* FRAGMENT */}
      {/* FRAGMENT */}
      <Fragment />

      {/* CHILDREN */}
      {/* CHILDREN */}
      {/* CHILDREN */}
      <Container propValue={"Pear is cool"}>This is the content.</Container>

      {/* EXECUTE FUNCTION */}
      {/* EXECUTE FUNCTION */}
      {/* EXECUTE FUNCTION */}
      <ExecuteFunction myFunction={showMessage} />

      {/* STATE LIFT */}
      {/* STATE LIFT */}
      {/* STATE LIFT */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  );
}

export default App;
