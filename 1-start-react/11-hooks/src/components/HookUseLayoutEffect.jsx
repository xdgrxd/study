import { useEffect, useLayoutEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Anyname with value");

  useEffect(() => {
    console.log(2);
    setName("Changed again!");
  }, []);

  // ALWAYS BEE INVOKED FIRST

  useLayoutEffect(() => {
    console.log("1");
    setName("Other name");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Name: {name}</p>
    </div>
  );
};

export default HookUseLayoutEffect;
