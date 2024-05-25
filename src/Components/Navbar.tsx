import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => (
  <nav>
    <div>Store Name</div>
    <div>
      <div>Home</div>
      <div>Catelog</div>
      <div>Contact</div>
    </div>
    <div>
      <div>
        <input type="text" placeholder="Search" />
        <IoIosSearch className="right-6 size-5" />
      </div>
      <div>
        <IoCartOutline className="size-8" />
      </div>
    </div>
  </nav>
);

export default Navbar;
