import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // CONTROLLED INPUTS
  // CONTROLLED INPUTS
  // CONTROLLED INPUTS
  const [userName, setUserName] = useState(user ? user.userName : "");
  const [userEmail, setUserEmail] = useState(user ? user.userEmail : "");

  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState("");

  // DATA HANDLING
  // DATA HANDLING
  // DATA HANDLING
  const handleName = (e) => {
    setUserName(e.target.value);
  };

  // console.log(userName);
  // console.log(userEmail);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending...");
    console.log(userName, userEmail, bio, role);

    // CLEAR FORM AFTER SUBMIT
    // CLEAR FORM AFTER SUBMIT
    // CLEAR FORM AFTER SUBMIT
    setUserName("");
    setUserEmail("");
    setBio("");
  };

  return (
    <div>
      {/* FORM CREATE */}
      {/* FORM CREATE */}
      {/* FORM CREATE */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Type your name here"
            onChange={handleName}
            value={userName}
          />
        </div>

        {/* LABEL INVOLVING INPUT */}
        {/* LABEL INVOLVING INPUT */}
        {/* LABEL INVOLVING INPUT */}
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Insert your email"
            // SHORT MODE OF STATE HANDLING
            // SHORT MODE OF STATE HANDLING
            // SHORT MODE OF STATE HANDLING
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
        </label>
        <label>
          <textarea
            name="bio"
            placeholder="User description"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>

        {/* SELECT */}
        {/* SELECT */}
        {/* SELECT */}
        <label>
          <span>Role</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default MyForm;
