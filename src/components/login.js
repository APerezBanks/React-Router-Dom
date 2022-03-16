import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { createUser, login, tokenLogin } from "../utils";

export const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenLogin(setUser);
    }
  }, [setUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    // setUser({ username: username, email: email, pass: pass });
    if (bool) {
      login(username, pass, setUser);
    } else if (email && email.includes("@")) {
      createUser(username, email, pass, setUser);
    }
  };

  return (
    <>
      {user && <Navigate to="/home" />}
      <FormContainer onSubmit={submitHandler}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        />
        {!bool && (
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            type="email"
          />
        )}
        <input
          onChange={(event) => setPass(event.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Submit</button>
      </FormContainer>
      <button onClick={() => setBool(!bool)}>Log-in or Sign-up</button>
    </>
  );
};

const FormContainer = styled.form`
  width: 80vw;
  border: solid 2px black;
`;
