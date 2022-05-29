import { BsMoon, BsMoonFill } from "react-icons/bs";
const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="py-5 flex justify-center shadow-md sticky top-0 bg-white dark:bg-gray-800 dark:text-white z-50">
      <div className="mx-5 w-full max-w-screen-xl flex justify-between">
        <h1 className="text-lg font-semibold">Where in the world?</h1>
        <button
          className="flex items-center font-thin"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BsMoonFill/> : <BsMoon/>}
          <span className="ml-1">Dark Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
