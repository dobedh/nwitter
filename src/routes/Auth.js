import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      console.log(value);
    } else if (name === "password") {
      setPassword(value);
      console.log(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="login" />
      </form>
      <button>Login With Facebook</button>
      <button>Login With Google</button>
    </div>
  );
};

export default Auth;
