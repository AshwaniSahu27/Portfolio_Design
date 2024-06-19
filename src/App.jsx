import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="flex min-h-screen w-full">
          <Header />
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
