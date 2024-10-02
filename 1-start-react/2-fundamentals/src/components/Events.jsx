const Events = () => {
  const handleMyEvent = () => {
    alert("Event is active!")
  }

  const renderSomething = (x) => {
    if (x) {
      return <h1>X is true :)</h1>
    } else {
      return <h1>X isn't true :/</h1>
    }
  }

  return <>
    <div>
      <div>
        <button onClick={handleMyEvent}>👉 Click Here 👈</button>
        <button onClick={() => alert("ARGHHHHHHH")}>And here?</button>

        <button onClick={() => {
          {/* Don't put complex logic in HTML */}
          
          if (true) {
            alert("It isn't cool :(") 
          }
        }}>Last time (serious)</button>

        {renderSomething(1)}
      </div>
    </div>
  </>;
};

export default Events;
