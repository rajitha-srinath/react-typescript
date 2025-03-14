import "./App.css";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
// import { User } from "./components/context/User";
// import Private from "./components/auth/Private";
// import Profile from "./components/auth/Profile";
// import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restrictions/RandomNumbers";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <UserContextProvider>
          <RandomNumber value={10} isPositive />
        </UserContextProvider>
      </ThemeContextProvider>id: '', 
    </div>
  );
}

export default App;
