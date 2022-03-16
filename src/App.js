import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Login } from "./components/login";
import { Home } from "./components/home";

const App = () => {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} user={user} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

const Page = styled(BrowserRouter)`
  width: 100vw;
`;

export default App;
