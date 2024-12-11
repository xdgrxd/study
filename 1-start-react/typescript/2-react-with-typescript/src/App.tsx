import { createContext } from "react";
import "./App.css";
import Destructuring, { Category } from "./components/Destructuring";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

type textOrNull = string | null;

type fixed = "this" | "or" | "that";

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  const name: string = "Gui";
  const age: number = 22;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Hi, ${name}!`;
  };

  const myText: textOrNull = "Any text!";
  let mySecondText: textOrNull = null;

  mySecondText = "Whopsy!";

  const testingFixed: fixed = "this";

  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };
  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.TS}
        />
        <Destructuring
          title="First Post"
          content="Some content!"
          commentsQty={5}
          tags={["js", "ts"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Text in variable!</p>}
        {mySecondText && <p>Text in variable!</p>}
        {testingFixed && <p>YESSS!</p>}
      </>
    </AppContext.Provider>
  );
}

export default App;
