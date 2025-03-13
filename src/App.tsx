import "./App.css";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <UserContextProvider>
          <Box />
          <User />
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
