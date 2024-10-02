import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Elon Musk")

  return <div>
    <h1>Will be displayed?</h1>
    {x && <p>If X is true</p>}
    {!x && <p>If Now is false</p>}

    {/* RENDER WITH TERNARY OPERATOR */}
    {/* RENDER WITH TERNARY OPERATOR */}
    {/* RENDER WITH TERNARY OPERATOR */}  

    {name === "Mark Zuckeberg" ? (<div> <p>He is Mark!</p> </div>) : (<div> <p>Name isn't found</p></div>)}

    <button onClick={() => {setName("Mark Zuckeberg")}}>Click to change</button>
  </div>;
};

export default ConditionalRender;
