import classNames from "classnames";

import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const navbarClasses = classNames(
  "bg-gray-800",
  "flex",
  "justify-between",
  "p-4",
  "items-center"
);
const storeNameClasses = classNames("text-lg", "font-bold", "text-white");
const linkClasses = classNames("text-white", "hover:text-gray-400");
const inputClasses = classNames(
  "px-2",
  "py-1",
  "bg-gray-700",
  "rounded-md",
  "focus:outline-none",
  "focus:ring-1",
  "focus:ring-white"
);
const Navbar = () => (
  <nav className={navbarClasses}>
    <div className={storeNameClasses}>Store Name</div>
    <div className="flex space-x-4">
      <div className={linkClasses}>Home</div>
      <div className={linkClasses}>Catelog</div>
      <div className={linkClasses}>Contact</div>
    </div>
    <div className="flex items-center">
      <div className="flex items-center text-white">
        <input type="text" placeholder="Search" className={inputClasses} />
        <IoIosSearch className="relative right-6 size-5" />
      </div>
      <div className="text-white hover:text-gray-400">
        <IoCartOutline className="size-8" />
      </div>
    </div>
  </nav>
);

export default Navbar;
