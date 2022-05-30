import useDarkMode from "./hooks/useDarkMode"
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const Layout = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <div className={theme + " min-h-screen flex flex-col"}>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <main className="grow flex justify-center bg-slate-50 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
