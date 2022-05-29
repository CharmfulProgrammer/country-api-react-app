import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
      <main className="flex justify-center bg-slate-50 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
