import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    console.log(name)
    console.log(email)
    console.log(password)
  }

  return (
    <div className="App">
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
        <input type="submit" value='register' onClick={createUser}/>
      </form>
    </div>
  );
}

export default App;
