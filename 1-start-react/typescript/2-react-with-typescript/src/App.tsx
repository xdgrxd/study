import './App.css'

function App() {
  const name: string = "Gui";
  const age: number = 22;
  const isWorking: boolean = true;

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  return (
    <>
      <h1>React with TypeScript</h1>
      <h2>Name: {name}</h2>

      <p>Age: {age}</p>

      {isWorking && <p>{name} is working! xD</p>}

      <h3>{userGreeting(name)}</h3>
    </>
  )
}

export default App
