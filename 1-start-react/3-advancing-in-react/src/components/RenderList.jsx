import { useState } from "react";

const RenderList = () => {
  const [list] = useState(["Apple", "Tesla", "Samsung"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Gui", age: 21 },
    { id: 2, name: "Cleitin", age: 70 },
    { id: 3, name: "Valdomiro", age: 12 },
  ]);

  /* PREVIOUS STATE = = = = = = */
  /* PREVIOUS STATE = = = = = = */
  /* PREVIOUS STATE = = = = = = */
  const DeleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Key property */}
      {/* Key property */}
      {/* Key property */}

      <ul>
        {users.map((user, i) => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
      <button onClick={DeleteRandom}>Delete random user</button>
    </div>
  );
};

export default RenderList;
