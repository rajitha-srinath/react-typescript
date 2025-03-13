import "./App.css";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <UserContextProvider>
          <Box />
          <User />
          <Private isLoggedIn={true} component={Profile} />
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
