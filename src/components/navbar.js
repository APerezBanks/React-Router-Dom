import { Link } from "react-router-dom";

export const Navbar = ({ setUser }) => {
  const logOut = () => {
    setUser();
    localStorage.removeItem("myToken");
  };

  return (
    <>
      <Link to="/">Go back to login</Link>
      <button onClick={logOut}>LogOut</button>
    </>
  );
};
