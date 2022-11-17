import React, { useState } from "react";
import axios from "axios";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/user`, {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1> Register </h1>
      <form onSubmit={createUser}>
        <input
          type="text"
          value={name}
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="register" />
      </form>
    </div>
  );
}

export default Register;
