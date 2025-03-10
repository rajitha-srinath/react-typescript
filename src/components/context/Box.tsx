import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "./Theme";

export const Box = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Box must be used within a ThemeContextProvider");
  }

  const { theme, toggleTheme } = context;
  const currentTheme = theme === "light" ? Theme.light : Theme.dark;

  return (
    <>
      <div
        style={{
          backgroundColor: currentTheme.main,
          color: currentTheme.text,
          width: "300px",
          height: "300px",
          margin: "20px auto",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "center",
          display: "flex",
        }}
      >
        <p>Theme Context</p>
      </div>

      <button
        style={{
          backgroundColor: "pink",
          padding: "10px",
          borderRadius: "15px",
          fontFamily: "monospace",
          fontWeight: "bold",
          fontSize: "18px",
        }}
        onClick={toggleTheme}
      >
        ChangeTheme
      </button>
    </>
  );
};
