import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Taniya",
      email: "taani@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};
