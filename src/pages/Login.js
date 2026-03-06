import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login clicked");
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h2>Inventory Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;