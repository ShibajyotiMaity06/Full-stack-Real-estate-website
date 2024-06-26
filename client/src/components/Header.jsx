import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
          <Link to="/">
            <span className="text-red-700">Golden</span>
            <span className="text-red-600">Estates</span>
          </Link>
        </h1>

        <form className="bg-slate-200 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none  w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-700 hover:underline">Sign-In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

// focus outline removes the border when we click on search
// Link helps to navigate from one page to other w/o refreshing
