import "./App.css";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
// import { User } from "./components/context/User";
// import Private from "./components/auth/Private";
// import Profile from "./components/auth/Profile";
import { List } from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <UserContextProvider>
          <Box />
          {/* <User />
          <Private isLoggedIn={true} component={Profile} /> */}
          {/* <List
            items={["Batman", "superman", "Antman"]}
            onClick={(item) => console.log(item)}
          />
          <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
          <List
            items={[
              { id: 1, first: "Bruce", last: "wayne" },
              { id: 2, first: "Clark ", last: "Kent" },
              { id: 3, first: "Peter", last: "Parker" },
            ]}
            onClick={(item) => console.log(item)}
          />
        </UserContextProvider>
      </ThemeContextProvider>id: '', 
    </div>
  );
}

export default App;
