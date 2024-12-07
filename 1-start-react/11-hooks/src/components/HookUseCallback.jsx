import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDB = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDB} />
      <button onClick={() => setCounter(counter + 1)}>Change</button>
      <p>{counter}</p>
    </div>
  );
};

export default HookUseCallback;
