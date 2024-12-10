import "./App.css";
import Destructuring from "./components/Destructuring";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  const name: string = "Gui";
  const age: number = 22;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Hi, ${name}!`;
  };

  return (
    <>
      <h1>React with TypeScript</h1>
      <h2>Name: {name}</h2>

      <p>Age: {age}</p>

      {isWorking && <p>{name} is working! xD</p>}

      <h3>{userGreeting(name)}</h3>
      <FirstComponent />

      <SecondComponent name="I'AM THE FCKNG SECOND NAMEEE" />

      <Destructuring
        title="First Post"
        content="Some content!"
        commentsQty={5}
        tags={["js", "ts"]}
      />
    </>
  );
}

export default App;
